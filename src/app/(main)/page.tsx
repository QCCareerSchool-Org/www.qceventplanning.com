import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import BookIcon from './book.svg';
import BriefcaseIcon from './briefcase.svg';
import CertificationIcon from './certification.svg';
import ObjectsVerticalBottomIcon from './objects-vertical-bottom.svg';
import EBImage from './online-event-courses/accelerate-your-business/hero.jpg';
import CPImage from './online-event-courses/corporate-event-planning/hero.jpg';
import DWImage from './online-event-courses/destination-wedding-planning/hero.jpg';
import EPImage from './online-event-courses/event-and-wedding-planning/hero.jpg';
import EDImage from './online-event-courses/event-decor/hero.jpg';
import CEImage from './online-event-courses/event-planning/hero.jpg';
import FLImage from './online-event-courses/festivals-and-live-events/hero.jpg';
import FDImage from './online-event-courses/floral-design/hero.jpg';
import LWImage from './online-event-courses/luxury-wedding-and-event-planning/hero.jpg';
import PEImage from './online-event-courses/promotional-event-planning/hero.jpg';
import WPImage from './online-event-courses/wedding-planning/hero.jpg';
import styles from './page.module.scss';
import UserVoiceIcon from './user-voice.svg';
import type { PageComponent } from '@/app/serverComponent';
import { AislePlannerSection } from '@/components/aislePlannerSection';
import { CourseCard } from '@/components/courseCard';
import { CourseCardCertifcation } from '@/components/courseCardCertification';
import { GetStartedSection } from '@/components/getStartedSection';
import { HomeHeroImage } from '@/components/homeHeroImage';
import { ILEASection } from '@/components/ileaSection';
import { PaymentSectionGuarantee } from '@/components/paymentPlanSection/guarantee';
import { TestimonialSection } from '@/components/testimonialSection';
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
      <ILEASection />
      <TestimonialWallSection testimonialIds={testimonialIds} />
      <section className="bg-light">
        <div className="container">
          <div className="text-center">
            <h2 className={`mb-4 ${styles.anchor}`} id="foundation">Our Foundation Courses</h2>
            <p className="lead mb-5">Discover a wide range of foundation and specialty courses offered by our online event school.</p>
          </div>
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
                name="Event Planning"
                description="Work with a variety of different clients and discover how to plan outstanding events including industry gatherings, milestone parties, holiday parties, and more."
                href="/online-event-courses/event-planning"
                backgroundSrc={CEImage}
                certification={<CourseCardCertifcation courseCode="ce" />}
                buttons="course"
              />
            </div>
            <div className="col-12 col-sm-10 col-md-6 col-xl-4 d-flex">
              <CourseCard
                type="foundation"
                name="Event Decor"
                description="Expand your creative skills to design an event's mood and aesthetic experience. Learn to coordinate lighting, color, and decor to suit a theme."
                href="/online-event-courses/event-decor"
                backgroundSrc={EDImage}
                certification={<CourseCardCertifcation courseCode="ed" />}
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
            <div className="col-12 col-sm-10 col-md-6 col-xl-4 d-flex">
              <CourseCard
                type="foundation"
                name="Wedding Planning"
                description="Exceed expectations by learning to plan unique weddings tailored to your client's wishes, considering cultural variations, budgets, timelines, and more."
                href="/online-event-courses/wedding-planning"
                backgroundSrc={WPImage}
                certification={<CourseCardCertifcation courseCode="wp" />}
                buttons="course"
              />
            </div>
          </div>

          <div className="text-center">
            <h2 className={`mb-5 ${styles.anchor}`} id="specialty">Specialty Courses</h2>
          </div>
          <div className="row justify-content-center g-4 mb-s">
            <div className="col-12 col-sm-10 col-md-6 d-flex">
              <CourseCard
                type="specialty"
                name={<>Luxury Wedding<span className="d-lg-none d-xl-inline"> &amp; Event</span> Planning</>}
                description="Master planning upscale events and weddings! Handle substantial budgets, network with high-end vendors, and embrace the latest trends."
                href="/online-event-courses/luxury-wedding-and-event-planning"
                backgroundSrc={LWImage}
                certification={<CourseCardCertifcation courseCode="lw" />}
                buttons="course"
              />
            </div>
            <div className="col-12 col-sm-10 col-md-6 d-flex">
              <CourseCard
                type="specialty"
                name="Destination Wedding Planning"
                description="Gain skills to coordinate stunning destination weddings. Network with travel agents, translators, and niche vendors for unforgettable events."
                href="/online-event-courses/destination-wedding-planning"
                backgroundSrc={DWImage}
                certification={<CourseCardCertifcation courseCode="dw" />}
                buttons="course"
              />
            </div>
            <div className="col-12 col-sm-10 col-md-6 col-xl-4 d-flex">
              <CourseCard
                type="specialty"
                name="Promotional Event Planning"
                description="Take your corporate event planning skills a step further by learning how to effectively implement impromptu marketing campaigns, pop-up shops, and more."
                href="/online-event-courses/promotional-event-planning"
                backgroundSrc={PEImage}
                certification={<CourseCardCertifcation courseCode="pe" />}
                buttons="course"
              />
            </div>
            <div className="col-12 col-sm-10 col-md-6 col-xl-4 d-flex">
              <CourseCard
                type="specialty"
                name="Festivals and Live Events"
                description="Explore live-event logistics and use your existing corporate event knowledge to plan both small and large-scale festivals and entertainment events."
                href="/online-event-courses/festivals-and-live-events"
                backgroundSrc={FLImage}
                certification={<CourseCardCertifcation courseCode="fl" />}
                buttons="course"
              />
            </div>
            <div className="col-12 col-sm-10 col-md-6 col-xl-4 d-flex">
              <CourseCard
                type="specialty"
                name="Accelerate Your Business"
                description="Learn how to start and grow your event planning business. Work with different marketing tools to help you achieve your business goals faster."
                href="/online-event-courses/accelerate-your-business"
                backgroundSrc={EBImage}
                certification={<CourseCardCertifcation courseCode="eb" />}
                buttons="course"
              />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 col-xl-7 col-xxl-6">
              <PaymentSectionGuarantee />
            </div>
          </div>
        </div>
      </section>
      <VirtualCommunitySection />
      <AislePlannerSection />
      <TestimonialSection id="TE-0006" />
      <GetStartedSection
        title="Ready to Start Your Event & Wedding Planning Career?"
        text="Become Professionally Certified with QC's Online Event Planning Training"
      />
    </>
  );
};

export default HomePage;
