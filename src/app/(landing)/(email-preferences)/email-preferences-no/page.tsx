import type { Metadata } from 'next';
import Link from 'next/link';

import { Header } from '../../header';
import { EmailPreferencesNoSection } from '../_components/emailPreferencesSection';
import { GoogleReviewSection } from '@/components/googleReviewSection';
import HeroLgImage from '@/components/homeHeroImage/hero-large.jpg';
import HeroSmImage from '@/components/homeHeroImage/hero-small.jpg';
import { ILEASection } from '@/components/ileaSection';
import { SupportSection } from '@/components/supportSection';
import { addToBrevoList } from '@/lib/brevoAPI';
import { getBrevoContactId } from '@/lib/getBrevoContactId';
import { getServerData } from '@/lib/getServerData';
import type { PageComponent } from '@/serverComponent';

export const metadata: Metadata = {
  title: 'No problem, we\'ll update your email preferences!',
  description: 'From now on, we\'ll only reach out with specific course updates or offers when you\'re actively engaging with QC. Want to leave us for good? You can find the "Unsubscribe" link at the bottom of your last email.',
  alternates: { canonical: '/email-preferences-no' },
  robots: { index: false },
};

const brevoListId = 102;

const EmailPreferencesNoPage: PageComponent = async props => {
  const { countryCode, date } = await getServerData(props.searchParams);
  const searchParams = await props.searchParams;

  if (typeof searchParams._sc !== 'string') {
    throw new Error('Contact id missing.');
  }

  const contactId = getBrevoContactId(searchParams._sc);
  if (!contactId) {
    throw new Error('Invalid contact id.');
  }

  const addResult = await addToBrevoList(contactId, brevoListId);
  if (!addResult.success) {
    console.error(addResult.error);
  }

  return (
    <>
      <Header logoLink showBanner buttonAlwaysVisible buttonContent="Enroll Now" buttonHref="https://enroll.qceventplanning.com" />
      <EmailPreferencesNoSection countryCode={countryCode} heroSrc={HeroLgImage} mobileHeroSrc={HeroSmImage} />
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
