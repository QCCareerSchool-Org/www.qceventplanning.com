import type { Metadata } from 'next';
import Image from 'next/image';
import { Suspense } from 'react';

import { CourseStructuredData } from '../courseStructuredData';
import CertificationBackgroundImage from './cert-bg.jpg';
import HeroImage from './hero.jpg';
import { OutlineSection } from './outline-section';
import styles from './page.module.scss';
import WhatYoullLearnImage from './what-youll-learn.jpg';
import WhyQCImage from './why-qc.jpg';
import type { PageComponent } from '@/app/serverComponent';
import { BackgroundImage } from '@/components/backgroundImage';
import { Candice } from '@/components/candice';
import IEPPImage from '@/components/certifications/iepp.svg';
import { CourseType } from '@/components/courseType';
import { GetStartedSection } from '@/components/getStartedSection';
import { GoogleReviewSection } from '@/components/googleReviewSection';
import { Hero } from '@/components/hero';
import { HeroButtons } from '@/components/hero/heroButtons';
import { PaymentPlanSection } from '@/components/paymentPlanSection';
import { Question } from '@/components/questionCourseFAQ';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import { VirtualCommunitySection } from '@/components/virtualCommunitySection';
import type { CourseCode } from '@/domain/courseCode';
import { getCourseDescription } from '@/domain/courseCode';

const courseCode: CourseCode = 'ce';
const courseCodes: CourseCode[] = [ courseCode ];
const testimonialIds = [ 'TE-0015', 'TE-0001', 'TE-0003', 'TE-0017', 'TE-0002', 'TE-0018' ];

export const metadata: Metadata = {
  title: 'Event Planning Course',
  description: getCourseDescription(courseCode),
  alternates: {
    canonical: '/online-event-courses/event-planning',
  },
};

const EventPlanningPage: PageComponent = () => (
  <div className={styles.page}>
    <section className="half-padding-top">
      <div className="container">
        <div className="row justify-content-center g-s">
          <div className="col-12">
            <Hero src={HeroImage} priority objectPosition="100% 0">
              <CourseType className="mb-2 mb-xl-4">Foundation Course</CourseType>
              <h1 className="mb-2 mb-xl-4">Event Planning Course</h1>
              <p className="h5 mb-3 mb-xl-5">Become a Certified Event Planner</p>
              <div className="d-flex justify-content-center justify-content-md-start">
                <HeroButtons courseCodes={courseCodes} />
              </div>
            </Hero>
          </div>
          <div className="col-12 col-lg-6">
            <h2 className="mb-4">Why Choose<br />QC Event School</h2>
            <p className="lead mb-4">QC's Event Planning certification course provides students with the most comprehensive training available to succeed in the event industry.</p>
            <ul className="mb-0">
              <li>No previous training is required&mdash;our premium event planning course is designed to take you from beginner to expert</li>
              <li>Personalized feedback &amp; advice on your assignments from our top industry event planning experts</li>
              <li>Thriving virtual community to connect with other event planners, get feedback, and gain access to bonus material</li>
              <li>Built-in business training to help you launch your career and grow your clientele as a certified event planner</li>
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
            <p className="lead">QC's comprehensive event planning course will show you how to work with a wide variety of clients from tech and non-profit to government and fashion! You'll learn how to:</p>
            <ul className="mb-0">
              <li>Plan and organize industry events, milestone parties, holiday parties, and more</li>
              <li>Develop a unique theme, atmosphere, and vision for events with your clients</li>
              <li>Hire and negotiate contracts with popular and niche event vendors</li>
              <li>Discuss, create, and balance any client budget with confidence</li>
              <li>Work as an internal event planner at a company or start a new business</li>
              <li>Build your brand and market your new event planning services</li>
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
            <IEPPImage height="166" className="mb-3" alt="International Event Planning Professional certification logo" />
            <h2 className="text-white mb-3">Event Planning Certification</h2>
            <p>Once you graduate from your online event planning course, you'll receive a certification and be able to use the designation of International Event Planning Professional™ (IEPP™).</p>
            <p className="mb-0">The IEPP certification is approved by the International Live Events Association and cements your credibility as an established industry professional giving you a competitive edge in your local industry!</p>
          </div>
        </div>
      </div>
    </section>
    <section id="instructors">
      <div className="container">
        <div className="row g-s">
          <div className="col-12 col-lg-6">
            <h2 className="h3 mb-3">Meet Your New Event Planning Instructor</h2>
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
              <Question heading="How much will I make as an event planner?">
                <p>The average event planner salary is around $50,000 to $60,000 per year. Top earners in the industry can make even more depending on their experience, niche, and client base. According to Allied Market Research, the global events industry is booming, valued at over <strong>$736.8 billion</strong> annually*. With QC&apos;s training, you can launch your career in under three months and start earning a share of this exciting market.</p>
                <p>Many successful event planners increase their income by offering multiple services. After completing QC&apos;s Event & Wedding Planning course, you can expand your business by taking additional courses in <strong>Floral Design</strong>, <strong>Event Decor</strong> or <strong>Corporate Event Planning</strong>.</p>
                <p className="small mb-0">* &ldquo;<a href="https://www.alliedmarketresearch.com/events-industry-market#:~:text=The%20global%20events%20industry%20market,and%20place%20for%20a%20purpose" target="_blank" rel="noreferrer">Events Industry Market Research, 2035</a>.&rdquo; <i>Allied.</i></p>
              </Question>
              <Question heading="Do I need a degree to become an event planner?">
                <p>No! Your Event Planning course will teach you how to become an event planner without a license or an expensive event planning degree. When you graduate, you will receive a certificate designating you an International Event Planning Professional™ (IEPP™). Your event planner certification will show your colleagues and clients that you have all the skills and knowledge required to plan and transform spaces, and set you apart in the event planning industry.</p>
              </Question>
              <Question heading="How long does it take to become an event planner?">
                <p>When you take QC&apos;s Event Planning course, you can work at your own pace and according to your own schedule. You can become a certified event planner and start booking clients in under two months! If you want to take your time, you have a full year to complete your lessons and assignments and earn your event planning certification.</p>
              </Question>
              <Question heading="Is QC an accredited online event school?">
                <p>Yes! QC Event School is accredited by the Better Business Bureau (BBB), holding the highest possible consumer rating (A+) and a positive 100% consumer ranking. Additionally, QC Event School&apos;s programs are approved by the International Live Events Association (ILEA), recognizing our commitment to high-quality training and industry standards in event education.</p>
                <p>When you enroll in QC Event School, you can be confident that we have been in business since 1984 and have a superb track record with students and customers.</p>
              </Question>
              <Question heading="Do I need prior training or experience before taking QC's online courses?">
                <p>No, you do not need any previous experience in the event industry to succeed in QC's event planning courses! Whatever career path you choose, QC's courses will teach you everything you need to know, from consulting with clients to selecting venues and vendors, in order to become a qualified event and wedding planning professional.</p>
              </Question>
            </div>
          </div>
        </div>
      </div>
    </section>
    <GetStartedSection title="Ready to start your event planning career?" text="Become professionally certified with QC's online event planning training" courseCodes={courseCodes} />
    <CourseStructuredData courseCode={courseCode} />
  </div>
);

export default EventPlanningPage;
