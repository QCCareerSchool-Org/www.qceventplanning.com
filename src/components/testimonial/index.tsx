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
    <blockquote className={styles.testimonial} itemScope itemType="https://schema.org/Quotation">
      <div className={styles.stars}>{Array(5).fill(null).map((_, i) => <Star key={i} filled={i < testimonial.stars} />)}</div>
      <div itemProp="text">
        {testimonial.quote.map((q, i, a) => {
          if (i < a.length - 1) {
            return <p key={i} className={styles.quotation}>&ldquo;{q}</p>;
          }
          return <p key={i} className={styles.quotation}>&ldquo;{q}&rdquo;</p>;
        })}
      </div>
      <footer className={styles.footer}>
        <div className={styles.imageWrapper}>
          <ImageCircle src={testimonial.image} alt={testimonial.name} imagePositionX={testimonial.imagePositionX} imagePositionY={testimonial.imagePositionY} />
        </div>
        <cite itemProp="creator" itemType="https://schema.org/Person">
          <span className={styles.attribution} itemProp="name">{testimonial.name}</span>{testimonial.title && <><br /><span className={styles.title}>{testimonial.title}</span></>}
        </cite>
      </footer>
    </blockquote>
  );
});

Testimonial.displayName = 'Testimonial';
