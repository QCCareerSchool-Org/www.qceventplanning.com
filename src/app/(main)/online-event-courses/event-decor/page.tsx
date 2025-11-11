import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

import CertificationBackgroundImage from './cert-bg.jpg';
import HeroImage from './hero.jpg';
import { OutlineSection } from './outline-section';
import styles from './page.module.scss';
import WhatYoullLearnImage from './what-youll-learn.jpg';
import WhyQCImage from './why-qc.jpg';
import type { PageComponent } from '@/app/serverComponent';
import { AccordionFAQ } from '@/components/accordionFAQ';
import { AislePlannerSection } from '@/components/aislePlannerSection';
import { BackgroundImage } from '@/components/backgroundImage';
import { Candice } from '@/components/candice';
import IEDPImage from '@/components/certifications/iedp.svg';
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

const courseCode: CourseCode = 'ed';
const courseCodes: CourseCode[] = [ courseCode ];
const testimonialIds = [ 'TE-0019', 'TE-0008', 'TE-0002', 'TE-0011', 'TE-0004', 'TE-0014' ];

export const metadata: Metadata = {
  title: 'Event Decor Course',
  description: getCourseDescription(courseCode),
  alternates: {
    canonical: '/online-event-courses/event-decor',
  },
};

const EventDecorPage: PageComponent = () => (
  <div className={styles.page}>
    <Suspense><CourseSchema courseCode={courseCode} /></Suspense>
    <section className="half-padding-top">
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
    <TestimonialWallSection courseCodes={courseCodes} testimonialIds={testimonialIds} className="bg-light" schemaCourseId="#course" />
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
      <BackgroundImage src={CertificationBackgroundImage} />
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
    <OutlineSection />
    <VirtualCommunitySection />
    <AislePlannerSection />
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
              <AccordionFAQ heading="What will I learn in QC's Event Decor course?" className="mb-3">
                <p>Event decor services are a great way to add value to your services and reach a broader audience of clients in need of design services. With QC's Event Decor course, you'll learn all the components that make an event unique, including florals, lighting, layout and fabric. You'll gain all the skills you need to design stunning, cohesive events. You'll also <strong>develop your client consultation skills</strong> and explore the <strong>business side of event decorating</strong>, including how to price your services and build a brand. Graduates earn the <strong>International Event Decorating Professional&trade; (IEDP&trade;) certification</strong>—an industry-recognized credential that showcases your training and credibility.</p>
              </AccordionFAQ>
              <AccordionFAQ heading="How much does an event decorator earn?" className="mb-3">
                <p>An <strong>event decorator's salary</strong> varies based on experience, location, and the services you offer. According to ZipRecruiter, on average, event decorators earn between <strong>$32,459 and $42,500 per year</strong>, with opportunities to charge more for consultations and full-service packages as your reputation grows. Many successful event decorators work as freelancers, with event planning companies or run their own event decor businesses.</p>
                <p>Our <Link href="/contact-us">student support team</Link> will be happy to tell you about the QC Event & Wedding Planning course and how it can accelerate your event decorating career after graduation!</p>
              </AccordionFAQ>
              <AccordionFAQ heading="Do I need a degree to become an event decorator?" className="mb-3">
                <p>A license, degree, or certification is NOT required to work as an event decorator. With QC's Event Decor course, you'll earn an industry-recognized certification as an International Event Decorating Professional (IEDP).  This designation gives you a competitive edge by proving your qualifications and building client trust, so that you can stand out in this lucrative industry. The IEDP certification shows clients that you have the skills and knowledge required to decorate beautiful and memorable events.</p>
              </AccordionFAQ>
              <AccordionFAQ heading="How long does it take to become an event decorator?" className="mb-3">
                <p>You can become a certified event decorator in just a <strong>few short months</strong>! QC's <strong>self-paced online course</strong> allows you to study on your schedule. Most students complete the course in <strong>3 to 6 months</strong>, but you'll have <strong>up to 2 full years</strong> to finish your assignments.</p>
                <p>You can start booking <strong>event decorator jobs</strong> as soon as you're certified.</p>
              </AccordionFAQ>
              <AccordionFAQ heading="Can I start my own event decor business after graduating?" className="mb-3">
                <p>Yes! The Event Decor course includes an <strong>optional business training</strong> unit that teaches you how to start and grow your own <strong>event decorating business</strong>. You'll learn how to register your own business, write a business plan, market your services and work successfully with any client or vendor. By graduation, you'll have the confidence and tools to launch your career or business.</p>
              </AccordionFAQ>
            </div>
          </div>
        </div>
      </div>
    </section>
    <GetStartedSection title="Ready to Help Your Clients Create Breathtaking Memories?" text="Become a Professionally Certified Event Decorator" courseCodes={courseCodes} />
  </div>
);

export default EventDecorPage;
