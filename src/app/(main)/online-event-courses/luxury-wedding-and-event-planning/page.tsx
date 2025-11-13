import type { Metadata } from 'next';
import Image from 'next/image';

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
import IEWPImage from '@/components/certifications/lwes.svg';
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

const courseCode: CourseCode = 'lw';
const courseCodes: CourseCode[] = [ courseCode ];
const testimonialIds = [ 'TE-0012', 'TE-0014', 'TE-0003', 'TE-0002', 'TE-0001', 'TE-0019' ];

export const metadata: Metadata = {
  title: 'Luxury Wedding & Event Planning Course',
  description: getCourseDescription(courseCode),
  alternates: {
    canonical: '/online-event-courses/luxury-wedding-and-event-planning',
  },
};

const LuxuryWeddingAndEventPlanningPage: PageComponent = () => (
  <div className={styles.page}>
    <CourseSchema courseCode={courseCode} showPrice />
    <section className="half-padding-top">
      <div className="container">
        <div className="row justify-content-center g-s">
          <div className="col-12">
            <Hero src={HeroImage} priority objectPosition="100% 0">
              <CourseType className="mb-2 mb-xl-4">Specialty Course</CourseType>
              <h1 className="mb-2 mb-xl-4">Luxury Wedding &amp; Event Planning Course</h1>
              <p className="h5 mb-3 mb-xl-5">Become a Certified Luxury Event Planner</p>
              <div className="d-flex justify-content-center justify-content-md-start">
                <HeroButtons courseCodes={courseCodes} />
              </div>
            </Hero>
          </div>
          <div className="col-12 col-lg-6">
            <h2 className="mb-4">Why Choose<br />QC Event School</h2>
            <p className="lead mb-4">QC's Luxury Wedding &amp; Event Planning certification course provides students with the most comprehensive training available to succeed in the event planning industry.</p>
            <ul>
              <li>Personalized feedback &amp; advice on your assignments from our top industry event &amp; wedding planning experts</li>
              <li>Thriving virtual community to connect with other event planners, get feedback, and gain access to bonus material</li>
              <li>Built-in business training to help you launch your career and grow your clientele as a certified Luxury Wedding &amp; Event planner</li>
              <li>Discounts and affiliations with top organizations including Aisle Planner and The Association of  Wedding Planners International</li>
            </ul>
            <p className="mb-0"><strong>Note:</strong> Students should have previous training in event and wedding planning, or relevant work experience before enrolling in this course.</p>
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
            <p className="lead">QC's comprehensive Luxury Wedding &amp; Event planning course will show you how to turn your clients' most extravagant dreams into reality. You'll learn how to:</p>
            <ul className="mb-0">
              <li>Develop a unique theme, atmosphere, and vision for your clients' events &amp; weddings</li>
              <li>Create &ldquo;over-the-top&rdquo; events that impress clients and guests alike</li>
              <li>Work with large budgets, and demanding clients, and find out how to build your own network of top suppliers and vendors</li>
              <li>Manage large-scale event &amp; wedding budgets with ease</li>
              <li>Build your luxury brand and market your services to high-end clients</li>
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
            <IEWPImage height="166" className="mb-3" alt="Luxury Wedding and Event Specialist certification logo" />
            <h2 className="text-white mb-3">QC's Luxury Wedding &amp; Event Planning Certification</h2>
            <p className="mb-3">When you graduate from the Luxury Wedding and Event Planning course, you'll receive a certificate of completion and the professional designation of Luxury Wedding and Event Specialist. This certificate will assure your credibility in the industry to future clients and employers.</p>
            <p className="mb-0 small gold">Luxury Wedding and Event Specialist (LWES)</p>
          </div>
        </div>
      </div>
    </section>
    <section id="instructors">
      <div className="container">
        <div className="row g-s">
          <div className="col-12 col-lg-6">
            <h2 className="h3 mb-3">Meet Your New Luxury Wedding &amp; Event Planning Instructor</h2>
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
    <PaymentPlanSection courseCodes={courseCodes} />
    <section>
      <div itemScope itemType="https://schema.org/FAQPage">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <h2 className="mb-5 text-center">Frequently Asked Questions</h2>
              <AccordionFAQ heading="How much does a luxury wedding and event planner typically earn?" className="mb-3">
                <p>According to the Bureau of Labor Statistics, the average luxury wedding and event planner salary is over $99,000 per year, depending on your experience, clientele, and location. Many high-end planners who work with celebrity or destination clients can earn even more. The North American luxury wedding and event industry is estimated to be worth $29.7 billion. With the right training and business foundation, you can begin booking luxury clients in less than two months.</p>
              </AccordionFAQ>
              <AccordionFAQ heading="How long does it take to become a luxury wedding and event planner?" className="mb-3">
                <p>When you take QC&apos;s Event & Wedding course, you can work at your own pace and according to your own schedule. You can become a certified luxury event wedding and planner in under two months!</p>
                <p>If you want to take your time, you have a full year to complete your lessons and assignments and earn your Luxury Wedding and Event Planning certification.</p>
              </AccordionFAQ>
              <AccordionFAQ heading="Do I need prior experience to take this course?" className="mb-3">
                <p>Yes. The Luxury Wedding and Event Planning course is an advanced-level specialization. You&apos;ll need previous training or professional experience in event or wedding planning to succeed. If you&apos;re just starting out, we recommend completing the Event & Wedding Planning course first to build your foundational skills.</p>
              </AccordionFAQ>
              <AccordionFAQ heading="Is QC an accredited online event planning school?" className="mb-3">
                <p>Yes! QC Event School is accredited by the Better Business Bureau (BBB), holding the highest possible consumer rating (A+) and a positive 100% consumer ranking. QC Event School is also recognized by the International Live Events Association (ILEA) for maintaining a high standard of education in the event industry.</p>
                <p>There are many online event planning courses to choose from. When you enroll in QC Event School, you can be confident that we have been in business since 1984 and have a superb track record with students and customers. QC Event School is also recognized internationally by a wide variety of associations in the event planning industry.</p>
              </AccordionFAQ>
            </div>
          </div>
        </div>
      </div>
    </section>
    <GetStartedSection title="Ready to Help Your Clients Create Incredible Memories?" text="Specialize as a Luxury Wedding & Event Planner" courseCodes={courseCodes} />
  </div>
);

export default LuxuryWeddingAndEventPlanningPage;
