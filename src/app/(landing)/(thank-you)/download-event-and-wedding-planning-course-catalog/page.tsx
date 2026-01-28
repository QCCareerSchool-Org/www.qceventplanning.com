import type { Metadata } from 'next';
import { cookies, headers } from 'next/headers';
import Link from 'next/link';

import { Header } from '../../header';
import { CurrentPromotion } from '../_components/currentPromotion';
import { DownloadSection } from '../_components/downloadSection';
import type { PageComponent } from '@/app/serverComponent';
import DownloadIcon from '@/components/download.svg';
import { GoogleReviewSection } from '@/components/googleReviewSection';
import HeroLgImage from '@/components/homeHeroImage/hero-large.jpg';
import HeroSmImage from '@/components/homeHeroImage/hero-small.jpg';
import { ILEASection } from '@/components/ileaSection';
import { LeadProcessing } from '@/components/leadProcessing';
import { SupportSection } from '@/components/supportSection';
import { fbPostLead } from '@/lib/facebookConversionAPI';
import { getServerData } from '@/lib/getData';
import { getLead } from '@/lib/getLead';
import { getParam } from '@/lib/getParam';

export const metadata: Metadata = {
  title: 'Your Course Catalog',
  alternates: { canonical: '/download-event-and-wedding-planning-course-catalog' },
  robots: { index: false },
};

const ThankYouCourseCatalogPage: PageComponent = async props => {
  const { date } = await getServerData(props.searchParams);
  const searchParams = await props.searchParams;
  const leadId = getParam(searchParams.leadId);
  const headerList = await headers();
  const ipAddress = headerList.get('x-real-ip') ?? undefined;
  const userAgent = headerList.get('user-agent') ?? undefined;
  const cookieStore = await cookies();
  const fbc = cookieStore.get('_fbc')?.value;
  const fbp = cookieStore.get('_fbp')?.value;

  const lead = leadId ? await getLead(leadId) : undefined;

  const [ emailAddress, firstName, lastName, countryCode, provinceCode ] = lead?.success
    ? [ lead.value.emailAddress, lead.value.firstName ?? undefined, lead.value.lastName ?? undefined, lead.value.countryCode ?? 'US', lead.value.provinceCode ?? undefined ]
    : [];

  try {
    if (leadId && emailAddress) {
      await fbPostLead(leadId, new Date(date), emailAddress, firstName, lastName, countryCode, provinceCode, ipAddress, userAgent, fbc, fbp);
    }
  } catch (err) {
    console.error(err);
  }

  return (
    <>
      <LeadProcessing
        emailAddress={emailAddress}
        countryCode={countryCode}
        provinceCode={provinceCode}
        firstName={firstName}
        lastName={lastName}
        ipAddress={ipAddress}
        leadId={leadId}
        conversionId="AW-1071836607/9wB_CNvknggQv9uL_wM"
      />
      <Header buttonHref="#download" logoLink buttonContent={<><span className="text-light"><DownloadIcon height="14" className="me-2" style={{ position: 'relative', top: -1 }} /></span><span className="d-none d-sm-inline">Get Your Free </span>Catalog</>} showBanner />
      <DownloadSection countryCode={countryCode ?? 'US'} heroSrc={HeroLgImage} mobileHeroSrc={HeroSmImage} leadId={leadId} telephoneListId={53} />
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
