import type { Metadata } from 'next';
import Image from 'next/image';

import { Suspense } from 'react';
import DesktopImage from './desktop.jpg';
import HeroImage from './hero.jpg';
import styles from './index.module.css';
import { OutlineSection } from './outline-section';
import WhatYoullLearnImage from './what-youll-learn.jpg';
import WhyQCImage from './why-qc.jpg';
import type { PageComponent } from '@/app/serverComponent';
import { CourseType } from '@/components/courseType';
import { GetStartedSection } from '@/components/get-started-section';
import { Hero } from '@/components/hero';
import { HeroButtons } from '@/components/hero/heroButtons';
import { PaymentPlanSection } from '@/components/payment-plan-section';
import { Testimonial } from '@/components/testimonial';
import { TestimonialSection } from '@/components/testimonial-section';
import type { CourseCode } from '@/domain/courseCode';

export const metadata: Metadata = {
  title: 'Accelerate Your Business Workshop - QC Event School',
};

const courseCodes: CourseCode[] = [ 'eb' ];

const AccelerateYourBusinessPage: PageComponent = () => (
  <>
    <section>
      <div className="container">
        <div className="row justify-content-center g-s">
          <div className="col-12">
            <Hero src={HeroImage} priority objectPosition="100% 0">
              <CourseType className="mb-2 mb-xl-4">Specialty Course</CourseType>
              <h1 className="mb-2 mb-xl-4">Accelerate Your Business Workshop</h1>
              <p className="h5 mb-3 mb-xl-5">Market &amp; Grow Your Event Planning Business</p>
              <div className="d-flex justify-content-center justify-content-md-start">
                <HeroButtons courseCodes={courseCodes} />
              </div>
            </Hero>
          </div>
          <div className="col-12 col-lg-6">
            <h2 className="mb-4">Why Choose<br />QC Event School</h2>
            <p className="lead mb-4">QC's Accelerate Your Business course provides students with the most comprehensive training available to launch &amp; grow an event planning business</p>
            <ul className="mb-0">
              <li>No previous training required&mdash;our professional workshop is designed to take you from business beginner to expert</li>
              <li>Thriving virtual classroom to connect with other event professionals, get feedback, and gain access to bonus material</li>
              <li>Catapult your career with access to real-world templates, self-study assignments, and bonus materials</li>
            </ul>
          </div>
          <div className="col-12 col-sm-10 col-md-8 col-lg-6">
            <Image src={WhyQCImage} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
    <section className="bg-black text-white">
      <Image src={DesktopImage} fill placeholder="blur" alt="" sizes="100vw" style={{ objectFit: 'cover' }} />
      <div className={styles.overlay} />
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-12 col-lg-6">
            <h2 className="h3 mb-4">Your Independent Development Project</h2>
            <p className="lead">Your business is unique, and so are your business needs. That's why you have the option of completing a personalized Independent Development Project at the end of your course. Your tutor will get to know you and your business intimately. Then, she'll create an advanced assignment covering an area of your business that you'd like to work on. You'll set up an exclusive Skype session with your tutor for in-depth feedback on your work and learn where your business can go next.</p>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 col-xl-6 text-lg-center">
            <h2 className="mb-4">What Our Students and Grads Are Saying</h2>
            <p className="lead mb-5">We've helped 8000+ students and graduates start their own successful event and wedding planning business!</p>
          </div>
        </div>
        <div className="row justify-content-center g-s">
          <div className="col-12 col-sm-8 col-lg-4">
            <Testimonial id="TE-0001" courseCodes={courseCodes} />
          </div>
          <div className="col-12 col-sm-8 col-lg-4">
            <Testimonial id="TE-0002" courseCodes={courseCodes} />
          </div>
          <div className="col-12 col-sm-8 col-lg-4">
            <Testimonial id="TE-0003" courseCodes={courseCodes} />
          </div>
          <div className="col-12 col-sm-8 col-lg-4">
            <Testimonial id="TE-0004" courseCodes={courseCodes} />
          </div>
          <div className="col-12 col-sm-8 col-lg-4">
            <Testimonial id="TE-0005" courseCodes={courseCodes} />
          </div>
          <div className="col-12 col-sm-8 col-lg-4">
            <Testimonial id="TE-0006" courseCodes={courseCodes} />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="row align-items-center justify-content-center g-s">
          <div className="col-12 col-lg-6">
            <h2 className="mb-3">Here's What You'll Learn</h2>
            <p className="lead">QC's comprehensive Accelerate Your Business Workshop will show you how to turn your event planning business into a thriving success. You'll learn how to:</p>
            <ul className="mb-0">
              <li>Build a brand and gain all the knowledge you need to start a thriving event business</li>
              <li>Use branding, social media, content marketing, search engine optimization and other advanced marketing tools</li>
              <li>Master business communications, project management and financial management, allowing you to target the aspects of business ownership you need to succeed</li>
              <li>Create a personalized development project that targets your unique business needs</li>
            </ul>
          </div>
          <div className="col-12 col-sm-10 col-md-8 col-lg-6">
            <Image src={WhatYoullLearnImage} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
    <OutlineSection />
    <TestimonialSection id="TE-0001" courseCodes={courseCodes} />
    <Suspense>
      <PaymentPlanSection courseCodes={courseCodes} />
    </Suspense>
    <TestimonialSection id="TE-0002" courseCodes={courseCodes} />
    <GetStartedSection title="Ready to Grow a Successful Event Planning Business?" text="Take the Accelerate Your Business Workshop" courseCodes={courseCodes} />
  </>
);

export default AccelerateYourBusinessPage;
