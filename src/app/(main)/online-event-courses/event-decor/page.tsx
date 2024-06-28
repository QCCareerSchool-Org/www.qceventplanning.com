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
import { Candice } from '@/components/candice';
import IEDPImage from '@/components/certifications/iedp.svg';
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
  title: 'Event Decor Course - QC Event School',
};

const courseCodes: CourseCode[] = [ 'ed' ];
const testimonialIds = [ 'TE-0019', 'TE-0008', 'TE-0002', 'TE-0011', 'TE-0004', 'TE-0014' ];

const EventDecorPage: PageComponent = () => (
  <div className={styles.page}>
    <section>
      <div className="container">
        <div className="row justify-content-center g-s">
          <div className="col-12">
            <Hero src={HeroImage} priority objectPosition="100% 0">
              <CourseType className="mb-2 mb-xl-4">Foundation Course</CourseType>
              <h1 className="mb-2 mb-xl-4">Event Decor Course</h1>
              <p className="h5 mb-3 mb-xl-5">Become a Certified Event Decorator</p>
              <div className="d-flex justify-content-center justify-content-md-start">
                <HeroButtons courseCodes={courseCodes} />
              </div>
            </Hero>
          </div>
          <div className="col-12 col-lg-6">
            <h2 className="mb-4">Why Choose<br />QC Event School</h2>
            <p className="lead mb-4">QC's Event Decor certification course provides students with the most comprehensive training available to succeed in the event decorating industry.</p>
            <ul className="mb-0">
              <li>No previous training required&mdash;our professional event decor course is designed to take you from beginner to expert</li>
              <li>Personalized feedback &amp; advice on your assignments from our top industry event decor &amp; wedding experts</li>
              <li>Thriving virtual community to connect with other event decorators, get feedback, and gain access to bonus material</li>
              <li>Built-in business training to help you launch your career and grow your clientele as a certified event decorator</li>
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
            <p className="lead">QC's comprehensive event decor course will show you how to turn your clients' wildest dreams into reality. You'll learn how to:</p>
            <ul className="mb-0">
              <li>Use color matching, popular themes, and the latest event design trends to create a cohesive and modern design for any event</li>
              <li>Work with your clients to choose a theme that speaks to them while keeping true to the goal of the event</li>
              <li>Orchestrate all elements of the event to create a beautiful and cohesive presentation that any client will be happy to pay for</li>
              <li>Start your own event decor business, build your own event design brand and run your decorating business effectively</li>
              <li>Incorporate event decor services into your existing event and wedding planning business</li>
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
            <IEDPImage height="166" className="mb-3" alt="International Event Decorating Professional certification logo" />
            <h2 className="text-white mb-3">QC's Event Decor Certification</h2>
            <p className="mb-3">When you graduate from the Event Decor course, you'll receive a professional certificate and the designation of International Event Decorating Professional (IEDP). This certification provides you with credibility in the event and wedding industry, and will help you gain both clients and employment.</p>
            <p className="mb-0 small gold">International Event Decorating Professional (IEDP)™</p>
          </div>
        </div>
      </div>
    </section>
    <section id="instructors">
      <div className="container">
        <div className="row g-s">
          <div className="col-12 col-lg-6">
            <h2 className="h3 mb-3">Meet Your New Event Decor Instructor</h2>
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
    <TestimonialSection id="TE-0017" courseCodes={courseCodes} />
    <Suspense>
      <PaymentPlanSection courseCodes={courseCodes} />
    </Suspense>
    <TestimonialSection id="TE-0019" courseCodes={courseCodes} />
    <GetStartedSection title="Ready to Help Your Clients Create Breathtaking Memories?" text="Become a Professionally Certified Event Decorator" courseCodes={courseCodes} />
  </div>
);

export default EventDecorPage;
