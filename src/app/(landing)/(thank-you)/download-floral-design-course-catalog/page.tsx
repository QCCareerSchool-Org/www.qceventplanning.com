import type { Metadata } from 'next';
import Link from 'next/link';

import { getThankyouData } from '..';
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

const courseCode: CourseCode = 'fd';

export const metadata: Metadata = {
  title: 'Your Course Catalog',
  alternates: { canonical: '/download-floral-design-course-catalog' },
  robots: { index: false },
};

const ThankYouCourseCatalogPage: PageComponent = async props => {
  const { countryCode, emailAddress, lead, jwt, recent, date } = await getThankyouData(props);

  return (
    <>
      {jwt && <SetCookie name="user" value={jwt} domain="qceventplanning.com" />}
      {lead && recent && (
        <LeadProcessing
          emailAddress={lead.emailAddress}
          telephoneNumber={lead.telephoneNumber}
          city={lead.city}
          countryCode={lead.countryCode}
          provinceCode={lead.provinceCode}
          firstName={lead.firstName}
          lastName={lead.lastName}
          leadId={lead.leadId}
          conversionId="AW-1071836607/9wB_CNvknggQv9uL_wM"
        />
      )}
      <Header logoLink buttonHref="#download" buttonContent={<><span className="text-light"><DownloadIcon height="14" className="me-2" style={{ position: 'relative', top: -1 }} /></span><span className="d-none d-sm-inline">Get Your Free </span>Catalog</>} showBanner />
      <DownloadSection emailAddress={emailAddress} countryCode={countryCode} heroSrc={HeroImage} course="fd" leadId={lead?.leadId} telephoneListId={53} />
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
