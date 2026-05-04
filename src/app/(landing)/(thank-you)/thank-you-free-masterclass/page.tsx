import type { Metadata } from 'next';
import Link from 'next/link';

import { getThankyouData } from '..';
import { Header } from '../../header';
import type { CoursePath } from '../_components/choosePathSection';
import { ChoosePathSection } from '../_components/choosePathSection';
import BarChartIcon from './_images/bar-chart-alt.svg';
import ChooseYourPath1Image from './_images/choose-your-path-1.jpg';
import ChooseYourPath2Image from './_images/choose-your-path-2.jpg';
import ChooseYourPath3Image from './_images/choose-your-path-3.jpg';
import ILEABackgroundImage from './_images/ilea-bg.jpg';
import StaticBackgroundImage from './_images/stats-background.jpg';
import { Video } from './video';
import BriefcaseIcon from '@/components/icons/briefcase.svg';
import CertificationIcon from '@/components/icons/certification.svg';
import CheckShieldIcon from '@/components/icons/check-shield.svg';
import FileIcon from '@/components/icons/file.svg';
import GroupIcon from '@/components/icons/group.svg';
import RulerIcon from '@/components/icons/ruler.svg';
import { LeadProcessing } from '@/components/leadProcessing';
import { SetCookie } from '@/components/setCookie';
import { StageBox } from '@/components/stageBox';
import { StatsSection } from '@/components/statsSection/statsSection';
import type { TestimonialId } from '@/components/testimonial/data';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import type { PageComponent } from '@/serverComponent';

export const metadata: Metadata = {
  title: 'Your Masterclass Registration',
  alternates: { canonical: '/thank-you-free-masterclass' },
  robots: { index: false },
};

const iconSize = 32;
const testimonialIds: TestimonialId[] = [ 'TE-0017', 'TE-0027', 'TE-0015' ];
const enrollHref = 'https://enroll.qceventplanning.com/masterclass-offer';
const videoSrc = 'https://cdn.qccareerschool.com/event/profit-pivot-webinar.mp4';

