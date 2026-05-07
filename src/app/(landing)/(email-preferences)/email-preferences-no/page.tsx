import type { Metadata } from 'next';
import Link from 'next/link';

import { getThankyouData } from '../../(thank-you)';
import { CurrentPromotion } from '../../(thank-you)/_components/currentPromotion';
import { Header } from '../../header';
import { EmailPreferencesNoSection } from '../_components/emailPreferencesNoSection';
import { GoogleReviewSection } from '@/components/googleReviewSection';
import HeroLgImage from '@/components/homeHeroImage/hero-large.jpg';
import HeroSmImage from '@/components/homeHeroImage/hero-small.jpg';
import { ILEASection } from '@/components/ileaSection';
import { LeadProcessing } from '@/components/leadProcessing';
import { SetCookie } from '@/components/setCookie';
import { SupportSection } from '@/components/supportSection';
import type { PageComponent } from '@/serverComponent';

export const metadata: Metadata = {
  title: 'Your Course Catalog',
  alternates: { canonical: '/thank-you-course-catalog' },
  robots: { index: false },
};

const telephoneListId = 53;

const EmailPreferencesNoPage: PageComponent = async props => {
  const { countryCode, emailAddress, lead, jwt, recent, date } = await getThankyouData(props);
  const searchParams = await props.searchParams;
  const alreadyPrompted = searchParams.t;

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
        />
      )}
      <Header logoLink showBanner buttonAlwaysVisible buttonContent="Enroll Now" buttonHref="https://enroll.qceventplanning.com" />
      <EmailPreferencesNoSection emailAddress={emailAddress} countryCode={countryCode} heroSrc={HeroLgImage} mobileHeroSrc={HeroSmImage} leadId={lead?.leadId} telephoneListId={alreadyPrompted ? undefined : telephoneListId} />
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

export default EmailPreferencesNoPage;
