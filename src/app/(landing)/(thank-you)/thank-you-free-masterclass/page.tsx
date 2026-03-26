import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaPlayCircle } from 'react-icons/fa';

import { getThankyouData } from '..';
import { Header } from '../../header';
import { FeaturedCourseCard } from '../_components/featuredCourseCard';
import ChooseYourPath1Image from './_images/choose-your-path-1.jpg';
import ChooseYourPath2Image from './_images/choose-your-path-2.jpg';
import ChooseYourPath3Image from './_images/choose-your-path-3.jpg';
import VideoImage from './_images/video.jpg';
import { GoogleReviewSection } from '@/components/googleReviewSection';
import { ILEASection } from '@/components/ileaSection';
import { LeadProcessing } from '@/components/leadProcessing';
import { Overlay } from '@/components/overlay';
import { SetCookie } from '@/components/setCookie';
import { StatsSection } from '@/components/statsSection/statsSection';
import { SupportSection } from '@/components/supportSection';
import type { PageComponent } from '@/serverComponent';

export const metadata: Metadata = {
  title: 'Your Masterclass Registration',
  alternates: { canonical: '/thank-you-free-masterclass' },
  robots: { index: false },
};

const ThankYouMasterclassRegistrationPage: PageComponent = async props => {
  const { lead, jwt, recent, date } = await getThankyouData(props);

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
      <section>
        <div className="container">
          <div className="row align-items-center justify-content-center g-5">
            <div className="col-12 col-lg-6 text-center text-lg-start">
              <h2 className="mb-2">Ready to Build a Profitable Event Planning Business?</h2>
              <h3 className="h4 mb-3 text-primary">Start Now.</h3>
              <p className="lead mb-0">Watch the masterclass and discover the exact strategies Lisa used to go from QC graduate to premier luxury planner, consistently booking $100K+ events.</p>
            </div>
            <div className="col-12 col-lg-6">
              <div className="rounded-5 overflow-hidden position-relative">
                <Image src={VideoImage} alt="" className="img-fluid" />
                <Overlay backgroundColor="rgba(0,0,0,0.4)" />
                <FaPlayCircle size={80} className="position-absolute top-50 start-50 translate-middle text-white" />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <p className="h5 mt-3 mb-0">Profit Pivot: How to Book $100K+ Clients</p>
            </div>
          </div>
        </div>
      </section>
      <StatsSection
        heading="QC Event School—Global Authority in Event Education"
        body="A QC certification enhances your credibility, reinforces your premium positioning, and opens the door to higher-value events and trusted industry partnerships."
      />
      <section className="bg-light">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12 col-lg-10 col-xl-8">
              <h2 className="mb-2">Your Masterclass Exclusive Offer</h2>
              <h3 className="h4 mb-4 text-primary">Save $100 + Get Up to Two Specialized Certifications FREE</h3>
              <p className="lead mb-4">To command $100K budgets, you need to master logistics, strategy, and aesthetics. Your masterclass exclusive offer gives you the tools to do all three.</p>
              <p className="mb-2"><strong>Get $100 OFF your tuition instantly</strong></p>
              <p className="mb-4"><strong>Enroll in Event &amp; Wedding Planning, and get up to TWO specialized certifications FREE</strong></p>
              <p className="mb-3"><Link href="https://enroll.qceventplanning.com" className="btn btn-primary btn-lg">Claim My Discount</Link></p>
              <p className="mb-0">Your savings are automatically applied at checkout.</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-12 col-lg-10 col-xl-8">
              <p className="text-primary fw-bold mb-2">Ready to Go Beyond the Masterclass?</p>
              <h2 className="mb-3">Choose Your Path to Success</h2>
              <p className="lead mb-0">Explore our most popular event courses and use the same professional foundation Lisa used to launch her award-winning event business.</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-xl-10">
              <FeaturedCourseCard
                title="Event & Wedding Planning"
                subtitle="Build Your Foundation"
                description="Back your talent with a professional certification that commands client trust and premium fees."
                bestFor="Planners at any stage who want strong fundamentals and professional credibility."
                careerOutcome="Confidently launch & manage full-service events."
                href="/online-event-courses/event-and-wedding-planning"
                imageSrc={ChooseYourPath1Image}
              />
              <FeaturedCourseCard
                className="d-none"
                title="Luxury Event Planning"
                subtitle="Multiply Your Income"
                description="Pivot into the high-net-worth market and command $100K+ budgets."
                bestFor="Planners ready to increase profitability and secure high-budget events."
                careerOutcome="Master high-end budgets and the elite client experience."
                href="/online-event-courses/luxury-wedding-and-event-planning"
                imageSrc={ChooseYourPath2Image}
              />
              <FeaturedCourseCard
                className="d-none"
                title="Event Decor"
                subtitle="Gain a Visual Edge"
                description="Master the design and aesthetics that impress elite clients."
                bestFor="Creative professionals looking to enhance their services."
                careerOutcome="Coordinate lighting, florals, and floor plans for unforgettable events."
                href="/online-event-courses/event-decor"
                imageSrc={ChooseYourPath3Image}
              />
            </div>
          </div>
        </div>
      </section>
      <GoogleReviewSection className="bg-light" />
      <ILEASection />
      <SupportSection date={date} />
    </>
  );
};

export default ThankYouMasterclassRegistrationPage;
