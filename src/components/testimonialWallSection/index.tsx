import type { FC, ReactElement } from 'react';

import { Testimonial } from '@/components/testimonial';
import type { CourseCode } from '@/domain/courseCode';

type Props = {
  heading?: string | ReactElement;
  h?: 1 | 2 | 3 | 4 | 5 | 6;
  courseCodes?: CourseCode[];
  testimonialIds: string[];
  className?: string;
  hideHeading?: boolean;
};

export const TestimonialWallSection: FC<Props> = ({ heading, h, courseCodes, testimonialIds, className, hideHeading }) => (
  <section className={className}>
    <div className="container">
      {!hideHeading && (
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 col-xl-7 col-xxl-6 text-lg-center">
            {typeof heading === 'string'
              ? <h2 className={`mb-4 ${typeof h === 'undefined' ? '' : `h${h}`}`}>{heading}</h2>
              : typeof heading === 'undefined'
                ? <h2 className={`mb-4 ${typeof h === 'undefined' ? '' : `h${h}`}`}>What Our Students and Grads Are Saying</h2>
                : heading
            }
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
