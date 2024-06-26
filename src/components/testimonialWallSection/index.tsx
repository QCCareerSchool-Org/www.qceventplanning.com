import type { FC } from 'react';

import { Testimonial } from '@/components/testimonial';
import type { CourseCode } from '@/domain/courseCode';

type Props = {
  h?: 1 | 2 | 3 | 4 | 5 | 6;
  courseCodes?: CourseCode[];
  testimonialIds: string[];
  className?: string;
  hideHeading?: boolean;
};

export const TestimonialWallSection: FC<Props> = ({ h, courseCodes, testimonialIds, className, hideHeading }) => (
  <section className={className}>
    <div className="container">
      {!hideHeading && (
        <div className="row justify-content-center">
          <div className="col-12 col-lg-9 col-xl-8 col-xxl-7 text-lg-center">
            <h2 className={`mb-4 ${typeof h === 'undefined' ? '' : `h${h}`}`}>Hear From Students and Grads</h2>
            <p className="lead mb-5">We've helped 8000+ students and graduates start their own successful event and wedding planning business!</p>
          </div>
        </div>
      )}
      <div className="row justify-content-center g-5">
        {testimonialIds.map(id => (
          <div key={id} className="col-12 col-sm-8 col-lg-4">
            <Testimonial id={id} courseCodes={courseCodes} />
          </div>
        ))}
      </div>
    </div>
  </section>
);
