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
import IWPPImage from '@/components/certifications/iwpp.svg';
import { CourseType } from '@/components/courseType';
import { GetStartedSection } from '@/components/getStartedSection';
import { GoogleReviewSection } from '@/components/googleReviewSection';
import { Hero } from '@/components/hero';
import { HeroButtons } from '@/components/hero/heroButtons';
import { PaymentPlanSection } from '@/components/paymentPlanSection';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import { AshleyFriesen } from '@/components/tutorImages/ashleyFriesen';
import { MwaiYeboah } from '@/components/tutorImages/mwaiYeboah';
import { VirtualCommunitySection } from '@/components/virtualCommunitySection';
import type { CourseCode } from '@/domain/courseCode';
import { getCourseDescription } from '@/domain/courseCode';

const courseCode: CourseCode = 'wp';
const courseCodes: CourseCode[] = [ courseCode ];
const testimonialIds = [ 'TE-0019', 'TE-0017', 'TE-0016', 'TE-0015', 'TE-0013', 'TE-0012' ];

export const metadata: Metadata = {
  title: 'Wedding Planning Course',
  description: getCourseDescription(courseCode),
  alternates: {
    canonical: '/online-event-courses/wedding-planning',
  },
};

const WeddingPlanningPage: PageComponent = () => {
  return (
    <div className={styles.page}>
      <section className="half-padding-top">
        <div className="container">
          <div className="row justify-content-center g-s">
            <div className="col-12">
              <Hero src={HeroImage} priority objectPosition="80% 0">
                <CourseType className="mb-2 mb-xl-4">Foundation Course</CourseType>
                <h1 className="mb-2 mb-xl-4">Wedding Planning Course</h1>
                <p className="h5 mb-3 mb-xl-5">Become a Certified Wedding Planner</p>
                <div className="d-flex justify-content-center justify-content-md-start">
                  <HeroButtons courseCodes={courseCodes} />
                </div>
              </Hero>
            </div>
            <div className="col-12 col-lg-6">
              <h2 className="mb-4">Why Choose<br />QC Event School</h2>
              <p className="lead mb-4">QC's Wedding Planning certification course provides students with the most comprehensive training available to succeed in the wedding industry.</p>
              <ul className="mb-0">
                <li>No previous training required&mdash;our professional wedding planning course is designed to take you from beginner to expert</li>
                <li>Personalized feedback &amp; advice on your assignments from our top industry wedding planning experts</li>
                <li>Thriving virtual community to connect with other event planners, get feedback, and gain access to bonus material</li>
                <li>Built-in business training to help you launch your career and grow your clientele as a certified wedding planner</li>
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
              <p className="lead">QC's comprehensive wedding planning course will show you how to turn your clients' wildest wedding dreams into reality. You'll learn how to: </p>
              <ul className="mb-0">
                <li>Develop a unique theme, atmosphere, and vision for your clients' weddings</li>
                <li>Source and hire reputable contractors and wedding vendors</li>
                <li>Incorporate various cultural and religious wedding elements</li>
                <li>Discuss, create, and balance any client's wedding budget with confidence</li>
                <li>Build your brand and market your new wedding planning business</li>
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
        <BackgroundImage src={CertificationBackgroundImage} />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-lg-8 col-xxl-6 text-center">
              <IWPPImage height="166" className="mb-3" alt="International Wedding Planning Professional certification logo" />
              <h2 className="text-white mb-3">QC's Wedding Planning Certification</h2>
              <p className="mb-3">Once you graduate from your online wedding planning course, you'll receive a certification and be able to use the designation of International Wedding Planning Professional (IWPP). Your designation demonstrates your credibility as a wedding planner and will help you develop positive relationships with clients and industry professionals.</p>
              <p className="mb-0 small gold">International Wedding Planning Professional (IWPP)™</p>
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
              <h2 className="h3 mb-3">Meet Your New Wedding Planning Instructors</h2>
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
                    <AshleyFriesen />
                  </div>
                  <h3 className="h6 mb-3">Ashley Friesen</h3>
                  <p className="small mb-0">Ashley is the owner and lead planner of Ashley Brooke Weddings. She specializes in wedding planning, design and coordination and loves being able to create weddings that are unique to each of her couples.</p>
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
                <AccordionFAQ heading="How much does a wedding planner make?" className="mb-3">
                  <p>According to Career Explorer, the average entry-level wedding planner salary is about $35,000 per year. Your income will increase as you gain experience and add additional services such as Event Decor or Floral Design.</p>
                  <p>The global wedding planning industry is estimated to generate USD 899.64 billion annually, according to Grand View Research. You can claim a part of that industry and start booking clients in under two months!</p>
                </AccordionFAQ>
                <AccordionFAQ heading="Do I need a degree to become a wedding planner?" className="mb-3">
                  <p>No! Your QC course will teach you how to become a wedding planner without a license or an expensive degree. When you graduate, you&apos;ll receive your International Wedding Planning Professional (IWPP) certification. This industry-recognized credential proves you have the training, skills, and expertise to plan unforgettable weddings and stand out in the competitive wedding industry.</p>
                </AccordionFAQ>
                <AccordionFAQ heading="How long does it take to become a wedding planner?" className="mb-3">
                  <p>When you take QC&apos;s Wedding Planning course, you can work at your own pace and according to your own schedule. You can become a certified wedding planner and start booking clients in as little as two months!</p>
                  <p>If you want to take your time, you have a full year to complete your lessons and assignments and earn your wedding planning certification.</p>
                </AccordionFAQ>
                <AccordionFAQ heading="Is QC an accredited online event planning school?" className="mb-3">
                  <p>Yes! QC Event School is accredited by the Better Business Bureau (BBB), holding the highest possible consumer rating (A+) and a positive 100% consumer ranking.</p>
                  <p>There are many online event planning courses to choose from. When you enroll in QC Event School, you can be confident that we have been in business since 1984 and have a superb track record with students and customers. QC Event School is also recognized internationally by a wide variety of associations in the event planning industry.</p>
                </AccordionFAQ>
                <AccordionFAQ heading="Do I need prior training or experience before taking QC's online courses?" className="mb-3">
                  <p>No, you do not need any previous experience in the wedding planning industry to succeed in QC's Wedding Planning course! You&apos;ll learn everything you need to know, from consulting with clients to selecting venues and vendors, in order to become a qualified wedding planning professional. If you have questions at any stage in your progress, you can reach out to our Student Support team, who are standing by to help you on your journey to becoming a wedding planner.</p>
                </AccordionFAQ>
              </div>
            </div>
          </div>
        </div>
      </section>
      <GetStartedSection title="Ready to Help Your Clients Create Breathtaking Wedding Memories?" text="Become a Professionally Certified Wedding Planner" courseCodes={courseCodes} />
      <CourseStructuredData courseCode={courseCode} />
    </div>
  );
};

export default WeddingPlanningPage;
