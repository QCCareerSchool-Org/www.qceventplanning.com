import type { FC } from 'react';

import EBImage from './accelerate-your-business/hero.jpg';
import CPImage from './corporate-event-planning/hero.jpg';
import DWImage from './destination-wedding-planning/hero.jpg';
import EPImage from './event-and-wedding-planning/hero.jpg';
import EDImage from './event-decor/hero.jpg';
import CEImage from './event-planning/hero.jpg';
import FLImage from './festivals-and-live-events/hero.jpg';
import FDImage from './floral-design/hero.jpg';
import LWImage from './luxury-wedding-and-event-planning/hero.jpg';
import PEImage from './promotional-event-planning/hero.jpg';
import WPImage from './wedding-planning/hero.jpg';
import { AAP } from '@/components/aap';
import { CourseCard } from '@/components/courseCard';
import { CourseCardCertifcation } from '@/components/courseCardCertification';

interface Props {
  className?: string;
  countryCode: string;
  provinceCode: string | null;
}

export const OnlineCourseSection: FC<Props> = ({ className, countryCode, provinceCode }) => (
  <div>
    <section id="courses" className={className}>
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-lg-7 col-xl-6 col-xxl-5 text-center">
            <h1 className="mb-4">Online Event Planning Courses</h1>
          </div>
          <div className="col-12 col-lg-11 col-xl-9 col-xxl-8 text-center">
            <p className="lead mb-0">QC offers courses for every stage of your career, from planning your very first event to growing an established business. Start with an ILEA-approved foundation course to develop essential skills, and advance your expertise with a specialty course.</p>
          </div>
        </div>
        <div className="row justify-content-center g-4">
          <div className="col-12 col-sm-10 col-lg-6 d-flex">
            <CourseCard
              type="foundation"
              name="Event & Wedding Planning"
              description={[ 'Learn to plan weddings and social events from the first consultation to day-of coordination, and graduate ready to start your own planning business or join an event company.', 'Best for: Beginners and planners who want to offer both weddings and events.' ]}
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
              description={[ 'Plan conferences, meetings, galas, and product launches that help businesses shine, and prepare to work with corporate clients or join an in-house events team.', 'Best for: Organized planners drawn to the business side of events.']}
              href="/online-event-courses/corporate-event-planning"
              backgroundSrc={CPImage}
              certification={<CourseCardCertifcation courseCode="cp" />}
            />
          </div>
          <div className="col-12 col-sm-10 col-lg-6 d-flex">
            <CourseCard
              type="foundation"
              name="Event Planning"
              description={[ 'Plan milestone parties, holiday celebrations, industry gatherings, and more for every kind of client, and build a business focused on social and community events.','Best for: Planners who want to focus on events other than weddings.']}
              href="/online-event-courses/event-planning"
              backgroundSrc={CEImage}
              certification={<CourseCardCertifcation courseCode="ce" />}
            />
          </div>
          <div className="col-12 col-sm-10 col-lg-6 d-flex">
            <CourseCard
              type="foundation"
              name="Floral Design"
              description={[ 'Launch your own business, work for an experienced floral designer, or incorporate your floral design skills into an existing career in event planning.', 'Best for: Creative beginners and event planners who want to offer florals.']}
              href="/online-event-courses/floral-design"
              backgroundSrc={FDImage}
              certification={<CourseCardCertifcation courseCode="fd" />}
            />
          </div>
          <div className="col-12 col-sm-10 col-lg-6 d-flex">
            <CourseCard
              type="foundation"
              name="Wedding Planning"
              description={[ 'Plan weddings tailored to each couple, from budgets and timelines to cultural traditions, and launch your career as a wedding planner.', 'Best for: Aspiring planners who want to specialize in weddings.'}]
              href="/online-event-courses/wedding-planning"
              backgroundSrc={WPImage}
              certification={<CourseCardCertifcation courseCode="wp" />}
            />
          </div>
          <div className="col-12 col-sm-10 col-lg-6 d-flex">
            <CourseCard
              type="foundation"
              name="Event Decor"
              description={[ 'Design the look and mood of an event, coordinating lighting, color, and decor around a theme, and offer decor services on their own or alongside planning.', 'Best for: Creative beginners and planners who want to style events.'}]
              href="/online-event-courses/event-decor"
              backgroundSrc={EDImage}
              certification={<CourseCardCertifcation courseCode="ed" />}
            />
          </div>
          <div className="col-12 col-sm-10 col-lg-6 d-flex">
            <CourseCard
              type="specialty"
              name={<>Luxury Wedding<span className="d-lg-none d-xl-inline"> &amp; Event</span> Planning</>}
              description=[{ 'Plan upscale weddings and events with substantial budgets, work with high-end vendors, and position your business to attract luxury clients.', 'Best for: Planners ready to take on higher-budget clients.']}
              href="/online-event-courses/luxury-wedding-and-event-planning"
              backgroundSrc={LWImage}
              certification={<CourseCardCertifcation courseCode="lw" />}
            />
          </div>
          <div className="col-12 col-sm-10 col-lg-6 d-flex">
            <CourseCard
              type="specialty"
              name="Destination Wedding Planning"
              description={[ 'Coordinate stunning weddings away from home, working with travel agents, translators, and local vendors, so couples can say "I do" anywhere in the world.', 'Best for: Wedding planners who want to add destination services.']}
              href="/online-event-courses/destination-wedding-planning"
              backgroundSrc={DWImage}
              certification={<CourseCardCertifcation courseCode="dw" />}
            />
          </div>
          <div className="col-12 col-sm-10 col-lg-6 d-flex">
            <CourseCard
              type="specialty"
              name="Promotional Event Planning"
              description={[ 'Plan pop-up shops, brand activations, and marketing events that get businesses noticed, building on your corporate event planning skills.', 'Best for: Corporate planners who want to add promotional events.']} 
              href="/online-event-courses/promotional-event-planning"
              backgroundSrc={PEImage}
              certification={<CourseCardCertifcation courseCode="pe" />}
            />
          </div>
          <div className="col-12 col-sm-10 col-lg-6 d-flex">
            <CourseCard
              type="specialty"
              name="Festivals and Live Events"
              description=[{ 'Plan festivals and entertainment events of every size, from live-event logistics to large-scale productions, using your corporate event planning experience.', 'Best for: Corporate planners ready to take on festivals and live entertainment.']}
              href="/online-event-courses/festivals-and-live-events"
              backgroundSrc={FLImage}
              certification={<CourseCardCertifcation courseCode="fl" />}
            />
          </div>
          <div className="col-12 col-sm-10 col-lg-6 d-flex">
            <CourseCard
              type="specialty"
              name="Accelerate Your Business"
              description={[ 'Start and grow your event planning business faster, with hands-on practice using the marketing tools that win new clients.', 'Best for: New planners getting a head start on business startup, and graduates and working planners ready to grow their businesses.']
              href="/online-event-courses/accelerate-your-business"
              backgroundSrc={EBImage}
              certification={<CourseCardCertifcation courseCode="eb" />}
            />
          </div>
        </div>
        <div className="mt-5">
          <AAP countryCode={countryCode} provinceCode={provinceCode} />
        </div>
      </div>
    </section>
  </div>
);
