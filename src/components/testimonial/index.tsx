import Image from 'next/image';
import type { FC } from 'react';
import { memo } from 'react';

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
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            sizes="112px"
            objectFit="cover"
            className={styles.image}
            style={{ objectPosition: `${typeof testimonial.imagePositionX === 'undefined' ? '50%' : `${testimonial.imagePositionX}%`} ${typeof testimonial.imagePositionY === 'undefined' ? '50%' : `${testimonial.imagePositionY}%`}` }}
          />
        </div>
        <div>
          <span className={styles.attribution}>{testimonial.name}</span>{testimonial.title && <><br /><span className={styles.title}>{testimonial.title}</span></>}
        </div>
      </div>
    </div>
  );
});

Testimonial.displayName = 'Testimonial';
