import type { FC } from 'react';
import { memo } from 'react';

import type { TestimonialId } from './data';
import { testimonials } from './data';
import styles from './index.module.css';
import { Star } from './star';
import { Title } from './title';
import { ImageCircle } from '@/components/imageCircle';
import { CourseMicrodata } from '@/components/microdata/course';
import type { CourseCode } from '@/domain/courseCode';

interface Props {
  id: TestimonialId;
  courseCodes?: CourseCode[];
  showProvinceCode?: boolean;
  schemaCourseId?: string;
  small?: boolean;
}

export const Testimonial: FC<Props> = memo(({ id, courseCodes, showProvinceCode = false, schemaCourseId, small = false }) => {
  const testimonial = {
    ...testimonials[id],
    courses: courseCodes
      ? [ ...testimonials[id].courses ].sort(createSortFunction(courseCodes))
      : [ ...testimonials[id].courses ],
  };

  return (
    <blockquote className={styles.testimonial} itemScope itemType="https://schema.org/Review">
      {schemaCourseId
        ? (
          <meta itemProp="itemReviewed" itemScope itemID={schemaCourseId} />
        )
        : testimonial.courses.length > 0
          ? <CourseMicrodata itemProp="itemReviewed" courseCode={testimonial.courses[0]} />
          : (
            <span itemProp="itemReviewed" itemScope itemType="https://schema.org/EducationalOrganization" itemID="https://www.qcdesignschool.com/#school">
              <link itemProp="url" href="https://www.qcdesignschool.com" />
              <meta itemProp="name" content="QC Design School" />
            </span>
          )}
      <span itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
        <meta itemProp="ratingValue" content={testimonial.stars.toString()} />
        <meta itemProp="worstRating" content="0" />
        <meta itemProp="bestRating" content="5" />
      </span>
      <div className={styles.stars}>{Array(5).fill(null).map((_, i) => <Star key={i} filled={i < testimonial.stars} />)}</div>
      <div itemProp="reviewBody">
        {testimonial.short.map((q, i, a) => {
          return <p key={i} className={`${styles.quotation} ${small ? styles.small : ''}`}>&ldquo;{q}{i === a.length - 1 && <>&rdquo;</>}</p>;
        })}
      </div>
      <footer className={styles.footer} itemProp="author" itemScope itemType="https://schema.org/Person">
        <div className={styles.imageWrapper}>
          <ImageCircle itemProp src={testimonial.image} alt={testimonial.name} imagePositionX={testimonial.imagePositionX} imagePositionY={testimonial.imagePositionY} />
        </div>
        <cite>
          <span className={styles.attribution} itemProp="name">{testimonial.name}</span>{showProvinceCode && typeof testimonial.provinceCode !== 'undefined' && <>, {testimonial.provinceCode}</>}{testimonial.courses.length > 0 && <><br /><Title testimonial={testimonial} /></>}
        </cite>
      </footer>
    </blockquote>
  );
});

Testimonial.displayName = 'Testimonial';

const createSortFunction = (courseCodes: CourseCode[]) => (a: CourseCode, b: CourseCode): number => {
  if (!courseCodes.includes(a) && !courseCodes.includes(b)) {
    return a.localeCompare(b);
  }
  if (courseCodes.includes(a)) {
    return -1;
  }
  if (courseCodes.includes(b)) {
    return 1;
  }
  return a.localeCompare(b);
};
