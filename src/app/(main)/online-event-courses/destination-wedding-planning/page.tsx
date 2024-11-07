import type { Metadata } from 'next';
import Image from 'next/image';
import { Suspense } from 'react';

import CertificationBackgroundImage from './cert-bg.jpg';
import HeroImage from './hero.jpg';
import { OutlineSection } from './outline-section';
import styles from './page.module.scss';
import WhatYoullLearnImage from './what-youll-learn.jpg';
import WhyQCImage from './why-qc.jpg';
import type { PageComponent } from '@/app/serverComponent';
import { AislePlannerSection } from '@/components/aislePlannerSection';
import { BackgroundImage } from '@/components/backgroundImage';
import { Candice } from '@/components/candice';
import DWSImage from '@/components/certifications/dws.svg';
import { CourseType } from '@/components/courseType';
import { GetStartedSection } from '@/components/getStartedSection';
import { GoogleReviewSection } from '@/components/googleReviewSection';
import { Hero } from '@/components/hero';
import { HeroButtons } from '@/components/hero/heroButtons';
import { PaymentPlanSection } from '@/components/paymentPlanSection';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import { VirtualCommunitySection } from '@/components/virtualCommunitySection';
import type { CourseCode } from '@/domain/courseCode';

export const metadata: Metadata = {
  title: 'Destination Wedding Planning Course',
  alternates: {
    canonical: '/online-event-courses/destination-wedding-planning',
  },
};

const courseCode: CourseCode = 'dw';
const courseCodes: CourseCode[] = [ courseCode ];
const testimonialIds = [ 'TE-0003', 'TE-0014', 'TE-0019', 'TE-0017', 'TE-0016', 'TE-0001' ];

const DestinationWeddingPlanningPage: PageComponent = () => (
  <div className={styles.page}>
    <section className="half-padding-top">
      <div className="container">
        <div className="row justify-content-center g-s">
          <div className="col-12">
            <Hero src={HeroImage} priority objectPosition="100% 0">
              <CourseType className="mb-2 mb-xl-4">Specialty Course</CourseType>
              <h1 className="mb-2 mb-xl-4">Destination Wedding Planning Course</h1>
              <p className="h5 mb-3 mb-xl-5">Become a Certified Destination Wedding Planner</p>
              <div className="d-flex justify-content-center justify-content-md-start">
                <HeroButtons courseCodes={courseCodes} />
              </div>
            </Hero>
          </div>
          <div className="col-12 col-lg-6">
            <h2 className="mb-4">Why Choose<br />QC Event School</h2>
            <p className="lead mb-4">QC's Destination Wedding Planning certification course provides students with the most comprehensive training available to succeed in the wedding industry.</p>
            <ul>
              <li>Personalized feedback &amp; advice on your assignments from our top industry wedding planning experts</li>
              <li>Thriving virtual community to connect with other wedding planners, get feedback, and gain access to bonus material</li>
              <li>Built-in business training to help you launch your career and grow your clientele as a certified destination event &amp; wedding planner</li>
              <li>Discounts and affiliations with top organizations including Aisle Planner and The Association of Wedding Planners International</li>
            </ul>
            <p className="mb-0"><strong>Note:</strong> Students should have previous training in event and wedding planning, or relevant work experience before enrolling in this course.</p>
          </div>
          <div className="col-12 col-sm-10 col-md-8 col-lg-6">
            <Image src={WhyQCImage} alt="" className={`img-fluid ${styles.whyQCImage}`} />
          </div>
        </div>
      </div>
    </section>
    <TestimonialWallSection courseCodes={courseCodes} testimonialIds={testimonialIds} className="bg-light" />
    <section>
      <div className="container">
        <div className="row align-items-center justify-content-center g-s">
          <div className="col-12 col-lg-6">
            <h2 className="mb-3">Here's What You'll Learn</h2>
            <p className="lead">QC's comprehensive destination wedding planning course will show you how to turn your clients' wildest wedding dreams into reality. You'll learn how to:</p>
            <ul className="mb-0">
              <li>Coordinate weddings all over the world: from tropical beaches to receptions in faraway castles</li>
              <li>Help your clients choose the destination of their dreams, facilitate travel arrangements, and pull together a theme, décor and menu items that perfectly suit the location</li>
              <li>Organize wedding details and effectively communicate with vendors long distance</li>
              <li>Use translators, travel agents, and other vendors that play a large role in creating the perfect wedding</li>
              <li>Network with wedding planners in other countries and market yourself as an expert in planning destination weddings</li>
              <li>Build your brand and market your new luxury wedding planning services</li>
            </ul>
          </div>
          <div className="col-12 col-sm-10 col-md-8 col-lg-6">
            <Image src={WhatYoullLearnImage} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
    <section className="text-white">
      <BackgroundImage src={CertificationBackgroundImage} />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-lg-8 col-xxl-6 text-center">
            <DWSImage height="166" className="mb-3" alt="Destination Wedding Specialist certification logo" />
            <h2 className="text-white mb-3">QC's Destination Wedding Planning Certification</h2>
            <p className="mb-3">Once you graduate from this course, you'll receive a certificate of completion and the professional designation of Destination Wedding Specialist. Your certificate will reassure clients and employers that you can successfully meet their expectations during the process of planning any destination wedding.</p>
            <p className="mb-0 small gold">Destination Wedding Specialist (DWS)</p>
          </div>
        </div>
      </div>
    </section>
    <section id="instructors">
      <div className="container">
        <div className="row g-s">
          <div className="col-12 col-lg-6">
            <h2 className="h3 mb-3">Meet Your New Destination Wedding Planning Instructor</h2>
            <p className="mb-0">Candice Coppola is an incredibly talented entrepreneur and former owner of a wedding planning &amp; design business called Jubilee Events. With her unique flair, she's created amazing events all over the world, from New York to Fiji, and even Costa Rica. She's no stranger to big budgets either, managing events that cost upwards of $1,000,000! With her wealth of knowledge and experience, Candice is a passionate and driven coach, instructor, and mentor, helping aspiring individuals in the event-planning business reach their entrepreneurial goals.</p>
          </div>
          <div className="d-none d-lg-block col-lg-6">
            <Candice className="img-fluid" sizes="50vw" />
          </div>
        </div>
      </div>
    </section>
    <OutlineSection />
    <VirtualCommunitySection />
    <AislePlannerSection />
    <GoogleReviewSection courseCode={courseCode} />
    <Suspense>
      <PaymentPlanSection courseCodes={courseCodes} />
    </Suspense>
    <GetStartedSection title="Ready to Help Your Clients Create Breathtaking Memories?" text="Specialize as a Destination Wedding Planner" courseCodes={courseCodes} />
  </div>
);

export default DestinationWeddingPlanningPage;
