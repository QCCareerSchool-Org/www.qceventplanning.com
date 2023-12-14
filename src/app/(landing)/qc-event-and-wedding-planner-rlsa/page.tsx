import Image from 'next/image';

import Link from 'next/link';
import EBImage from '../../(main)/online-event-courses/accelerate-your-business/hero.jpg';
import CPImage from '../../(main)/online-event-courses/corporate-event-planning/hero.jpg';
import EPImage from '../../(main)/online-event-courses/event-and-wedding-planning/hero.jpg';
import EDImage from '../../(main)/online-event-courses/event-decor/hero.jpg';
import FDImage from '../../(main)/online-event-courses/floral-design/hero.jpg';
import WPImage from '../../(main)/online-event-courses/wedding-planning/hero.jpg';
import { BottomSection } from '../bottomSection';
import { Header } from '../header';
import BBBIcon from './bbb.svg';
import CertificationIcon from './certification.svg';
import CheckCircleIcon from './check-circle.svg';
import EventCareersImage from './event-careers.jpg';
import HeroImage from './hero.jpg';
import ShieldIcon from './shield.svg';
import type { PageComponent } from '@/app/serverComponent';
import { Candice } from '@/components/candice';
import { CourseCard } from '@/components/courseCard';
import { CourseCardCertifcation } from '@/components/courseCardCertification';
import { ILEASection } from '@/components/ileaSection';
import { AylaOtto, TylerReid } from '@/components/testimonial/images';
import { TestimonialSection } from '@/components/testimonialSection';
import WhyQCImage from '@/components/why-qc.jpg';

