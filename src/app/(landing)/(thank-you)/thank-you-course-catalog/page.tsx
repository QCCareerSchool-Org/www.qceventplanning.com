import type { Metadata } from 'next';
import Link from 'next/link';

import { Header } from '../../header';
import { CurrentPromotion } from '../_components/currentPromotion';
import { ThankYouSection } from '../_components/thankYouSection';
import type { PageComponent } from '@/app/serverComponent';
import { GoogleReviewSection } from '@/components/googleReviewSection';
import HeroLgImage from '@/components/homeHeroImage/hero-large.jpg';
import HeroSmImage from '@/components/homeHeroImage/hero-small.jpg';
import { ILEASection } from '@/components/ileaSection';
import { LeadProcessing } from '@/components/leadProcessing';
import { SetCookie } from '@/components/setCookie';
import { SupportSection } from '@/components/supportSection';
import type { UserValues } from '@/domain/userValues';
import { fbPostLead } from '@/lib/facebookConversionAPI';
import { getServerData } from '@/lib/getData';
import { getLead } from '@/lib/getLead';
import { getParam } from '@/lib/getParam';
import { createJwt } from '@/lib/jwt';

export const metadata: Metadata = {
  title: 'Your Course Catalog',
  alternates: { canonical: '/thank-you-course-catalog' },
  robots: { index: false },
};

const ThankYouCourseCatalogPage: PageComponent = async props => {
  const [ data, searchParams ] = await Promise.all([
    getServerData(props.searchParams),
    props.searchParams,
  ]);
  const date = data.date;
  const leadId = getParam(searchParams.leadId);
  const lead = leadId ? await getLead(leadId) : undefined;

  let jwt: string | null = null;

  let recent = false;

  if (lead?.success) {
    recent = lead.value.created < date + 604_800_000; // 7 days
    if (!recent) {
      try {
        await fbPostLead(lead.value.leadId, new Date(lead.value.created), lead.value.emailAddress, lead.value.firstName, lead.value.lastName, lead.value.countryCode, data.url, lead.value.ip ?? data.serverIp, data.userAgent, data.fbc, data.fbp);
      } catch (err) {
        console.error(err);
      }
    }
    const userValues: UserValues = {
      ...data.userValues,
      emailAddress: lead.value.emailAddress,
    };
    if (lead.value.telephoneNumber) {
      userValues.telephoneNumber = lead.value.telephoneNumber;
    }
    if (lead.value.firstName) {
      userValues.firstName = lead.value.firstName;
    }
    if (lead.value.lastName) {
      userValues.lastName = lead.value.lastName;
    }
    if (lead.value.city) {
      userValues.city = lead.value.city;
    }
    if (lead.value.provinceCode) {
      userValues.provinceCode = lead.value.provinceCode;
    }
    if (lead.value.countryCode) {
      userValues.countryCode = lead.value.countryCode;
    }
    jwt = await createJwt(userValues);
  }

  const countryCode = lead?.success ? lead.value.countryCode ?? 'US' : 'US';

  return (
    <>
      {jwt && <SetCookie name="user" value={jwt} domain="qceventplanning.com" />}
      {lead?.success && recent && (
        <LeadProcessing
          emailAddress={lead.value.emailAddress}
          telephoneNumber={lead.value.telephoneNumber}
          city={lead.value.city}
          countryCode={lead.value.countryCode}
          provinceCode={lead.value.provinceCode}
          firstName={lead.value.firstName}
          lastName={lead.value.lastName}
          leadId={lead.value.leadId}
          conversionId="AW-1071836607/9wB_CNvknggQv9uL_wM"
        />
      )}
      <Header logoLink showBanner buttonAlwaysVisible buttonContent="Enroll Now" buttonHref="https://enroll.qceventplanning.com" />
      <ThankYouSection countryCode={countryCode} heroSrc={HeroLgImage} mobileHeroSrc={HeroSmImage} leadId={leadId} emailAddress={lead?.success ? lead.value.emailAddress : undefined} telephoneListId={53} />
      <CurrentPromotion date={date} countryCode={countryCode} />
      <GoogleReviewSection className="bg-light" />
      <ILEASection />
      <SupportSection date={date} />
      <section className="bg-navy text-white">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-7">
              <h2 className="mb-4">Get Personalized Guidance</h2>
              <p className="lead mb-4">Need help with payment plans or course details? Our Student Support Advisors are ready to assist you. Ask us anything!</p>
              <Link href="/contact-us" className="btn btn-lg btn-primary">Talk to an Advisor Now</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThankYouCourseCatalogPage;
