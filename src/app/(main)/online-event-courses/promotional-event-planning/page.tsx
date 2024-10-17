import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

import CertificationBackgroundImage from './cert-bg.jpg';
import HeroImage from './hero.jpg';
import { OutlineSection } from './outline-section';
import styles from './page.module.scss';
import ProductLaunchImage from './product-launch.jpg';
import WhatYoullLearnImage from './what-youll-learn.jpg';
import WhyQCImage from './why-qc.jpg';
import type { PageComponent } from '@/app/serverComponent';
import PESImage from '@/components/certifications/pes.svg';
import { CourseType } from '@/components/courseType';
import { GetStartedSection } from '@/components/getStartedSection';
import { Hero } from '@/components/hero';
import { HeroButtons } from '@/components/hero/heroButtons';
import { PaymentPlanSection } from '@/components/paymentPlanSection';
import { TestimonialSection } from '@/components/testimonialSection';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import { AlyssaPerna } from '@/components/tutorImages/alyssaPerna';
import { MarkCheplowitz } from '@/components/tutorImages/markCheplowitz';
import { VirtualCommunitySection } from '@/components/virtualCommunitySection';
import type { CourseCode } from '@/domain/courseCode';
import { BackgroundImage } from '@/components/backgroundImage';

export const metadata: Metadata = {
  title: 'Promotional Event Planning Course',
};

const courseCodes: CourseCode[] = [ 'pe' ];
const testimonialIds = [ 'TE-0008', 'TE-0013', 'TE-0003', 'TE-0015', 'TE-0006', 'TE-0012' ];

const EventPlanningPage: PageComponent = () => (
  <div className={styles.page}>
    <section>
      <div className="container">
        <div className="row justify-content-center g-s">
          <div className="col-12">
            <Hero src={HeroImage} priority objectPosition="100% 0">
              <CourseType className="mb-2 mb-xl-4">Specialty Course</CourseType>
              <h1 className="mb-2 mb-xl-4">Promotional Event Planning Course</h1>
              <p className="h5 mb-3 mb-xl-5">Become a Promotional Events Specialist</p>
              <div className="d-flex justify-content-center justify-content-md-start">
                <HeroButtons courseCodes={courseCodes} />
              </div>
            </Hero>
          </div>
          <div className="col-12 col-lg-6">
            <h2 className="mb-4">Why Choose<br />QC Event School</h2>
            <p className="lead mb-4">QC's Promotional Event Planning specialization provides students with the most comprehensive training available to succeed in the corporate event industry.</p>
            <ul className="mb-0">
              <li>Personalized feedback &amp; advice on your assignments from our top industry event planning experts</li>
              <li>Thriving virtual community to connect with other event planners, get feedback, and gain access to bonus material</li>
              <li>In-depth video case studies to give you an insider's look at high-profile promotional events</li>
              <li>Discounts and affiliations with top event planning software companies like Aisle Planner, Sample Board and more!</li>
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
            <p className="lead">QC's advanced specialization course in promotional event planning will show you how to bring your career to the next level:</p>
            <ul className="mb-4">
              <li>Specialize in planning exciting events that help corporate clients promote new products and services and build brand awareness</li>
              <li>Develop a unique theme, atmosphere, and vision for events with your clients</li>
              <li>Use professional software and find inspiration from current trends in the promotional event field</li>
              <li>Work as an internal event planner at a company or start a new business</li>
              <li>Maximize the reach of your promotional events, from impromptu marketing campaigns to pop-up shops, and much more</li>
            </ul>
            <p className="mb-0 fst-italic" style={{ paddingLeft: '2rem', borderLeft: '2px solid #506172' }}><strong>Please note:</strong> This specialization course assumes a degree of knowledge in the corporate event planning industry. Students should have previous training in <Link href="/online-event-courses/corporate-event-planning">corporate event planning</Link>, or relevant work experience before enrolling in this course.</p>
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
            <PESImage height="166" className="mb-3" alt="Promotional Events Specialist certification logo" />
            <h2 className="text-white mb-3">Promotional Events Specialist</h2>
            <p>Once you graduate from your online event planning course, you'll receive a certification and be able to use the designation of Promotional Events Specialist.</p>
            <p>The certification cements your credibility as an established industry professional giving you a competitive edge in your local industry!</p>
          </div>
        </div>
      </div>
    </section>
    <section id="instructors">
      <div className="container">
        <div className="row g-s">
          <div className="d-none d-lg-block col-lg-6">
            <Image src={ProductLaunchImage} alt="" className="img-fluid" sizes="50vw" />
          </div>
          <div className="col-12 col-lg-6">
            <p className="mb-3 fst-italic">An International Team of Instructors</p>
            <h2 className="h3 mb-3">Meet Your New Promotional Events Instructors</h2>
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
    <VirtualCommunitySection className="pt-0" />
    <OutlineSection />
    <TestimonialSection id="TE-0013" courseCodes={courseCodes} />
    <Suspense>
      <PaymentPlanSection courseCodes={courseCodes} />
    </Suspense>
    <TestimonialSection id="TE-0018" courseCodes={courseCodes} />
    <GetStartedSection title="Ready to start your event planning career?" text="Become professionally certified with QC's online event planning training" courseCodes={courseCodes} />
  </div>
);

export default EventPlanningPage;