const ThankYouMasterclassRegistrationPage: PageComponent = async props => {
  const { lead, jwt, recent } = await getThankyouData(props);

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
      <Header logoLink showBanner buttonAlwaysVisible buttonContent="Enroll Now" buttonHref={enrollHref} />
      <section>
        <div className="container">
          <div className="row align-items-center justify-content-center g-5">
            <div className="col-12 col-lg-6 text-center text-lg-start">
              <div className="text-primary">
                <BarChartIcon height={48} />
              </div>
              <h2 className="mb-1">Ready to Build a Profitable Event Planning Business?</h2>
              <h3 className="h4 mb-4 text-primary fst-italic">Start Now.</h3>
              <p className="lead mb-0">Watch the masterclass and discover the exact strategies Lisa used to go from QC graduate to premier luxury planner, consistently <strong>booking $100K+ events.</strong></p>
            </div>
            <div className="col-12 col-lg-6">
              <Video src={videoSrc} />
            </div>
          </div>
        </div>
      </section>
      <StatsSection
        heading="QC Event School—Global Authority in Event Education"
        body="A QC certification enhances your credibility, reinforces your premium positioning, and opens the door to higher-value events and trusted industry partnerships."
        background={StaticBackgroundImage}
      />
      <section className="bg-light">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12 col-lg-10 col-xl-8">
              <h2 className="mb-2">Your Masterclass Exclusive Offer</h2>
              <h3 className="lead mb-4">To command $100K budgets, you need to master logistics, strategy, and aesthetics. Your masterclass exclusive offer gives you the tools to do all three.</h3>
              <StageBox
                heading="Save $100 Instantly"
                text={<strong>+ Enroll in Event & Wedding Planning and Get Two Specialized Certifications FREE</strong>}
                buttonHref={enrollHref}
                buttonText="Claim My Discount"
                subText="Your savings are automatically applied at checkout."
                backgroundSrc={ILEABackgroundImage}
                overlayBackground="rgba(0,0,0,0.6)"
                textShadow
              />
            </div>
          </div>
        </div>
      </section>
      <section id="certifications">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-12 col-lg-10 col-xl-8">
              <p className="text-primary fw-bold mb-2">Ready to Go Beyond the Masterclass?</p>
              <h2 className="mb-3">Choose Your Path to Success</h2>
              <p className="lead mb-0">Explore our most popular event courses and use the same professional foundation Lisa used to launch her award-winning event business.</p>
            </div>
          </div>
          <ChoosePathSection paths={choosePathItems} />
        </div>
      </section>
      <section className="bg-light" id="toolkit">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-12 col-lg-10 col-xl-8">
              <h2 className="mb-0">Everything You Need to Succeed</h2>
            </div>
          </div>
          <div className="row justify-content-center g-4 text-center">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="mb-1"><CertificationIcon height={iconSize} /></div>
              <h3 className="h6 mb-2">Industry-Recognized Designations</h3>
              <p className="mb-0">Earn the authority needed to gain instant credibility.</p>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="mb-1"><FileIcon height={iconSize} /></div>
              <h3 className="h6 mb-2">Ready-to-Use Templates</h3>
              <p className="mb-0">Access scripts, budgets, and templates that ensure flawless execution.</p>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="mb-1"><GroupIcon height={iconSize} /></div>
              <h3 className="h6 mb-2">1-on-1 Expert Feedback</h3>
              <p className="mb-0">Every assignment is reviewed by an expert event planner.</p>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="mb-1"><CheckShieldIcon height={iconSize} /></div>
              <h3 className="h6 mb-2">ILEA-Approved Curriculum</h3>
              <p className="mb-0">Graduate with certifications that meet rigorous global standards.</p>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="mb-1"><RulerIcon height={iconSize} /></div>
              <h3 className="h6 mb-2">Aisle Planner Access</h3>
              <p className="mb-0">Enjoy a 6-month free subscription to the industry-leading event management software.</p>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="mb-1"><BriefcaseIcon height={iconSize} /></div>
              <h3 className="h6 mb-2">Bonus Business Training</h3>
              <p className="mb-0">Learn to run a profitable event business—from contracts to marketing.</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12 col-lg-10 col-xl-8">
              <h2 className="mb-3">Explore More Event Planning Certifications</h2>
              <p className="lead mb-4">Looking for a different specialty? Browse our full catalog—your Masterclass Exclusive Offer applies to every professional certification.</p>
              <p className="mb-0"><Link href="/online-event-courses" className="btn btn-primary btn-lg">Explore Courses</Link></p>
            </div>
          </div>
        </div>
      </section>
      <TestimonialWallSection className="bg-light" testimonialIds={testimonialIds}>
        <div className="row justify-content-center mt-5">
          <div className="col-12 col-lg-9">
            <StageBox
              eyebrow="Stop leaving your profit to chance."
              heading="Limited-time offer: Get 2 Free Specialty Certifications + $100 OFF"
              text={<>Whether you're starting out or ready to pivot your business into the luxury market, your journey begins with a <strong>professional credential</strong>.</>}
              buttonHref={enrollHref}
              buttonText="Enroll Now"
              footerItems={[ 'Flexible Payment Plans', 'Instant Course Access', 'ILEA Approved' ]}
            />
          </div>
        </div>
      </TestimonialWallSection>
    </>
  );
};

export default ThankYouMasterclassRegistrationPage;

const choosePathItems: CoursePath[] = [
  {
    id: 'event-and-wedding',
    label: 'Event & Wedding',
    title: 'Event & Wedding Planning',
    subtitle: 'Build Your Foundation',
    description: 'Back your talent with a professional certification that commands client trust and premium fees.',
    bestFor: 'Planners at any stage who want strong fundamentals and professional credibility.',
    careerOutcome: 'Confidently launch & manage full-service events.',
    href: '/online-event-courses/event-and-wedding-planning',
    imageSrc: ChooseYourPath1Image,
  },
  {
    id: 'luxury-wedding',
    label: 'Luxury Events',
    title: 'Luxury Event Planning',
    subtitle: 'Multiply Your Income',
    description: 'Pivot into the high-net-worth market and command $100K+ budgets.',
    bestFor: 'Planners ready to increase profitability and secure high-budget events.',
    careerOutcome: 'Master high-end budgets and the elite client experience.',
    href: '/online-event-courses/luxury-wedding-and-event-planning',
    imageSrc: ChooseYourPath2Image,
  },
  {
    id: 'event-decor',
    label: 'Event Decor',
    title: 'Event Decor',
    subtitle: 'Gain a Visual Edge',
    description: 'Master the design and aesthetics that impress elite clients.',
    bestFor: 'Creative professionals looking to enhance their services.',
    careerOutcome: 'Coordinate lighting, florals, and floor plans for unforgettable events.',
    href: '/online-event-courses/event-decor',
    imageSrc: ChooseYourPath3Image,
  },
];
