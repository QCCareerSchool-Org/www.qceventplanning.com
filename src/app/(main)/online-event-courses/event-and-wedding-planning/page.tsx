import type { Metadata } from 'next';
import Image from 'next/image';
import { Suspense } from 'react';

import CertificationBackgroundImage from './cert-bg.jpg';
import HeroImage from './hero.jpg';
import { OutlineSection } from './outline-section';
import styles from './page.module.scss';
import PlaceSettingImage from './place-setting.jpg';
import WhatYoullLearnImage from './what-youll-learn.jpg';
import WhyQCImage from './why-qc.jpg';
import type { PageComponent } from '@/app/serverComponent';
import { AislePlannerSection } from '@/components/aislePlannerSection';
import IEWPImage from '@/components/certifications/iewp.svg';
import { CourseType } from '@/components/courseType';
import { GetStartedSection } from '@/components/getStartedSection';
import { Hero } from '@/components/hero';
import { HeroButtons } from '@/components/hero/heroButtons';
import { PaymentPlanSection } from '@/components/paymentPlanSection';
import { TestimonialSection } from '@/components/testimonialSection';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import { AlyssaPerna } from '@/components/tutorImages/alyssaPerna';
import { MwaiYeboah } from '@/components/tutorImages/mwaiYeboah';
import { VirtualCommunitySection } from '@/components/virtualCommunitySection';
import type { CourseCode } from '@/domain/courseCode';

export const metadata: Metadata = {
  title: 'Event & Wedding Planning Course',
};

const courseCodes: CourseCode[] = [ 'ep' ];
const testimonialIds = [ 'TE-0006', 'TE-0003', 'TE-0004', 'TE-0005', 'TE-0002', 'TE-0017' ];

const EventAndWeddingPlanningPage: PageComponent = () => (
  <div className={styles.page}>
    <section>
      <div className="container">
        <div className="row justify-content-center g-s">
          <div className="col-12">
            <Hero src={HeroImage} priority objectPosition="80% 0">
              <CourseType className="mb-2 mb-xl-4">Foundation Course</CourseType>
              <h1 className="mb-2 mb-xl-4">Event &amp; Wedding Planning</h1>
              <p className="h5 mb-3 mb-xl-5">Become a Certified Event &amp; Wedding Planner</p>
              <div className="d-flex justify-content-center justify-content-md-start">
                <HeroButtons courseCodes={courseCodes} />
              </div>
            </Hero>
          </div>
          <div className="col-12 col-lg-6">
            <h2 className="mb-4">Why Choose<br />QC Event School</h2>
            <p className="lead mb-4">QC's Event &amp; Wedding Planning Certification course provides students with the most comprehensive training available to succeed in the event industry.</p>
            <ul className="mb-0">
              <li>No previous training required&mdash;our premium event and wedding planning course is designed to take you from beginner to expert</li>
              <li>Personalized feedback &amp; advice on your assignments from our top industry event planning experts</li>
              <li>Thriving virtual community to connect with other event planners, get feedback, and gain access to bonus material</li>
              <li>Built-in business training to help you launch your career and grow your clientele as a certified event and wedding planner</li>
              <li>Discounts and affiliations with top organizations including Aisle Planner and the International Live Events Association</li>
            </ul>
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
            <p className="lead">QC's comprehensive event &amp; wedding planning course will show you how to:</p>
            <ul className="mb-0">
              <li>Plan and organize milestone parties, weddings, industry special events, and more!</li>
              <li>Develop a unique theme, atmosphere, and vision for events with your clients</li>
              <li>Hire and negotiate contracts with popular and niche event vendors</li>
              <li>Discuss, create, and balance any client budget with confidence</li>
              <li>Build your brand and market your new event and wedding planning business</li>
              <li>Plan a styled shoot and develop a professional portfolio that helps you land new clients</li>
            </ul>
          </div>
          <div className="col-12 col-sm-10 col-md-8 col-lg-6">
            <Image src={WhatYoullLearnImage} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
    <section className="text-white">
      <Image src={CertificationBackgroundImage} fill placeholder="blur" alt="" sizes="100vw" style={{ objectFit: 'cover' }} />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-lg-8 col-xxl-6 text-center">
            <IEWPImage height="166" className="mb-3" alt="International Event and Wedding Planning Professional certification logo" />
            <h2 className="text-white mb-3">Event &amp; Wedding Planning Certification</h2>
            <p className="mb-3">Once you graduate from your online event planning course, you'll receive a certification and be able to use the designation of International Event and Wedding Planning Professional (IEWP). The IEWP Event &amp; Wedding Planning certification is approved by the International Live Events Association and cements your credibility as an established industry professional giving you a competitive edge in your local industry!</p>
            <p className="mb-0 small gold">International Event and Wedding Planning Professional™</p>
          </div>
        </div>
      </div>
    </section>
    <section id="instructors">
      <div className="container">
        <div className="row g-s">
          <div className="d-none d-lg-block col-lg-6">
            <Image src={PlaceSettingImage} alt="" className="img-fluid" sizes="50vw" />
          </div>
          <div className="col-12 col-lg-6">
            <p className="mb-3 fst-italic">An International Team of Instructors</p>
            <h2 className="h3 mb-3">Meet Your New Event &amp; Wedding Planning Instructors</h2>
            <p className="mb-5">QC is proud to work with leaders of the global event planning industry to develop our courses. Our international team of instructors bring diverse experience and skills to aspiring event planners around the globe.</p>
            <div className="row g-5">
              <div className="col-12 col-sm-8 col-md-6 col-lg-12 col-xxl-6">
                <div className="mb-3">
                  <MwaiYeboah />
                </div>
                <h3 className="h6 mb-3">Mwai Yeboah</h3>
                <p className="small mb-0">Mwai Yeboah, founder of Love From Mwai and multi-award winning planner, specializes in destination wedding planning. As the lead planner and designer, she transforms weddings and events into immersive experiences for luxury clients worldwide.</p>
              </div>
              <div className="col-12 col-sm-8 col-md-6 col-lg-12 col-xxl-6">
                <div className="mb-3">
                  <AlyssaPerna />
                </div>
                <h3 className="h6 mb-3">Alyssa Perna</h3>
                <p className="small mb-0">Alyssa Perna, Principal of Experience Marketing and Events, brings over a decade of diverse event operations experience, including multinational conferences, festivals, fundraisers, and various social events.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <VirtualCommunitySection className="pt-0" />
    <OutlineSection />
    <AislePlannerSection />
    <TestimonialSection id="TE-0017" courseCodes={courseCodes} />
    <Suspense>
      <PaymentPlanSection courseCodes={courseCodes} />
    </Suspense>
    <TestimonialSection id="TE-0003" courseCodes={courseCodes} />
    <GetStartedSection title="Ready to Start Your Event & Wedding Planning Career?" text="Become Professionally Certified with QC's Online Event Planning Training" courseCodes={courseCodes} />
  </div>
);

export default EventAndWeddingPlanningPage;
