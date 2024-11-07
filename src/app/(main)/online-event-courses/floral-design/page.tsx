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
import { BackgroundImage } from '@/components/backgroundImage';
import IFDPImage from '@/components/certifications/ifdp.svg';
import { CourseType } from '@/components/courseType';
import { GetStartedSection } from '@/components/getStartedSection';
import { GoogleReviewSection } from '@/components/googleReviewSection';
import { Hero } from '@/components/hero';
import { HeroButtons } from '@/components/hero/heroButtons';
import { PaymentPlanSection } from '@/components/paymentPlanSection';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import { MwaiYeboah } from '@/components/tutorImages/mwaiYeboah';
import { ReneeTucci } from '@/components/tutorImages/reneeTucci';
import { VirtualCommunitySection } from '@/components/virtualCommunitySection';
import type { CourseCode } from '@/domain/courseCode';

export const metadata: Metadata = {
  title: 'Floral Design Course',
  alternates: {
    canonical: '/online-event-courses/floral-design',
  },
};

const courseCode: CourseCode = 'fd';
const courseCodes: CourseCode[] = [ courseCode ];
const testimonialIds = [ 'TE-0008', 'TE-0018', 'TE-0016', 'TE-0015', 'TE-0014', 'TE-0012' ];

const FloralDesignPage: PageComponent = () => (
  <div className={styles.page}>
    <section className="half-padding-top">
      <div className="container">
        <div className="row justify-content-center g-s">
          <div className="col-12">
            <Hero src={HeroImage} priority objectPosition="100% 0">
              <CourseType className="mb-2 mb-xl-4">Foundation Course</CourseType>
              <h1 className="mb-2 mb-xl-4">Floral Design Course</h1>
              <p className="h5 mb-3 mb-xl-5">Become a Certified Floral Designer</p>
              <div className="d-flex justify-content-center justify-content-md-start">
                <HeroButtons courseCodes={courseCodes} />
              </div>
            </Hero>
          </div>
          <div className="col-12 col-lg-6">
            <h2 className="mb-4">Why Choose<br />QC Event School</h2>
            <p className="lead mb-4">QC's Floral Design certification course provides students with the most comprehensive training available to succeed in the floral design industry.</p>
            <ul className="mb-0">
              <li>No previous training required&mdash;our professional floral design course is designed to take you from beginner to expert</li>
              <li>Personalized feedback &amp; advice on your assignments from our top industry floral designers &amp; artists</li>
              <li>Thriving virtual community to connect with other floral designers, get feedback, and gain access to bonus material</li>
              <li>Built-in business training to help you launch your career and grow your clientele as a certified floral designer</li>
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
            <p className="lead">QC's comprehensive floral design course will show you how to turn your clients' wildest dreams into a breathtaking reality. You'll learn how to:</p>
            <ul className="mb-0">
              <li>Plan and arrange beautiful floral designs for any occasion</li>
              <li>Choose and care for flowers to ensure long-lasting and fresh designs</li>
              <li>Work within a budget to design arrangements that truly wow your clients</li>
              <li>Work efficiently to increase productivity and improve your bottom line</li>
              <li>Build a brand and market your floral design business to attract clients</li>
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
            <IFDPImage height="166" className="mb-3" alt="International Floral Design Professional certification logo" />
            <h2 className="text-white mb-3">QC's Floral Design Certification</h2>
            <p className="mb-3">Once you graduate from your online Floral Design course, you'll receive the International Floral Design Professional (IFDP) certification. Your training and certification will cement your credibility as an industry professional and give you an advantage over other floral designers in your local industry.</p>
            <p className="mb-0 small gold">International Floral Design Professional (IFDP)™</p>
          </div>
        </div>
      </div>
    </section>
    <section id="instructors" className="bg-light">
      <div className="container">
        <div className="row g-s">
          <div className="d-none d-lg-block col-lg-6">
            <Image src={PlaceSettingImage} alt="" className="img-fluid" sizes="50vw" />
          </div>
          <div className="col-12 col-lg-6">
            <p className="mb-3 fst-italic">An International Team of Instructors</p>
            <h2 className="h3 mb-3">Meet Your New Floral Design Instructors</h2>
            <p className="mb-5">QC is proud to work with leaders of the global event planning industry, including recognized AIFD instructor Renee Tucci, to develop our courses. Our international team of instructors brings diverse experience and skills to aspiring event planners around the globe, ensuring a comprehensive and enriching educational experience.</p>
            <div className="row g-5">
              <div className="col-12 col-sm-8 col-md-6 col-lg-12 col-xxl-6">
                <div className="mb-3">
                  <ReneeTucci />
                </div>
                <h3 className="h6 mb-3">Renee Tucci</h3>
                <p className="small mb-0">With over 20 years of floral design experience, Renee Tucci, recognized by the American Institute of Floral Designers and Professional Floral Communicators International, is a dedicated instructor in the QC course, guiding students to master the art of floral design.</p>
              </div>
              <div className="col-12 col-sm-8 col-md-6 col-lg-12 col-xxl-6">
                <div className="mb-3">
                  <MwaiYeboah />
                </div>
                <h3 className="h6 mb-3">Mwai Yeboah</h3>
                <p className="small mb-0">Mwai Yeboah, founder of Love From Mwai and multi-award winning planner, specializes in destination wedding planning. As the lead planner and designer, she transforms weddings and events into immersive experiences for luxury clients worldwide.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <VirtualCommunitySection />
    <OutlineSection />
    <AislePlannerSection />
    <GoogleReviewSection courseCode={courseCode} />
    <Suspense>
      <PaymentPlanSection courseCodes={courseCodes} />
    </Suspense>
    <GetStartedSection title="Ready to Start Your Dream Career?" text="Become a Professionally Certified Floral Designer" courseCodes={courseCodes} />
  </div>
);

export default FloralDesignPage;
