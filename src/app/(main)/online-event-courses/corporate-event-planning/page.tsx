import type { Metadata } from 'next';
import Image from 'next/image';

import { Suspense } from 'react';
import { CourseStructuredData } from '../courseStructuredData';
import CertificationBackgroundImage from './cert-bg.jpg';
import HeroImage from './hero.jpg';
import ModernEventImage from './modern-event.jpg';
import { OutlineSection } from './outline-section';
import styles from './page.module.scss';
import WhatYoullLearnImage from './what-youll-learn.jpg';
import WhyQCImage from './why-qc.jpg';
import type { PageComponent } from '@/app/serverComponent';
import { BackgroundImage } from '@/components/backgroundImage';
import ICPPImage from '@/components/certifications/icpp.svg';
import { CourseType } from '@/components/courseType';
import { GetStartedSection } from '@/components/getStartedSection';
import { GoogleReviewSection } from '@/components/googleReviewSection';
import { Hero } from '@/components/hero';
import { HeroButtons } from '@/components/hero/heroButtons';
import { PaymentPlanSection } from '@/components/paymentPlanSection';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import { AlyssaPerna } from '@/components/tutorImages/alyssaPerna';
import { MarkCheplowitz } from '@/components/tutorImages/markCheplowitz';
import { VirtualCommunitySection } from '@/components/virtualCommunitySection';
import type { CourseCode } from '@/domain/courseCode';
import { getCourseDescription } from '@/domain/courseCode';

const courseCode: CourseCode = 'cp';
const courseCodes: CourseCode[] = [ courseCode ];
const testimonialIds = [ 'TE-0013', 'TE-0018', 'TE-0004', 'TE-0007', 'TE-0017', 'TE-0003' ];

export const metadata: Metadata = {
  title: 'Corporate Event Planning Course',
  description: getCourseDescription(courseCode),
  alternates: {
    canonical: '/online-event-courses/corporate-event-planning',
  },
};

const CorporateEventPlanningPage: PageComponent = () => (
  <div className={styles.page}>
    <section className="half-padding-top">
      <div className="container">
        <div className="row justify-content-center g-s">
          <div className="col-12">
            <Hero src={HeroImage} priority objectPosition="100% 0">
              <CourseType className="mb-2 mb-xl-4">Foundation Course</CourseType>
              <h1 className="mb-2 mb-xl-4">Corporate Event Planning Course</h1>
              <p className="h5 mb-3 mb-xl-5">Become a Certified Corporate Event Planner</p>
              <div className="d-flex justify-content-center justify-content-md-start">
                <HeroButtons courseCodes={courseCodes} />
              </div>
            </Hero>
          </div>
          <div className="col-12 col-lg-6">
            <h2 className="mb-4">Why Choose<br />QC Event School</h2>
            <p className="lead mb-4">QC's Corporate Event Planning certification course provides students with the most comprehensive training available to succeed in the corporate planning industry.</p>
            <ul className="mb-0">
              <li>No previous training required&mdash;our professional corporate event planning course is designed to take you from beginner to expert</li>
              <li>Personalized feedback &amp; advice on your assignments from our top industry corporate planning experts</li>
              <li>Thriving virtual community to connect with other event planners, get feedback, and gain access to bonus material</li>
              <li>Built-in business training to help you launch your career and grow your clientele as a certified corporate event planner</li>
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
            <p className="lead">QC's comprehensive corporate event planning course will show you how to work with a wide variety of clients from tech and non-profit to government and fashion! You'll learn how to:</p>
            <ul className="mb-0">
              <li>Plan and manage all types of corporate events for your clients, such as product launches, corporate social events, trade shows, and promotional campaigns</li>
              <li>Develop a unique theme, atmosphere, and vision for your clients' events</li>
              <li>Source and hire reputable contractors and vendors</li>
              <li>Discuss, create, and balance any client's budget with confidence</li>
              <li>Identify key corporate event planning components, from working out logistics to aligning your events with company goals</li>
              <li>Build your brand and market your new corporate event planning business</li>
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
            <ICPPImage height="166" className="mb-3" alt="International Corporate Event Planning Professional certification logo" />
            <h2 className="text-white mb-3">Corporate Event Planning Certification</h2>
            <p className="mb-3">Graduate from your Corporate Event Planning course and receive the designation of International Corporate Event Planning Professional (ICPP). Your certification improves your credibility as an event planner, and gives you a competitive edge over other professionals in your area.</p>
            <p className="mb-0 small gold">International Corporate Event Planning Professional (ICPP)™</p>
          </div>
        </div>
      </div>
    </section>
    <section id="instructors" className="bg-light">
      <div className="container">
        <div className="row g-s">
          <div className="d-none d-lg-block col-lg-6">
            <Image src={ModernEventImage} alt="" className="img-fluid" sizes="50vw" />
          </div>
          <div className="col-12 col-lg-6">
            <p className="mb-3 fst-italic">An International Team of Instructors</p>
            <h2 className="h3 mb-3">Meet Your New Corporate Event Planning Instructors</h2>
            <p className="mb-5">QC is proud to work with leaders of the global event planning industry to develop our courses. Our international team of instructors bring diverse experience and skills to aspiring event planners around the globe.</p>
            <div className="row g-5">
              <div className="col-12 col-sm-8 col-md-6 col-lg-12 col-xxl-6">
                <div className="mb-3">
                  <MarkCheplowitz />
                </div>
                <h3 className="h6 mb-3">Mark Cheplowitz</h3>
                <p className="small mb-0">Mark Cheplowitz is an award-winning event planner and President of NYC-based Wizard of Ahs. Mark's event production work has taken him all over the world. Career highlights include planning the Super Bowl and the grand opening of the Rock and Roll Hall of Fame.</p>
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
    <VirtualCommunitySection />
    <OutlineSection />
    <GoogleReviewSection courseCode={courseCode} />
    <Suspense>
      <PaymentPlanSection courseCodes={courseCodes} />
    </Suspense>
    <GetStartedSection title="Ready to Help Your Clients Create Memorable Events?" text="Become a Professionally Certified Corporate Event Planner" courseCodes={courseCodes} />
    <CourseStructuredData courseCode={courseCode} />
  </div>
);

export default CorporateEventPlanningPage;
