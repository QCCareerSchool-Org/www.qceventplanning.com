import type { FC, PropsWithChildren } from 'react';
import { useMemo } from 'react';

import { Testimonial } from '../testimonial';
import { TestimonialCarouselClient } from './client';
import type { TestimonialId } from '../testimonial/data';
import { testimonials } from '../testimonial/data';
import type { CourseCode } from '@/domain/courseCode';

interface Props {
  testimonialIds?: TestimonialId[];
  coursePriority?: CourseCode;
  exclusions?: TestimonialId[];
}

export const TestimonialCarousel: FC<PropsWithChildren<Props>> = ({ testimonialIds, coursePriority, exclusions, children }) => {
  const usedTestimonials = useMemo(() => {
    const sort = coursePriority
      ? (a: TestimonialId, b: TestimonialId) => {
        const priorityA = (testimonials[a].courses as CourseCode[]).includes(coursePriority);
        const priorityB = (testimonials[b].courses as CourseCode[]).includes(coursePriority);
        if (priorityA === priorityB) {
          return 0;
        }
        if (priorityA) {
          return -1;
        }
        return 1;
      }
      : undefined;

    return [ ...(testimonialIds ?? Object.keys(testimonials) as TestimonialId[]) ]
      .filter(t => !exclusions?.includes(t))
      .sort(sort);
  }, [ testimonialIds, exclusions, coursePriority ]);

  return (
    <div style={{ minHeight: 360 }}>
      <TestimonialCarouselClient>
        {usedTestimonials.map(t => (
          <div key={t} className="mx-3 mb-md-5">
            <Testimonial id={t} small />
          </div>
        ))}
        {children}
      </TestimonialCarouselClient>
    </div>
  );
};
