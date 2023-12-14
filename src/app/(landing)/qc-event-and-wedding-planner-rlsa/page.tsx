import Image from 'next/image';

import Link from 'next/link';
import EBImage from '../../(main)/online-event-courses/accelerate-your-business/hero.jpg';
import CPImage from '../../(main)/online-event-courses/corporate-event-planning/hero.jpg';
import DWImage from '../../(main)/online-event-courses/destination-wedding-planning/hero.jpg';
import EPImage from '../../(main)/online-event-courses/event-and-wedding-planning/hero.jpg';
import EDImage from '../../(main)/online-event-courses/event-decor/hero.jpg';
import FDImage from '../../(main)/online-event-courses/floral-design/hero.jpg';
import LWImage from '../../(main)/online-event-courses/luxury-wedding-and-event-planning/hero.jpg';
import WPImage from '../../(main)/online-event-courses/wedding-planning/hero.jpg';
import { Header } from '../header';
import BBBIcon from './bbb.svg';
import CertificationIcon from './certification.svg';
import CheckCircleIcon from './check-circle.svg';
import HeroImage from './hero.jpg';
import ShieldIcon from './shield.svg';
import type { PageComponent } from '@/app/serverComponent';
import { Candice } from '@/components/candice';
import { CourseCard } from '@/components/courseCard';
import { CourseCardCertifcation } from '@/components/courseCardCertification';
import { ILEASection } from '@/components/ileaSection';
import { AylaOtto } from '@/components/testimonial/images';
import WhyQCImage from '@/components/why-qc.jpg';

