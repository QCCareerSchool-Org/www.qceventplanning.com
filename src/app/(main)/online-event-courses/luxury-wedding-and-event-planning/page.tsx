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
import IEWPImage from '@/components/certifications/lwes.svg';
import { CourseType } from '@/components/courseType';
import { GetStartedSection } from '@/components/getStartedSection';
import { Hero } from '@/components/hero';
import { HeroButtons } from '@/components/hero/heroButtons';
import { PaymentPlanSection } from '@/components/paymentPlanSection';
import { TestimonialSection } from '@/components/testimonialSection';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import { VirtualCommunitySection } from '@/components/virtualCommunitySection';
import type { CourseCode } from '@/domain/courseCode';

export const metadata: Metadata = {
  title: 'Luxury Wedding & Event Planning Course',
};

const courseCodes: CourseCode[] = [ 'lw' ];
const testimonialIds = [ 'TE-0012', 'TE-0014', 'TE-0003', 'TE-0002', 'TE-0001', 'TE-0019' ];

const LuxuryWeddingAndEventPlanningPage: PageComponent = () => (
  <div className={styles.page}>
    <section>
      <div className="container">
        <div className="row justify-content-center g-s">
          <div className="col-12">
            <Hero src={HeroImage} priority objectPosition="100% 0">
              <CourseType className="mb-2 mb-xl-4">Specialty Course</CourseType>
              <h1 className="mb-2 mb-xl-4">Luxury Wedding &amp; Event Planning Course</h1>
              <p className="h5 mb-3 mb-xl-5">Become a Certified Luxury Event Planner</p>
              <div className="d-flex justify-content-center justify-content-md-start">
                <HeroButtons courseCodes={courseCodes} />
              </div>
            </Hero>
          </div>
          <div className="col-12 col-lg-6">
            <h2 className="mb-4">Why Choose<br />QC Event School</h2>
            <p className="lead mb-4">QC's Luxury Wedding &amp; Event Planning certification course provides students with the most comprehensive training available to succeed in the event planning industry.</p>
            <ul>
              <li>Personalized feedback &amp; advice on your assignments from our top industry event &amp; wedding planning experts</li>
              <li>Thriving virtual community to connect with other event planners, get feedback, and gain access to bonus material</li>
              <li>Built-in business training to help you launch your career and grow your clientele as a certified Luxury Wedding &amp; Event planner</li>
              <li>Discounts and affiliations with top organizations including Aisle Planner and The Association of  Wedding Planners International</li>
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
            <p className="lead">QC's comprehensive Luxury Wedding &amp; Event planning course will show you how to turn your clients' most extravagant dreams into reality. You'll learn how to:</p>
            <ul className="mb-0">
              <li>Develop a unique theme, atmosphere, and vision for your clients' events &amp; weddings</li>
              <li>Create &ldquo;over-the-top&rdquo; events that impress clients and guests alike</li>
              <li>Work with large budgets, and demanding clients, and find out how to build your own network of top suppliers and vendors</li>
              <li>Manage large-scale event &amp; wedding budgets with ease</li>
              <li>Build your luxury brand and market your services to high-end clients</li>
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
            <IEWPImage height="166" className="mb-3" alt="Luxury Wedding and Event Specialist certification logo" />
            <h2 className="text-white mb-3">QC's Luxury Wedding &amp; Event Planning Certification</h2>
            <p className="mb-3">When you graduate from the Luxury Wedding and Event Planning course, you'll receive a certificate of completion and the professional designation of Luxury Wedding and Event Specialist. This certificate will assure your credibility in the industry to future clients and employers.</p>
            <p className="mb-0 small gold">Luxury Wedding and Event Specialist (LWES)</p>
          </div>
        </div>
      </div>
    </section>
    <section id="instructors">
      <div className="container">
        <div className="row g-s">
          <div className="col-12 col-lg-6">
            <h2 className="h3 mb-3">Meet Your New Luxury Wedding &amp; Event Planning Instructor</h2>
            <p className="mb-0">Candice Coppola is an incredibly talented entrepreneur and former owner of a wedding planning &amp; design business called Jubilee Events. With her unique flair, she's created amazing events all over the world, from New York to Fiji, and even Costa Rica. She's no stranger to big budgets either, managing events that cost upwards of $1,000,000! With her wealth of knowledge and experience, Candice is a passionate and driven coach, instructor, and mentor, helping aspiring individuals in the event-planning business reach their entrepreneurial goals.</p>
          </div>
          <div className="d-none d-lg-block col-lg-6">
            <Candice className="img-fluid" sizes="50vw" />
          </div>
        </div>
      </div>
    </section>
    <VirtualCommunitySection className="pt-0" />
    <OutlineSection />
    <AislePlannerSection />
    <TestimonialSection id="TE-0003" courseCodes={courseCodes} />
    <Suspense>
      <PaymentPlanSection courseCodes={courseCodes} />
    </Suspense>
    <TestimonialSection id="TE-0018" courseCodes={courseCodes} />
    <GetStartedSection title="Ready to Help Your Clients Create Incredible Memories?" text="Specialize as a Luxury Wedding & Event Planner" courseCodes={courseCodes} />
  </div>
);

export default LuxuryWeddingAndEventPlanningPage;
