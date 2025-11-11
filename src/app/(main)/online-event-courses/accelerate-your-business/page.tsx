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
import { AccordionFAQ } from '@/components/accordionFAQ';
import { BackgroundImage } from '@/components/backgroundImage';
import { CourseSchema } from '@/components/courseSchema';
import { CourseType } from '@/components/courseType';
import { GetStartedSection } from '@/components/getStartedSection';
import { GoogleReviewSection } from '@/components/googleReviewSection';
import { Hero } from '@/components/hero';
import { HeroButtons } from '@/components/hero/heroButtons';
import { PaymentPlanSection } from '@/components/paymentPlanSection';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import { VirtualCommunitySection } from '@/components/virtualCommunitySection';
import type { CourseCode } from '@/domain/courseCode';
import { getCourseDescription } from '@/domain/courseCode';

const courseCode: CourseCode = 'eb';
const courseCodes: CourseCode[] = [ courseCode ];
const testimonialIds = [ 'TE-0004', 'TE-0007', 'TE-0003', 'TE-0009', 'TE-0010', 'TE-0011' ];

export const metadata: Metadata = {
  title: 'Accelerate Your Business Workshop',
  description: getCourseDescription(courseCode),
  alternates: {
    canonical: '/online-event-courses/accelerate-your-business',
  },
};

const AccelerateYourBusinessPage: PageComponent = () => (
  <div className={styles.page}>
    <Suspense><CourseSchema courseCode={courseCode} /></Suspense>
    <section className="half-padding-top">
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
      <BackgroundImage src={DesktopImage} />
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
    <TestimonialWallSection courseCodes={courseCodes} testimonialIds={testimonialIds} className="bg-light" schemaCourseId="#course" />
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
    <OutlineSection />
    <VirtualCommunitySection />
    <GoogleReviewSection courseCode={courseCode} schemaCourseId="#course" />
    <Suspense>
      <PaymentPlanSection courseCodes={courseCodes} />
    </Suspense>
    <section>
      <div itemScope itemType="https://schema.org/FAQPage">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <h2 className="mb-5 text-center">Frequently Asked Questions</h2>
              <AccordionFAQ heading="What will QC’s Accelerate Your Business course teach me?" className="mb-3">
                <p>Once you have your event planning certification, QC&apos;s Accelerate Your Business course will teach you how to build your business with the marketing, project management and communications tools you need for success. Your course materials, approved by QC&apos;s event planning experts and entrepreneurs, will tell you how to register your business, build your brand, create promotions and find your future clients.</p>
              </AccordionFAQ>
              <AccordionFAQ heading="Do I need a degree to start my own event planning design business?" className="mb-3">
                <p>No! QC Event Planning&apos;s Accelerate Your Business course will build on your event planning courses by teaching you how to register your event planning business, write a business plan, market your services, and work with any client.  QC provides a full pathway for you to progress from beginner to business owner with its online event planning and business training courses.</p>
              </AccordionFAQ>
              <AccordionFAQ heading="Can this course help me grow an existing design business?" className="mb-3">
                <p>Yes! If you already run an event planning business, QC&apos;s Accelerate Your Business course can help you scale it more effectively.</p>
                <p>You&apos;ll learn how to:</p>
                <ul>
                  <li>Identify new target markets</li>
                  <li>Improve client acquisition and retention</li>
                  <li>Set and adjust your pricing strategies</li>
                  <li>Streamline your workflow and client process</li>
                  <li>Optimize your marketing and branding efforts</li>
                </ul>
                <p>This course is ideal for design professionals looking to grow their revenue, expand services, or build a team. Our Student Support Team can also help you bundle this course with additional design certifications for a more competitive edge.</p>
              </AccordionFAQ>
            </div>
          </div>
        </div>
      </div>
    </section>
    <GetStartedSection title="Ready to Grow a Successful Event Planning Business?" text="Take the Accelerate Your Business Workshop" courseCodes={courseCodes} />
  </div>
);

export default AccelerateYourBusinessPage;
