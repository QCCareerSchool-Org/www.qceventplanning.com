import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

import CertificationBackgroundImage from './cert-bg.jpg';
import ConcertImage from './concert.jpg';
import HeroImage from './hero.jpg';
import { OutlineSection } from './outline-section';
import styles from './page.module.scss';
import WhatYoullLearnImage from './what-youll-learn.jpg';
import WhyQCImage from './why-qc.jpg';
import type { PageComponent } from '@/app/serverComponent';
import IFLPImage from '@/components/certifications/iflp.svg';
import { CourseType } from '@/components/courseType';
import { GetStartedSection } from '@/components/getStartedSection';
import { GoogleReviewSection } from '@/components/googleReviewSection';
import { Hero } from '@/components/hero';
import { HeroButtons } from '@/components/hero/heroButtons';
import { PaymentPlanSection } from '@/components/paymentPlanSection';
import { TestimonialSection } from '@/components/testimonialSection';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import { AlyssaPerna } from '@/components/tutorImages/alyssaPerna';
import { MarkCheplowitz } from '@/components/tutorImages/markCheplowitz';
import { VirtualCommunitySection } from '@/components/virtualCommunitySection';
import type { CourseCode } from '@/domain/courseCode';

export const metadata: Metadata = {
  title: 'Festivals and Live Events Course',
  alternates: {
    canonical: '/online-event-courses/festivals-and-live-events',
  },
};

const courseCode: CourseCode = 'fl';
const courseCodes: CourseCode[] = [ courseCode ];
const testimonialIds = [ 'TE-0003', 'TE-0016', 'TE-0013', 'TE-0010', 'TE-0015', 'TE-0008' ];

const EventPlanningPage: PageComponent = () => (
  <div className={styles.page}>
    <section>
      <div className="container">
        <div className="row justify-content-center g-s">
          <div className="col-12">
            <Hero src={HeroImage} priority objectPosition="100% 0">
              <CourseType className="mb-2 mb-xl-4">Specialty Course</CourseType>
              <h1 className="mb-2 mb-xl-4">Festivals and Live Events Course</h1>
              <p className="h5 mb-3 mb-xl-5">Become a Certified Festivals &amp; Live Events Planning Professional</p>
              <div className="d-flex justify-content-center justify-content-md-start">
                <HeroButtons courseCodes={courseCodes} />
              </div>
            </Hero>
          </div>
          <div className="col-12 col-lg-6">
            <h2 className="mb-4">Why Choose<br />QC Event School</h2>
            <p className="lead mb-4">QC's advanced specialization course in festivals and live event planning will show you how to:</p>
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
            <p className="lead">QC's Festivals and Live Events specialization course provides students with the most comprehensive training available to succeed in the corporate event industry.</p>
            <ul className="mb-4">
              <li>Use your existing corporate event planning skills to succeed in the live events industry</li>
              <li>Develop a unique theme, atmosphere, and vision for events with your clients</li>
              <li>Plan and execute concert promotion, show production, sports entertainment production, festival planning, and much more</li>
              <li>Work with various types of entertainment, including fireworks and high-profile talent</li>
              <li>Manage risk factors for public and live events</li>
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
      <Image src={CertificationBackgroundImage} fill placeholder="blur" alt="" sizes="100vw" style={{ objectFit: 'cover' }} />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-lg-8 col-xxl-6 text-center">
            <IFLPImage height="166" className="mb-3" alt="Festivals and Live Events certification logo" />
            <h2 className="text-white mb-3">Festivals and Live Events Certification</h2>
            <p>Once you graduate from your online event planning course, you'll receive a certification and be able to use the designation of International Festivals and Live Events Planning Professional&trade; (IFLP&trade;). The certification cements your credibility as an established industry professional giving you a competitive edge in your local industry!</p>
          </div>
        </div>
      </div>
    </section>
    <section id="instructors">
      <div className="container">
        <div className="row g-s">
          <div className="d-none d-lg-block col-lg-6">
            <Image src={ConcertImage} alt="" className="img-fluid" sizes="50vw" />
          </div>
          <div className="col-12 col-lg-6">
            <p className="mb-3 fst-italic">An International Team of Instructors</p>
            <h2 className="h3 mb-3">Meet Your New Festivals and Live Events Instructors</h2>
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
    <GoogleReviewSection courseCode={courseCode} />
    <Suspense>
      <PaymentPlanSection courseCodes={courseCodes} />
    </Suspense>
    <TestimonialSection id="TE-0018" courseCodes={courseCodes} />
    <GetStartedSection title="Ready to expand your event planning career?" text="Become professionally certified with QC's festivals and live events training" courseCodes={courseCodes} />
  </div>
);

export default EventPlanningPage;