const RSLAPage: PageComponent = () => {
  return (
    <>
      <Header logoLink buttonHref="https://enroll.qceventplanning.com" buttonContent="Enroll Now" buttonAlwaysVisible />
      <section className="p-0 text-center">
        <Image src={HeroImage} alt="Become a Wedding & Event Planner" className="img-fluid" />
      </section>
      <section>
        <div className="container">
          <h2>Start a Rewarding career in the Event Industry</h2>
          <ul>
            <li>Get certified in 3-6 months with one-on-one guidance from industry professionals.</li>
            <li>Study online at your own pace and on your own schedule&mdash;no strict deadlines or exams!</li>
            <li>Comprehensive business training and resources to help you launch your own business.</li>
            <li>Lifetime access to up-to-date course materials in the Online Student Center.</li>
            <li>Access student support services 7 days a week&mdash;before, during, and after completing your course!</li>
            <li>Connect with a worldwide network of event planners in the Virtual Classroom</li>
            <li>Flexible payment plans allow you to learn without the financial burden of high tuition costs.</li>
          </ul>
        </div>
      </section>
      <ILEASection />
      <section className="bg-light">
        <div className="container">
          <div className="row justify-content-center g-lg-s">
            <div className="col-5 col-sm-4 col-md-3 mb-4 mb-md-0 text-center">
              <div style={{ position: 'relative', maxWidth: '100%', aspectRatio: 1, borderRadius: '50%' }}>
                <Image
                  src={AylaOtto}
                  alt="Ayla Otto"
                  fill
                  sizes="50vh"
                  style={{ objectFit: 'cover', borderRadius: '50%' }}
                />
              </div>
            </div>
            <div className="col-12 col-md-9 text-center text-md-start">
              <p className="lead">&ldquo;I liked that it was all online. Plus, I had a long time (2 years) to complete the course. The price was also very affordable! I loved the convenience of doing training online&mdash;rather than in-person&mdash;because you can do the course a little bit at a time, whenever it's convenient for your schedule.&rdquo;</p>
              <p className="lead fw-bold">&mdash;Ayla Otto, owner and founder of Events by Ayla</p>
              <p className="mb-0"><Link href="https://www.qceventplanning.com/blog/2023/07/qc-event-school-graduate-spotlight-ayla-otto">Read the full QC graduate interview</Link></p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row align-items-center justify-content-center g-4 g-xl-5 g-xxl-s">
            <div className="col-12 col-md-10 col-lg-7 col-xl-6 col-xxl-7 text-center text-lg-start">
              <h2 className="mb-5 mb-lg-4 mb-xx-5">Why Choose QC?</h2>
              <div className="row g-5 g-lg-4 g-xxl-5">
                <div className="col-12 col-lg-6">
                  <ShieldIcon className="d-lg-none d-xxl-block mb-3" />
                  <h3 className="h6 mb-3">40-Year History in Distance Education</h3>
                  <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sapien libero, aliquam at aliquam vitae, ultrices sit amet quam.</p>
                </div>
                <div className="col-12 col-lg-6">
                  <CheckCircleIcon className="d-lg-none d-xxl-block mb-3" />
                  <h3 className="h6 mb-3">Our 21-Day Money-Back Guarantee</h3>
                  <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sapien libero, aliquam at aliquam vitae, ultrices sit amet quam.</p>
                </div>
                <div className="col-12 col-lg-6">
                  <CertificationIcon className="d-lg-none d-xxl-block mb-3" />
                  <h3 className="h6 mb-3">Industry-Recognized Certifications</h3>
                  <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sapien libero, aliquam at aliquam vitae, ultrices sit amet quam.</p>
                </div>
                <div className="col-12 col-lg-6">
                  <BBBIcon className="d-lg-none d-xxl-block mb-3" />
                  <h3 className="h6 mb-3">An A+ Accreditation with the BBB</h3>
                  <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sapien libero, aliquam at aliquam vitae, ultrices sit amet quam.</p>
                </div>
              </div>
            </div>
            <div className="d-none d-lg-block col-lg-5 col-xl-6 col-xxl-5">
              <Image src={WhyQCImage} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light">
        <div className="container">
          <div className="row justify-content-center mb-s">
            <div className="col-12 col-lg-7 col-xl-6 col-xxl-5 text-center">
              <h2 className="mb-4">Online Event Planning Courses</h2>
            </div>
            <div className="col-12 col-lg-11 col-xl-9 col-xxl-8 text-center">
              <p className="lead mb-0">Discover a wide range of foundation and specialty courses offered by our online event school.</p>
            </div>
          </div>
          <div className="row justify-content-center g-4">
            <div className="col-12 col-sm-10 col-lg-6 d-flex">
              <CourseCard
                type="foundation"
                name="Event & Wedding Planning"
                description="QC's most comprehensive and popular course! Learn about all the components necessary to plan successful events and weddings from start to finish."
                href="/online-event-courses/event-and-wedding-planning"
                backgroundSrc={EPImage}
                certification={<CourseCardCertifcation courseCode="ep" />}
                message="Most Popular"
              />
            </div>
            <div className="col-12 col-sm-10 col-lg-6 d-flex">
              <CourseCard
                type="foundation"
                name="Corporate Event Planning"
                description="Discover how to plan and promote events such as product launches, galas, meetings, and conferences in this rapidly growing sector."
                href="/online-event-courses/corporate-event-planning"
                backgroundSrc={CPImage}
                certification={<CourseCardCertifcation courseCode="cp" />}
              />
            </div>
            <div className="col-12 col-sm-10 col-lg-6 d-flex">
              <CourseCard
                type="foundation"
                name="Event Decor"
                description="Expand your creative skills to design an event's mood and aesthetic experience. Learn to coordinate lighting, color, and decor to suit a theme."
                href="/online-event-courses/event-decor"
                backgroundSrc={EDImage}
                certification={<CourseCardCertifcation courseCode="ed" />}
              />
            </div>
            <div className="col-12 col-sm-10 col-lg-6 d-flex">
              <CourseCard
                type="foundation"
                name="Floral Design"
                description="Launch your own business, work for an experienced floral designer, or incorporate your floral design skills into an existing career in event planning."
                href="/online-event-courses/floral-design"
                backgroundSrc={FDImage}
                certification={<CourseCardCertifcation courseCode="fd" />}
              />
            </div>
            <div className="col-12 col-sm-10 col-lg-6 d-flex">
              <CourseCard
                type="foundation"
                name="Wedding Planning"
                description="Exceed expectations by learning to plan unique weddings tailored to your client's wishes, considering cultural variations, budgets, timelines, and more."
                href="/online-event-courses/wedding-planning"
                backgroundSrc={WPImage}
                certification={<CourseCardCertifcation courseCode="wp" />}
              />
            </div>
            <div className="col-12 col-sm-10 col-lg-6 d-flex">
              <CourseCard
                type="specialty"
                name={<>Luxury Wedding<span className="d-lg-none d-xl-inline"> &amp; Event</span> Planning</>}
                description="Master planning upscale events and weddings! Handle substantial budgets, network with high-end vendors, and embrace the latest trends."
                href="/online-event-courses/luxury-wedding-and-event-planning"
                backgroundSrc={LWImage}
                certification={<CourseCardCertifcation courseCode="lw" />}
              />
            </div>
            <div className="col-12 col-sm-10 col-lg-6 d-flex">
              <CourseCard
                type="specialty"
                name="Destination Wedding Planning"
                description="Gain skills to coordinate stunning destination weddings. Network with travel agents, translators, and niche vendors for unforgettable events."
                href="/online-event-courses/destination-wedding-planning"
                backgroundSrc={DWImage}
                certification={<CourseCardCertifcation courseCode="dw" />}
              />
            </div>
            <div className="col-12 col-sm-10 col-lg-6 d-flex">
              <CourseCard
                type="specialty"
                name="Accelerate Your Business"
                description="Learn how to start and grow your event planning business. Work with different marketing tools to help you achieve your business goals faster."
                href="/online-event-courses/accelerate-your-business"
                backgroundSrc={EBImage}
                certification={<CourseCardCertifcation courseCode="eb" />}
              />
            </div>
          </div>
        </div>
      </section>
      <section id="instructors">
        <div className="container">
          <div className="row justify-content-center mb-5 mb-lg-s">
            <div className="col-12 col-lg-10 col-xl-8 text-center">
              <h2 className="mb-3">Industry-Expert Tutors</h2>
              <p className="lead mb-0">Once you enroll in a course, you'll be matched with a personal tutor who will review your work and provide you with in-depth feedback and advice. You'll learn from an industry expert who will inspire and motivate you to pursue your own goals and push your creative boundaries.</p>
            </div>
          </div>
          <div className="row justify-content-center g-4 g-lg-s">
            <div className="col-12 col-lg-6 col-xl-7 text-center text-lg-start">
              <h3 className="h4 mb-3">Meet Candice Coppola, QC Event School Tutor</h3>
              <p>Candice Coppola is the creative force behind Jubilee Events, a renowned Connecticut-based event design and planning boutique specializing in artful weddings, events, and occasions. Her highly-acclaimed company continues to expand, recently opening a Barbados-based sister company, A Jubilee Event in the Caribbean, which plans stunning destination weddings for luxury clients.</p>
              <p className="mb-0">Candice is one of QC's talented tutors; she is also featured in the instructional videos for all QC Event courses, where she shares her vast knowledge of running a successful event and wedding planning business.</p>
            </div>
            <div className="col-10 col-sm-8 col-md-6 col-xl-5">
              <Candice className="img-fluid" sizes="50vw" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RSLAPage;
