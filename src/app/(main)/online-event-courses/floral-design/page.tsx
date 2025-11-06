import type { Metadata } from 'next';
import Image from 'next/image';
import { Suspense } from 'react';

import { CourseStructuredData } from '../courseStructuredData';
import CertificationBackgroundImage from './cert-bg.jpg';
import HeroImage from './hero.jpg';
import { OutlineSection } from './outline-section';
import styles from './page.module.scss';
import PlaceSettingImage from './place-setting.jpg';
import WhatYoullLearnImage from './what-youll-learn.jpg';
import WhyQCImage from './why-qc.jpg';
import type { PageComponent } from '@/app/serverComponent';
import { AccordionFAQ } from '@/components/accordionFAQ';
import { AislePlannerSection } from '@/components/aislePlannerSection';
import { BackgroundImage } from '@/components/backgroundImage';
import IFDPImage from '@/components/certifications/ifdp.svg';
import { CourseType } from '@/components/courseType';
import { GetStartedSection } from '@/components/getStartedSection';
import { GoogleReviewSection } from '@/components/googleReviewSection';
import { Hero } from '@/components/hero';
import { HeroButtons } from '@/components/hero/heroButtons';
import { PaymentPlanSection } from '@/components/paymentPlanSection';
import { SAFPartnerSection } from '@/components/safPartnerSection';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import { MwaiYeboah } from '@/components/tutorImages/mwaiYeboah';
import { ReneeTucci } from '@/components/tutorImages/reneeTucci';
import { VirtualCommunitySection } from '@/components/virtualCommunitySection';
import type { CourseCode } from '@/domain/courseCode';
import { getCourseDescription } from '@/domain/courseCode';
import { getData } from '@/lib/getData';

const courseCode: CourseCode = 'fd';
const courseCodes: CourseCode[] = [ courseCode ];
const testimonialIds = [ 'TE-0008', 'TE-0018', 'TE-0016', 'TE-0015', 'TE-0014', 'TE-0012' ];

export const metadata: Metadata = {
  title: 'Floral Design Course',
  description: getCourseDescription(courseCode),
  alternates: {
    canonical: '/online-event-courses/floral-design',
  },
};

const FloralDesignPage: PageComponent = () => {
  const { countryCode } = getData();

  return (
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
      {countryCode !== 'CA' && <SAFPartnerSection />}
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
      <section>
        <div itemScope itemType="https://schema.org/FAQPage">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10">
                <h2 className="mb-5 text-center">Frequently Asked Questions</h2>
                <AccordionFAQ heading="How much does a floral designer typically earn?" className="mb-3">
                  <p>According to ZipRecruiter, the average floral designer salary is over $37,000 per year Your earnings could vary depending on several factors such as your location, level of experience, and whether you work for yourself or in a floral chain or an independent shop. You can increase your income and professional opportunities by enrolling in a floral design course that provides hands-on training and business education. QC Event School&apos;s online Floral Design certification program prepares you with both creative and entrepreneurial skills to help you succeed faster in the industry</p>
                </AccordionFAQ>
                <AccordionFAQ heading="Do I need a degree or diploma to become a floral designer?" className="mb-3">
                  <p>You don&apos;t need a license or degree to work as a florist or floral designer. QC&apos;s Floral Design course will teach you how to become a floral designer by providing you with personalized feedback and advice from our top industry experts and providing you with business training to help you launch your career. When you graduate from QC Event School&apos;s Floral Design course, you will receive a certification and be able to use the designation of International Floral Design Professional (IFDP). This prestigious certification showcases your skills and credibility for your clients and colleagues in the floral design industry.</p>
                </AccordionFAQ>
                <AccordionFAQ heading="How long does it take to become a floral designer?" className="mb-3">
                  <p>You can become a floral designer and start booking clients in under 3 months! When you take QC&apos;s Floral Design course, you can work at your own pace and according to your own schedule. You&apos;ll have a full year to complete your training, giving you the flexibility to study around your personal schedule.</p>
                </AccordionFAQ>
                <AccordionFAQ heading="Can I start my own floral design or florist shop after graduating?" className="mb-3">
                  <p>Yes, absolutely! QC Design School&apos;s Floral Design course includes an optional business training unit that walks you through the process of launching your own floral design business or florist shop. You&apos;ll learn how to:</p>
                  <ul>
                    <li>Register your floral business</li>
                    <li>Create a professional business plan</li>
                    <li>Price and package your floral services</li>
                    <li>Market your business both online and offline</li>
                    <li>Build relationships with vendors and clients</li>
                  </ul>
                  <p>With your IFDP certification and business training, you&apos;ll be ready to start offering services such as custom floral arrangements for weddings, events, retail, or everyday occasions.</p>
                </AccordionFAQ>
              </div>
            </div>
          </div>
        </div>
      </section>
      <GetStartedSection title="Ready to Start Your Dream Career?" text="Become a Professionally Certified Floral Designer" courseCodes={courseCodes} />
      <CourseStructuredData courseCode={courseCode} />
    </div>
  );
};

export default FloralDesignPage;