const RSLAPage: PageComponent = () => {
  return (
    <>
      <Header logoLink buttonHref="https://enroll.qceventplanning.com" buttonContent="Enroll Now" buttonAlwaysVisible />
      <section className="p-0" />
      <section className="text-white">
        <Image src={HeroImage} alt="" priority fill style={{ objectFit: 'cover' }} />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8  text-center">
              <div className="py-4 py-lg-5">
                <h1>Become a Certified Event &amp; Wedding Planner</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-9 col-xxl-8">
              <h2>Start a Rewarding Career in the Event Industry</h2>
              <ul>
                <li>Get certified in 3 to 6 months with one-on-one guidance from industry professionals.</li>
                <li>Study online at your own pace and on your own schedule&mdash;no strict deadlines or exams!</li>
                <li>Comprehensive business training and resources to help you launch your own business.</li>
                <li>Lifetime access to up-to-date course materials in the Online Student Center.</li>
                <li>Access student support services 7 days a week&mdash;before, during, and after completing your course!</li>
                <li>Connect with a worldwide network of event planners in the Virtual Classroom</li>
                <li>Flexible payment plans allow you to learn without the financial burden of high tuition costs.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <ILEASection />
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
      <section className="bg-light">
        <div className="container">
          <div className="row justify-content-center g-lg-s">
            <div className="col-5 col-sm-4 col-md-3 mb-4 mb-md-0 text-center">
              <div style={{ position: 'relative', maxWidth: '100%', aspectRatio: 1, borderRadius: '50%' }}>
                <Image src={AylaOtto} alt="Ayla Otto" fill sizes="50vh" style={{ objectFit: 'cover', borderRadius: '50%' }} />
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
              <h2 className="mb-5 mb-lg-4 mb-xxl-5">Why Choose QC Event School?</h2>
              <div className="row g-5 g-lg-4 g-xxl-5">
                <div className="col-12 col-lg-6">
                  <ShieldIcon className="d-lg-none d-xxl-block mb-3" />
                  <h3 className="h6 mb-3">40-Year History in Distance Education</h3>
                  <p className="mb-0">We've set the benchmark for excellence in distance education since 1984 and have many thousands of successful graduates. You could be one of them!</p>
                </div>
                <div className="col-12 col-lg-6">
                  <CheckCircleIcon className="d-lg-none d-xxl-block mb-3" />
                  <h3 className="h6 mb-3">Our 21-Day Money-Back Guarantee</h3>
                  <p className="mb-0">Starting a new career can be scary. But don't worry! Once you enroll with QC Event School, you'll be protected by a money-back guarantee!</p>
                </div>
                <div className="col-12 col-lg-6">
                  <CertificationIcon className="d-lg-none d-xxl-block mb-3" />
                  <h3 className="h6 mb-3">Industry-Recognized Certifications</h3>
                  <p className="mb-0">Graduate with professional event planning certifications and open up a world of career &amp; business opportunities.</p>
                </div>
                <div className="col-12 col-lg-6">
                  <BBBIcon className="d-lg-none d-xxl-block mb-3" />
                  <h3 className="h6 mb-3">An A+ Accreditation with the BBB</h3>
                  <p className="mb-0">QC is happy to celebrate 15 years of accreditation and has the highest possible consumer satisfaction rating (A+) with the Better Business Bureau.</p>
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
          <div className="row justify-content-center mb-4">
            <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6 text-center">
              <h2 className="mb-3">Career Opportunities</h2>
              <p>As the demand for meetings, events, and weddings grow, so does the need for professional and experienced planners. According to the Bureau of Labor Statistics, jobs for event planners are projected to grow more than 8% by 2032.</p>
            </div>
          </div>
          <div className="row justify-content-center g-s">
            <div className="col-12 col-lg-8">
              <h3 className="h5">Choose from a number of career opportunities in the event and wedding planning industry:</h3>
              <ul>
                <li>Start an event and wedding planning business. Be your own boss!</li>
                <li>Plan meetings, fundraisers and industry events for corporate clients</li>
                <li>Work as an in-house planner for companies and organizations</li>
                <li>Become a destination wedding planner and travel as you work</li>
                <li>Work with high-profile clients planning luxury events</li>
                <li>Style weddings and events with professional event decor</li>
                <li>Plan live events in various industries, such as music festivals and sports games</li>
              </ul>
            </div>
            <div className="d-none d-lg-block col-4">
              <Image src={EventCareersImage} alt="" className="img-fluid" style={{ width: '100%', height: 'auto' }} />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row justify-content-center g-lg-s">
            <div className="col-5 col-sm-4 col-md-3 mb-4 mb-md-0 text-center">
              <div style={{ position: 'relative', maxWidth: '100%', aspectRatio: 1, borderRadius: '50%' }}>
                <Image src={TylerReid} alt="TylerReid" fill sizes="50vh" style={{ objectFit: 'cover', borderRadius: '50%' }} />
              </div>
            </div>
            <div className="col-12 col-md-9 text-center text-md-start">
              <p className="lead">&ldquo;I always knew I had a passion for events, ever since I planned my 16th birthday party. However, I didn't truly come to the realization until the Dean of my college challenged me to choose a clear path upon graduation. This online certification [from QC] has given me the networks that will last a lifetime! I'm thankful for the word-of-mouth that led me to QC Event School and I am eternally grateful for the knowledge.&rdquo;</p>
              <p className="lead fw-bold">&mdash;Tyler Reid, Principal Planner of Eminent Events Wedding & Event Planning</p>
              <p className="mb-0"><Link href="https://www.qceventplanning.com/blog/2023/05/qc-event-school-graduate-spotlight-tyler-reid">Read the full QC graduate interview</Link></p>
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
      <TestimonialSection id="TE-0002" />
      <BottomSection>
        <h2 className="mb-4">Ready to Start Your Event & Wedding Planning Career?</h2>
        <p className="lead mb-4">Become Professionalky Certified with QC's Online Event Planning Training</p>
        <Link href="https://enroll.qceventplanning.com" className="btn btn-lg btn-primary">Enroll Now</Link>
      </BottomSection>
    </>
  );
};

export default RSLAPage;
