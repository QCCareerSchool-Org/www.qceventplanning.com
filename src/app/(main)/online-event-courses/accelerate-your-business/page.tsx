import type { Metadata } from 'next';
import Image from 'next/image';

import { Suspense } from 'react';
import DesktopImage from './desktop.jpg';
import HeroImage from './hero.jpg';
import { OutlineSection } from './outline-section';
import styles from './page.module.scss';
import WhatYoullLearnImage from './what-youll-learn.jpg';
import WhyQCImage from './why-qc.jpg';
import type { PageComponent } from '@/app/serverComponent';
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
  title: 'Accelerate Your Business Workshop - QC Event School',
};

const courseCodes: CourseCode[] = [ 'eb' ];
const testimonialIds = [ 'TE-0004', 'TE-0007', 'TE-0003', 'TE-0009', 'TE-0010', 'TE-0011' ];

const AccelerateYourBusinessPage: PageComponent = () => (
  <div className={styles.page}>
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
            <p className="lead mb-4">QC's Accelerate Your Business course provides students with the most comprehensive training available to grow your event planning business.</p>
            <ul className="mb-0">
              <li>Our professional workshop is designed to help you take your existing event business to the next level</li>
              <li>Thriving virtual community to connect with other event professionals, get feedback, and gain access to bonus material</li>
              <li>Catapult your career with access to real-world templates, self-study assignments, and bonus materials</li>
            </ul>
          </div>
          <div className="col-12 col-sm-10 col-md-8 col-lg-6">
            <Image src={WhyQCImage} alt="" className={`img-fluid ${styles.whyQCImage}`} />
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
            <p className="lead">Your business is unique, and so are your business needs. Work with a QC tutor to advance your business. Learn in-depth marketing strategies, work on building a strong portfolio, fine tune your project management practices, become more comfortable with financing and budgeting, and more. During the optional final unit of this workshop, you'll have the opportunity to hone in on the areas of your business you would most like to work on! You can ask your tutor for specific advice on your marketing strategy or website copy, or seek general advice on a tricky event plan. This is a great opportunity to learn and improve!</p>
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
            <p className="lead">QC's comprehensive Accelerate Your Business Workshop will show you how to turn your event planning business into a thriving success. You'll learn how to:</p>
            <ul className="mb-0">
              <li>Build a brand and gain all the knowledge you need to grow a thriving event business</li>
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
    <VirtualCommunitySection className="pt-0" />
    <OutlineSection />
    <TestimonialSection id="TE-0006" courseCodes={courseCodes} />
    <Suspense>
      <PaymentPlanSection courseCodes={courseCodes} />
    </Suspense>
    <TestimonialSection id="TE-0009" courseCodes={courseCodes} />
    <GetStartedSection title="Ready to Grow a Successful Event Planning Business?" text="Take the Accelerate Your Business Workshop" courseCodes={courseCodes} />
  </div>
);

export default AccelerateYourBusinessPage;
