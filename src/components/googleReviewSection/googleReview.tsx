import type { FC } from 'react';

import { ImageCircle } from '../imageCircle';
import { Star } from '../testimonial/star';
import styles from './googleReview.module.scss';
import { InitialCircle } from './initialCircle';
import type { ReviewData } from './reviewData';
import { getCourseName, getCourseUrl } from '@/domain/courseCode';

export const GoogleReview: FC<ReviewData> = ({ name, initial, imageSrc, backgroundColor, reviewText, size, rating, courseCodes }) => (
  <div className={styles.wrapper} itemScope itemType="https://schema.org/Review">
    {courseCodes && courseCodes.length > 0
      ? (
        <span itemProp="itemReviewed" itemScope itemType="https://schema.org/Course">
          <meta itemProp="name" content={getCourseName(courseCodes[0])} />
          <meta itemProp="sameAs" content={getCourseUrl(courseCodes[0])} />
        </span>
      )
      : (
        <span itemProp="itemReviewed" itemScope itemType="https://schema.org/EducationalOrganization">
          <meta itemProp="name" content="QC Event School" />
          <meta itemProp="sameAs" content="https://www.qceventplanning.com" />
        </span>
      )}
    <span itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
      <meta itemProp="ratingValue" content={rating.toString()} />
      <meta itemProp="worstRating" content="0" />
      <meta itemProp="bestRating" content="5" />
    </span>
    <div>
      <div className="mb-3">{Array(5).fill(null).map((_, i) => <Star key={i} filled={rating > i} />)}</div>
      <p className="fw-bold mb-4" style={size ? { fontSize: `${size}rem` } : undefined}>&quot;{reviewText}&quot;</p>
      <div itemProp="author" itemScope itemType="https://schema.org/Person">
        <div className="d-flex justify-content-center mb-2">
          {imageSrc
            ? <ImageCircle itemProp src={imageSrc} alt={name} />
            : <InitialCircle initial={initial} backgroundColor={backgroundColor} />
          }
        </div>
        <p itemProp="name" className="fw-bold">{name}</p>
      </div>
    </div>
  </div>
);
