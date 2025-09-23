import type { FC, PropsWithChildren } from 'react';

import DWImage from './dw-hero.jpg';
import EDImage from './ed-hero.jpg';
import EPImage from './ep-hero.jpg';
import LWImage from './lw-hero.jpg';
import { CourseCard } from '@/components/courseCard';
import { CourseCardCertifcation } from '@/components/courseCardCertification';

const LargeColumn: FC<PropsWithChildren> = ({ children }) => <div className="col-12 col-sm-10 col-lg-6 d-flex">{children}</div>;

export const CourseCardsSection: FC = () => (
  <section>
    <div className="container">
      <div className="row justify-content-center g-s">
        <div className="col-12 col-md-8 text-center">
          <h2 className="text-center mb-4">Expand Your Skills and Save!</h2>
          <p className="lead mb-5">Enroll in Landscape Design and get each additional course of equal or lesser value for 50% off.</p>
        </div>
      </div>
      <div className="row justify-content-center g-4">
        <LargeColumn>
          <CourseCard
            type="foundation"
            name="Event & Wedding Planning"
            description="Gain the skills and confidence to plan seamless, unforgettable events and weddings from start to finish."
            href="/online-event-courses/event-and-wedding-planning"
            backgroundSrc={EPImage}
            certification={<CourseCardCertifcation courseCode="ep" />}
            message="Most Popular"
          />
        </LargeColumn>
        <LargeColumn>
          <CourseCard
            type="foundation"
            name="Event Decor"
            description="Elevate events by designing the perfect mood and aesthetic with expert use of color, lighting, florals and decor."
            href="/online-event-courses/event-decor"
            backgroundSrc={EDImage}
            certification={<CourseCardCertifcation courseCode="ed" />}
          />
        </LargeColumn>
        <LargeColumn>
          <CourseCard
            type="specialty"
            name={<>Luxury Wedding<span className="d-lg-none d-xl-inline"> &amp; Event</span> Planning</>}
            description="Step into the world of high-end weddings and learn to manage big budgets, work with elite vendors, and deliver show-stopping celebrations."
            href="/online-event-courses/luxury-wedding-and-event-planning"
            backgroundSrc={LWImage}
            certification={<CourseCardCertifcation courseCode="lw" />}
          />
        </LargeColumn>
        <LargeColumn>
          <CourseCard
            type="specialty"
            name="Destination Wedding Planning"
            description="Build expertise in planning dream weddings abroad, from coordinating travel logistics to collaborating with niche local vendors."
            href="/online-event-courses/destination-wedding-planning"
            backgroundSrc={DWImage}
            certification={<CourseCardCertifcation courseCode="dw" />}
          />
        </LargeColumn>
      </div>
    </div>
  </section>
);
