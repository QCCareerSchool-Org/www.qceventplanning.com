import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import BookIcon from './book.svg';
import BriefcaseIcon from './briefcase.svg';

import CertificationIcon from './certification.svg';

import MagnifyingGlassIcon from './magnifying-glass.svg';
import ObjectsVerticalBottomIcon from './objects-vertical-bottom.svg';
import CPImage from './online-event-courses/corporate-event-planning/hero.jpg';
import EPImage from './online-event-courses/event-and-wedding-planning/hero.jpg';
import FDImage from './online-event-courses/floral-design/hero.jpg';
import OpenBookIcon from './open-book.svg';
import UserVoiceIcon from './user-voice.svg';
import type { PageComponent } from '@/app/serverComponent';
import { CourseCard } from '@/components/courseCard';
import { CourseCardCertifcation } from '@/components/courseCardCertification';
import { GetStartedSection } from '@/components/getStartedSection';
import { GoogleReviewSection } from '@/components/googleReviewSection';
import { HomeHeroImage } from '@/components/homeHeroImage';
import { ILEASection } from '@/components/ileaSection';
import { StatsSection } from '@/components/statsSection/statsSection';
import { SupportSection } from '@/components/supportSection';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import { VirtualCommunitySection } from '@/components/virtualCommunitySection';
import WhyQCImage from '@/components/why-qc.jpg';

export const metadata: Metadata = {
  title: { absolute: 'QC Event School' },
};

const testimonialIds = [ 'TE-0013', 'TE-0002', 'TE-0003', 'TE-0004', 'TE-0005', 'TE-0006' ];

const HomePage: PageComponent = () => {
  return (
    <>
      <section className="text-white">
        <HomeHeroImage />
        <div className="container">
          <div className="row g-0">
            <div className="col-10 col-md-5 col-xx-6">
              <h1 className="mb-4">Become an Event Planner</h1>
              <p className="lead mb-5">Start Your New Career with QC's Online Event Planning Courses</p>
              <Link href="/online-event-courses" className="btn btn-primary btn-lg"><BookIcon className="me-3" />Browse Courses</Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row align-items-center justify-content-center g-4 g-xl-5 g-xxl-s">
            <div className="col-12 col-md-10 col-lg-7 col-xl-6 col-xxl-7 text-center text-lg-start">
              <h2 className="mb-5 mb-lg-4 mb-xxl-5">Why Choose QC Event School</h2>
              <div className="row g-5 g-lg-4 g-xxl-5">
                <div className="col-12 col-lg-6">
                  <BriefcaseIcon className="d-lg-none d-xxl-block mb-3" />
                  <h3 className="h6 mb-3">Learn From Expert Instructors</h3>
                  <p className="mb-0">We've hand-selected the top event planning professionals in the industry to guide you through your course material.</p>
                </div>
                <div className="col-12 col-lg-6">
                  <UserVoiceIcon className="d-lg-none d-xxl-block mb-3" />
                  <h3 className="h6 mb-3">Flexible Online Training</h3>
                  <p className="mb-0">QC provides a fully online education&mdash;learn at your own pace and engage with fellow students and grads in our virtual community!</p>
                </div>
                <div className="col-12 col-lg-6">
                  <CertificationIcon className="d-lg-none d-xxl-block mb-3" />
                  <h3 className="h6 mb-3">Industry-Recognized Certifications</h3>
                  <p className="mb-0">Graduate with professional event planning certifications and open up a world of career &amp; business opportunities</p>
                </div>
                <div className="col-12 col-lg-6">
                  <ObjectsVerticalBottomIcon className="d-lg-none d-xxl-block mb-3" />
                  <h3 className="h6 mb-3">Business Training Included</h3>
                  <p className="mb-0">Each course includes built-in business training to help you launch your career and grow your clientele as a newly certified event planner</p>
                </div>
              </div>
            </div>
            <div className="d-none d-lg-block col-lg-5 col-xl-6 col-xxl-5">
              <Image src={WhyQCImage} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      <StatsSection />
      <TestimonialWallSection testimonialIds={testimonialIds} />
      <ILEASection />
      <section>
        <div className="container">
          <h2 className="mb-5 text-center">Popular Design Courses</h2>
          <div className="row justify-content-center g-4 mb-s">
            <div className="col-12 col-sm-10 col-md-6 col-xl-4 d-flex">
              <CourseCard
                type="foundation"
                name="Event & Wedding Planning"
                description="QC's most comprehensive and popular course! Learn about all the components necessary to plan successful events and weddings from start to finish."
                href="/online-event-courses/event-and-wedding-planning"
                backgroundSrc={EPImage}
                certification={<CourseCardCertifcation courseCode="ep" />}
                message="Most Popular"
                buttons="course"
              />
            </div>
            <div className="col-12 col-sm-10 col-md-6 col-xl-4 d-flex">
              <CourseCard
                type="foundation"
                name="Corporate Event Planning"
                description="Discover how to plan and promote events such as product launches, galas, meetings, and conferences in this rapidly growing sector."
                href="/online-event-courses/corporate-event-planning"
                backgroundSrc={CPImage}
                certification={<CourseCardCertifcation courseCode="cp" />}
                buttons="course"
              />
            </div>
            <div className="col-12 col-sm-10 col-md-6 col-xl-4 d-flex">
              <CourseCard
                type="foundation"
                name="Floral Design"
                description="Launch your own business, work for an experienced floral designer, or incorporate your floral design skills into an existing career in event planning."
                href="/online-event-courses/floral-design"
                backgroundSrc={FDImage}
                certification={<CourseCardCertifcation courseCode="fd" />}
                buttons="course"
              />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 text-center">
              <MagnifyingGlassIcon height="28" className="mb-3" />
              <h3 className="h4 mb-3">Explore More Paths in Design</h3>
              <p className="lead mb-4">Looking to expand your design skills? Our comprehensive catalog offers a range of courses  so that you can tailor your learning experience to suit your unique career goals. From foundational skills to specialized techniques, QC is here to help you expand your professional expertise. Let your creativity soar and unlock your full potential in the world of design!</p>
              <Link href="/online-courses" className="btn btn-primary"><OpenBookIcon height="16" style={{ position: 'relative', top: -1 }} className="me-2" />Discover More Courses</Link>
            </div>
          </div>
        </div>
      </section>
      <VirtualCommunitySection />
      <SupportSection />
      <GoogleReviewSection />
      <GetStartedSection
        title="Ready to Start Your Event & Wedding Planning Career?"
        text="Become Professionally Certified with QC's Online Event Planning Training"
      />
    </>
  );
};

export default HomePage;
