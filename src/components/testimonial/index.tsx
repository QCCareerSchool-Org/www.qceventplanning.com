import type { FC } from 'react';
import { memo, useMemo } from 'react';

import { ImageCircle } from '../imageCircle';
import { testimonials } from './data';
import styles from './index.module.css';
import { Star } from './star';
import { Title } from './title';
import { type CourseCode, getCourseName, getCourseUrl } from '@/domain/courseCode';

type Props = {
  id: string;
  courseCodes?: string[];
};

export const courseSort = (a: CourseCode, b: CourseCode): number => {
  if (a === b) {
    return 0;
  }
  if (a === 'ep') {
    return -1;
  }
  if (b === 'ep') {
    return 1;
  }
  return a.localeCompare(b);
};

export const Testimonial: FC<Props> = memo(({ id, courseCodes }) => {
  const testimonial = useMemo(() => {
    const found = testimonials[id];
    if (!found) {
      return;
    }
    return {
      ...found,
      courses: found.courses.sort((a, b) => {
        if (courseCodes?.includes(a) && courseCodes?.includes(b)) {
          return courseSort(a, b);
        }
        if (courseCodes?.includes(a)) {
          return -1;
        }
        if (courseCodes?.includes(b)) {
          return 1;
        }
        return courseSort(a, b);
      }),
    };
  }, [ id, courseCodes ]);

  if (!testimonial) {
    return;
  }

  return (
    <blockquote className={styles.testimonial} itemScope itemType="https://schema.org/Review">
      {testimonial.courses.length > 0
        ? (
          <span itemProp="itemReviewed" itemScope itemType="https://schema.org/Course">
            <meta itemProp="name" content={getCourseName(testimonial.courses[0])} />
            <meta itemProp="sameAs" content={getCourseUrl(testimonial.courses[0])} />
          </span>
        )
        : (
          <span itemProp="itemReviewed" itemScope itemType="https://schema.org/EducationalOrganization">
            <meta itemProp="name" content="QC Event School" />
            <meta itemProp="sameAs" content="https://www.qceventplanning.com" />
          </span>
        )}
      <span itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
        <meta itemProp="ratingValue" content={testimonial.stars.toString()} />
      </span>
      <div className={styles.stars}>{Array(5).fill(null).map((_, i) => <Star key={i} filled={i < testimonial.stars} />)}</div>
      <div>
        {testimonial.short.map((q, i, a) => {
          if (i < a.length - 1) {
            return <p key={i} className={styles.quotation}>&ldquo;{q}</p>;
          }
          return <p key={i} className={styles.quotation}>&ldquo;{q}&rdquo;</p>;
        })}
      </div>
      <footer className={styles.footer} itemProp="author" itemScope itemType="https://schema.org/Person">
        <div className={styles.imageWrapper}>
          <ImageCircle itemProp src={testimonial.image} alt={testimonial.name} imagePositionX={testimonial.imagePositionX} imagePositionY={testimonial.imagePositionY} />
        </div>
        <cite>
          <span className={styles.attribution} itemProp="name">{testimonial.name}</span>{testimonial.courses.length > 0 && <><br /><Title testimonial={testimonial} /></>}
        </cite>
      </footer>
    </blockquote>
  );
});

Testimonial.displayName = 'Testimonial';
