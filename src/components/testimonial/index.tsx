import Image from 'next/image';
import type { FC } from 'react';
import { memo } from 'react';

import { ImageCircle } from '../imageCircle';
import { testimonials } from './data';
import styles from './index.module.css';
import { Star } from './star';

type Props = {
  id: string;
};

export const Testimonial: FC<Props> = memo(({ id }) => {
  const testimonial = testimonials[id];
  return (
    <div className={styles.testimonial}>
      <div className={styles.stars}>{Array(5).fill(null).map((_, i) => <Star key={i} filled={i < testimonial.stars} />)}</div>
      {testimonial.quote.map((p, i, a) => {
        if (i < a.length - 1) {
          return <p key={i} className={styles.quotation}>&ldquo;{p}</p>;
        }
        return <p key={i} className={styles.quotation}>&ldquo;{p}&rdquo;</p>;
      })}
      <div className={styles.footer}>
        <div className={styles.imageWrapper}>
          <ImageCircle src={testimonial.image} alt={testimonial.name} imagePositionX={testimonial.imagePositionX} imagePositionY={testimonial.imagePositionY} />
        </div>
        <div>
          <span className={styles.attribution}>{testimonial.name}</span>{testimonial.title && <><br /><span className={styles.title}>{testimonial.title}</span></>}
        </div>
      </div>
    </div>
  );
});

Testimonial.displayName = 'Testimonial';
