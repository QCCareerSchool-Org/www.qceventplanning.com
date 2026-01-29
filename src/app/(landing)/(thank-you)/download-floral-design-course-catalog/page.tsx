import type { Metadata } from 'next';
import { cookies } from 'next/headers';
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
      <SetCookie name="user" value={jwt} domain="qceventplanning.com" />
      <LeadProcessing
        emailAddress={emailAddress}
        countryCode={countryCode}
        provinceCode={provinceCode}
        firstName={firstName}
        lastName={lastName}
        leadId={leadId}
        conversionId="AW-1071836607/9wB_CNvknggQv9uL_wM"
      />
      <Header logoLink buttonHref="#download" buttonContent={<><span className="text-light"><DownloadIcon height="14" className="me-2" style={{ position: 'relative', top: -1 }} /></span><span className="d-none d-sm-inline">Get Your Free </span>Catalog</>} showBanner />
      <DownloadSection countryCode={countryCode ?? 'US'} heroSrc={HeroImage} course="fd" leadId={leadId} telephoneListId={53} />
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
