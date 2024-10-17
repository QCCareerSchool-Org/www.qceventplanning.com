import type { FC } from 'react';

import { ImageCircle } from '../imageCircle';
import { Star } from '../testimonial/star';
import styles from './googleReview.module.scss';
import { InitialCircle } from './initialCircle';
import type { ReviewData } from './reviewData';

export const GoogleReview: FC<ReviewData> = ({ name, initial, imageSrc, backgroundColor, reviewText, size, rating }) => (
  <div className={styles.wrapper}>
    <div>
      <div className="mb-3">{Array(5).fill(null).map((_, i) => <Star key={i} filled={rating > i} />)}</div>
      <p className="fw-bold mb-4" style={size ? { fontSize: `${size}rem` } : undefined}>&quot;{reviewText}&quot;</p>
      <div className="d-flex justify-content-center mb-2">
        {imageSrc
          ? <ImageCircle src={imageSrc} alt={name} />
          : <InitialCircle initial={initial} backgroundColor={backgroundColor} />
        }
      </div>
      <p className="fw-bold">{name}</p>
    </div>
  </div>
);
