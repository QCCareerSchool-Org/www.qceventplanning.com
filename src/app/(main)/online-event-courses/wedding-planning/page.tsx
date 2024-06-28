import type { Metadata } from 'next';
import Image from 'next/image';

import { Suspense } from 'react';
import CertificationBackgroundImage from './cert-bg.jpg';
import HeroImage from './hero.jpg';
import { OutlineSection } from './outline-section';
import styles from './page.module.scss';
import PlaceSettingImage from './place-setting.jpg';
import WhatYoullLearnImage from './what-youll-learn.jpg';
import WhyQCImage from './why-qc.jpg';
import type { PageComponent } from '@/app/serverComponent';
import { AislePlannerSection } from '@/components/aislePlannerSection';
import IWPPImage from '@/components/certifications/iwpp.svg';
import { CourseType } from '@/components/courseType';
import { GetStartedSection } from '@/components/getStartedSection';
import { Hero } from '@/components/hero';
import { HeroButtons } from '@/components/hero/heroButtons';
import { PaymentPlanSection } from '@/components/paymentPlanSection';
import { TestimonialSection } from '@/components/testimonialSection';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import { AshleyFriesen } from '@/components/tutorImages/ashleyFriesen';
import { MwaiYeboah } from '@/components/tutorImages/mwaiYeboah';
import { VirtualCommunitySection } from '@/components/virtualCommunitySection';
import type { CourseCode } from '@/domain/courseCode';

export const metadata: Metadata = {
  title: 'Wedding Planning Course - QC Event School',
};

const courseCodes: CourseCode[] = [ 'wp' ];
const testimonialIds = [ 'TE-0019', 'TE-0017', 'TE-0016', 'TE-0015', 'TE-0013', 'TE-0012' ];

const WeddingPlanningPage: PageComponent = () => (
  <div className={styles.page}>
    <section>
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
      <Image src={CertificationBackgroundImage} fill placeholder="blur" alt="" sizes="100vw" style={{ objectFit: 'cover' }} />
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
    <section id="instructors">
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
    <VirtualCommunitySection className="pt-0" />
    <OutlineSection />
    <AislePlannerSection />
    <TestimonialSection id="TE-0001" courseCodes={courseCodes} />
    <Suspense>
      <PaymentPlanSection courseCodes={courseCodes} />
    </Suspense>
    <TestimonialSection id="TE-0002" courseCodes={courseCodes} />
    <GetStartedSection title="Ready to Help Your Clients Create Breathtaking Wedding Memories?" text="Become a Professionally Certified Wedding Planner" courseCodes={courseCodes} />
  </div>
);

export default WeddingPlanningPage;
