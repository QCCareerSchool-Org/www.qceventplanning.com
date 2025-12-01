import { Suspense } from 'react';
import type { FC } from 'react';

import { ImageCircle } from '../imageCircle';
import { Star } from '../testimonial/star';
import { TestimonialSchemaData } from '../testimonialJsonLD';
import styles from './googleReview.module.scss';
import { InitialCircle } from './initialCircle';
import type { ReviewData } from './reviewData';

type Props = {
  schemaCourseId?: string;
} & ReviewData;

export const GoogleReview: FC<Props> = ({ name, initial, imageSrc, backgroundColor, reviewText, size, rating, courseCodes, schemaCourseId }) => {
  const reviewCourseCode = courseCodes && courseCodes.length > 0 ? courseCodes[0] : undefined;
  return (
    <div className={styles.wrapper}>
      <Suspense><TestimonialSchemaData courseCode={reviewCourseCode} name={name} rating={rating} reviewText={reviewText} schemaCourseId={schemaCourseId} /></Suspense>
      <div>
        <div className="mb-3">{Array(5).fill(null).map((_, i) => <Star key={i} filled={rating > i} />)}</div>
        <p className="fw-bold mb-4" style={size ? { fontSize: `${size}rem` } : undefined}>&quot;{reviewText}&quot;</p>
        <div>
          <div className="d-flex justify-content-center mb-2">
            {imageSrc
              ? <ImageCircle itemProp src={imageSrc} alt={name} />
              : <InitialCircle initial={initial} backgroundColor={backgroundColor} />
            }
          </div>
          <p className="fw-bold">{name}</p>
        </div>
      </div>
    </div>
  );
};
