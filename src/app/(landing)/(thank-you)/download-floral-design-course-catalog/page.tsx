import type { Metadata } from 'next';
import Link from 'next/link';

import HeroImage from '../../free-floral-design-course-catalog/hero.jpg';
import { Header } from '../../header';
import { DownloadSection } from '../_components/downloadSection';
import type { PageComponent } from '@/app/serverComponent';
import DownloadIcon from '@/components/download.svg';
import { GoogleReviewSection } from '@/components/googleReviewSection';
import { ILEASection } from '@/components/ileaSection';
import { LeadProcessing } from '@/components/leadProcessing';
import { SetCookie } from '@/components/setCookie';
import { SupportSection } from '@/components/supportSection';
import type { CourseCode } from '@/domain/courseCode';
import type { UserValues } from '@/domain/userValues';
import { fbPostLead } from '@/lib/facebookConversionAPI';
import { getServerData } from '@/lib/getData';
import { getLead } from '@/lib/getLead';
import { getParam } from '@/lib/getParam';
import { createJwt } from '@/lib/jwt';

const courseCode: CourseCode = 'fd';

export const metadata: Metadata = {
  title: 'Your Course Catalog',
  alternates: { canonical: '/download-floral-design-course-catalog' },
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
      <Header logoLink buttonHref="#download" buttonContent={<><span className="text-light"><DownloadIcon height="14" className="me-2" style={{ position: 'relative', top: -1 }} /></span><span className="d-none d-sm-inline">Get Your Free </span>Catalog</>} showBanner />
      <DownloadSection countryCode={countryCode} heroSrc={HeroImage} course="fd" leadId={leadId} telephoneListId={53} />
      <GoogleReviewSection className="bg-light" courseCode={courseCode} />
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
