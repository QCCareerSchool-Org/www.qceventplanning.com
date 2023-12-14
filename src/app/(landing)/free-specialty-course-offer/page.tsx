import Link from 'next/link';
import EBImage from '../../(main)/online-event-courses/accelerate-your-business/hero.jpg';
import CPImage from '../../(main)/online-event-courses/corporate-event-planning/hero.jpg';
import DWImage from '../../(main)/online-event-courses/destination-wedding-planning/hero.jpg';
import EPImage from '../../(main)/online-event-courses/event-and-wedding-planning/hero.jpg';
import EDImage from '../../(main)/online-event-courses/event-decor/hero.jpg';
import FDImage from '../../(main)/online-event-courses/floral-design/hero.jpg';
import LWImage from '../../(main)/online-event-courses/luxury-wedding-and-event-planning/hero.jpg';
import WPImage from '../../(main)/online-event-courses/wedding-planning/hero.jpg';
import { BottomSection } from '../bottomSection';
import type { PageComponent } from '@/app/serverComponent';
import { CourseCard } from '@/components/courseCard';
import { CourseCardCertifcation } from '@/components/courseCardCertification';
import { DeadlineFunnelScript } from '@/components/deadlineFunnelScript';
import { ILEASection } from '@/components/ileaSection';
import { TestimonialSection } from '@/components/testimonialSection';

const FreeSpecialtyCourseOfferPage: PageComponent = () => (
  <>
    <DeadlineFunnelScript />
    <section style={{ paddingBottom: 0 }}>
      <div className="container">
        <div className="row justify-content-center mb-s">
          <div className="col-12 col-lg-7 col-xl-6 col-xxl-5 text-center">
            <h1 className="mb-4">Online Event Planning Courses</h1>
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
    <section>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-9 text-md-center">
            <h2 className="mb-3">Get Your Second Course FREE!</h2>
            <p>Enroll in a foundation course and receive any additional course for free.</p>
            <p>Foundation courses prepare you to work in the event planning industry. Advanced and specialty courses help enhance your career and grow your business. At QC, your professional development matters!</p>
            <p className="mb-0">Check out popular professional development training paths most QC students and graduates follow. Find the training plan that best suits your career goals!</p>
          </div>
        </div>
      </div>
    </section>
    <ILEASection />
    <TestimonialSection id="TE-0006" />
    <BottomSection>
      <h2 className="mb-4">Get Started Today</h2>
      <p className="lead mb-4">Enroll Online and Start on Your Path to Becoming a Certified Event Planner</p>
      <Link href="https://enroll.qceventplanning.com/free-specialty" className="btn btn-lg btn-primary">Enroll Now</Link>
    </BottomSection>
  </>
);

export default FreeSpecialtyCourseOfferPage;
