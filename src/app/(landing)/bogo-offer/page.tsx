import type { Metadata } from 'next';
import Link from 'next/link';

import { Header } from '../header';
import HeroImage from './hero.jpg';
import { OnlineCourseSection } from '@/app/(main)/online-event-courses/onlineCourseSection';
import type { PageComponent } from '@/app/serverComponent';
import { BackgroundImage } from '@/components/backgroundImage';
import { DeadlineFunnelScript } from '@/components/deadlineFunnelScript';
import { GetStartedSection } from '@/components/getStartedSection';
import QIcon from '@/components/q-logo.svg';
import { Subtitle } from '@/components/subtitle';
import { SupportSection } from '@/components/supportSection';
import { Testimonial } from '@/components/testimonial';
import { gbpCountry } from '@/domain/currency';
import { getServerData } from '@/lib/getServerData';
import { endOfYear2025, newYear2026 } from '@/lib/periods';

const bogoEnrollLink = 'https://enroll.qceventplanning.com/bogo-1';

export const metadata: Metadata = {
  title: 'Get Two Specialty Courses Free!',
  alternates: { canonical: '/bogo-offer' },
};

const BogoOfferPage: PageComponent = async props => {
  const { countryCode, date } = await getServerData(props.searchParams);
  const discount = gbpCountry(countryCode) ? '£100' : '$100';

  return (
    <>
      <Header />
      <DeadlineFunnelScript />
      <section className="bg-dark text-white text-shadow">
        <BackgroundImage src={HeroImage} priority />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-9 col-xl-8 text-center">
              <div className="mb-3"><Subtitle>Limited-Time Offer</Subtitle></div>
              <h1 className="h2 mb-4">Get Two Specialty Courses Free!</h1>
              <p className="lead mb-4">
                {(endOfYear2025.contains(date) || newYear2026.contains(date))
                  ? (
                    <>When you enroll in any of our foundation courses, you'll get{' '}
                      <strong>
                        {newYear2026.contains(date)
                          ? 'two specialty courses free plus $100 off'
                          : 'two specialty courses free'
                        }
                      </strong>
                      &mdash;giving you the power to design the career path that inspires you. This is your moment to take control of your future and step into the industry with confidence. More than 30,000 QC graduates have done it, and you&apos;re just one decision away from joining them.
                    </>
                  )
                  : (
                    <>Enroll in any event planning course and get <strong>{discount} off your tuition plus two specialty courses free.</strong> This is the perfect opportunity to specialize your training and become a certified expert. <strong>We've helped 30,000+ students and graduates start their own successful event planning businesses!</strong></>
                  )}
              </p>
              <Link href={bogoEnrollLink} className="btn btn-outline-light"><QIcon height="16" style={{ position: 'relative', top: -1, marginRight: '0.5rem' }} />Enroll Now</Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row g-5">
            <div className="col-12 col-lg-4">
              <Testimonial id="TE-0001" />
            </div>
            <div className="col-12 col-lg-4">
              <Testimonial id="TE-0004" />
            </div>
            <div className="col-12 col-lg-4">
              <Testimonial id="TE-0012" />
            </div>
          </div>
        </div>
      </section>
      <OnlineCourseSection className="bg-light" />
      <SupportSection date={date} />
      <GetStartedSection
        title="Get Started Today"
        text="Enroll Online and Start on Your Path to Becoming a Certified Event Planner"
        buttonHref={bogoEnrollLink}
      />
    </>
  );
};

export default BogoOfferPage;
