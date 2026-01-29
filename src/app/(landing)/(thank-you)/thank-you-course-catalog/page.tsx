import type { Metadata } from 'next';
import { cookies } from 'next/headers';
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
  const [ data, searchParams, cookieStore ] = await Promise.all([
    getServerData(props.searchParams),
    props.searchParams,
    cookies(),
  ]);
  const date = data.date;
  const leadId = getParam(searchParams.leadId);
  const fbc = cookieStore.get('_fbc')?.value;
  const fbp = cookieStore.get('_fbp')?.value;

  const lead = leadId ? await getLead(leadId) : undefined;

  const [ emailAddress, telephoneNumber, firstName, lastName, city, provinceCode, countryCode, ip ] = lead?.success
    ? [ lead.value.emailAddress, lead.value.telephoneNumber ?? undefined, lead.value.firstName ?? undefined, lead.value.lastName ?? undefined, lead.value.city ?? undefined, lead.value.provinceCode ?? undefined, lead.value.countryCode ?? 'US', lead.value.ip ]
    : [];

  try {
    if (leadId && emailAddress) {
      await fbPostLead(leadId, new Date(date), emailAddress, firstName, lastName, countryCode, provinceCode, ip ?? data.serverIp, data.userAgent, fbc, fbp);
    }
  } catch (err) {
    console.error(err);
  }

  const userValues: UserValues = { emailAddress, telephoneNumber, firstName, lastName, city, provinceCode, countryCode };
  const jwt = await createJwt(userValues);

  return (
    <>
      <SetCookie name="user" value={jwt} />
      <LeadProcessing
        emailAddress={emailAddress}
        countryCode={countryCode}
        provinceCode={provinceCode}
        firstName={firstName}
        lastName={lastName}
        leadId={leadId}
        conversionId="AW-1071836607/9wB_CNvknggQv9uL_wM"
      />
      <Header logoLink showBanner buttonAlwaysVisible buttonContent="Enroll Now" buttonHref="https://enroll.qceventplanning.com" />
      <ThankYouSection countryCode={countryCode ?? 'US'} heroSrc={HeroLgImage} mobileHeroSrc={HeroSmImage} leadId={leadId} emailAddress={emailAddress} telephoneListId={53} />
      <CurrentPromotion date={date} countryCode={countryCode ?? 'US'} />
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
