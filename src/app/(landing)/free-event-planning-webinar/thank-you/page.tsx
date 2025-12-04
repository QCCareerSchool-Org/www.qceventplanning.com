import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import BriefcaseIcon from '../../../(main)/briefcase.svg';
import CertificationIcon from '../../../(main)/certification.svg';
import ObjectsVerticalBottomIcon from '../../../(main)/objects-vertical-bottom.svg';
import CPImage from '../../../(main)/online-event-courses/corporate-event-planning/hero.jpg';
import EPImage from '../../../(main)/online-event-courses/event-and-wedding-planning/hero.jpg';
import EDImage from '../../../(main)/online-event-courses/event-decor/hero.jpg';
import UserVoiceIcon from '../../../(main)/user-voice.svg';
import { Header } from '../../header';
import { AboutQCSection } from '../_sections/AboutQCSection';
import type { PageComponent } from '@/app/serverComponent';
import { AislePlannerSection } from '@/components/aislePlannerSection';
import BookIcon from '@/components/book.svg';
import CheckIcon from '@/components/check.svg';
import { CourseCard } from '@/components/courseCard';
import { CourseCardCertifcation } from '@/components/courseCardCertification';
import { GetStartedSection } from '@/components/getStartedSection';
import FacebookIcon from '@/components/icons/facebook.svg';
import InstagramIcon from '@/components/icons/instagram.svg';
import LinkedinIcon from '@/components/icons/linkedin.svg';
import PinterestIcon from '@/components/icons/pinterest.svg';
import TiktokIcon from '@/components/icons/tiktok.svg';
import { ILEASection } from '@/components/ileaSection';
import MagnifyingGlassIcon from '@/components/magnifying-glass.svg';
import { TestimonialSection } from '@/components/testimonialSection';
import WhyQCImage from '@/components/why-qc.jpg';
import { WistiaPlayer } from '@/components/wistiaPlayer';

export const metadata: Metadata = {
  title: 'Thank You for Joining the Webinar',
};

const WebinarThankYouPage: PageComponent = () => {
  return (
    <>
      <Header logoLink buttonAlwaysVisible buttonContent={<><span className="text-primary"><CheckIcon height="16" className="me-2" style={{ position: 'relative', top: -1 }} /></span>Enroll Now</>} buttonHref="https://enroll.qceventplanning.com" />
      <section>
        <div className="container text-center">
          <div className="row justify-content-center m-3">
            <div className="col-12 col-md-10 col-lg-7 col-xl-6 col-xxl-5">
              <h1 className="h2 mb-0">Ready to Launch Your Event Planning Career?</h1>
            </div>
          </div>
          <h2 className="h5 mb-3">Watch the Free Webinar!</h2>
          <WistiaPlayer videoId="15k0mttyr9" wrapper="wistia-player-container-1" />
        </div>
      </section>
      <AboutQCSection showCoursesButton />
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
      <section>
        <div className="container">
          <div className="text-center">
            <h2 className="mb-4">Popular Event Courses</h2>
          </div>
          <div className="row justify-content-center g-4 mb-5">
            <div className="col-12 col-sm-10 col-md-6 col-xl-4 d-flex">
              <CourseCard
                type="foundation"
                name="Event & Wedding Planning"
                description="QC's most comprehensive and popular course! Learn about all the components necessary to plan successful events and weddings from start to finish."
                href="/online-event-courses/event-and-wedding-planning"
                backgroundSrc={EPImage}
                certification={<CourseCardCertifcation courseCode="ep" />}
                buttons="courseSmall"
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
                buttons="courseSmall"
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
                buttons="courseSmall"
              />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 col-xl-7 col-xxl-6 text-center">
              <MagnifyingGlassIcon className="mb-3" />
              <h3 className="h4">Explore More Paths in Event Planning</h3>
              <p>Are you ready to expand your expertise? Our diverse range of courses is tailored to your individual interests and career goals. Whether you're seeking foundational knowledge or specialized techniques, unleash your creativity and elevate your skills.</p>
              <Link href="/online-event-courses" className="btn btn-primary btn-lg"><BookIcon className="me-2" />Discover More Courses</Link>
            </div>
          </div>
        </div>
      </section>
      <AislePlannerSection />
      <TestimonialSection id="TE-0006" />
      <GetStartedSection
        title="Ready to Start Your Event & Wedding Planning Career?"
        text="Become Professionally Certified with QC's Online Event Planning Training"
      />
      <div className="bg-navy text-white">
        <div className="container">
          <div className="d-flex justify-content-center">
            <div className="me-3"><a href="https://www.tiktok.com/@qceventschool" target="_blank" rel="noreferrer" style={{ color: 'inherit' }}><TiktokIcon title="Tiktok" /></a></div>
            <div className="me-3"><a href="https://www.instagram.com/qceventschool" target="_blank" rel="noreferrer" style={{ color: 'inherit' }}><InstagramIcon title="Instagram" /></a></div>
            <div className="me-3"><a href="https://www.facebook.com/QCEventPlanning" target="_blank" rel="noreferrer" style={{ color: 'inherit' }}><FacebookIcon title="Facebook" /></a></div>
            <div className="me-3"><a href="https://www.linkedin.com/company/qc-career-school" target="_blank" rel="noreferrer" style={{ color: 'inherit' }}><LinkedinIcon title="LinkedIn" /></a></div>
            <div><a href="https://www.pinterest.com/QCEventSchool/" target="_blank" rel="noreferrer" style={{ color: 'inherit' }}><PinterestIcon title="Pinterest" style={{ color: 'inherit' }} /></a></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebinarThankYouPage;
