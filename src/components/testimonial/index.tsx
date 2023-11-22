import Image from 'next/image';
import type { FC } from 'react';
import { memo } from 'react';

import { testimonials } from './data';
import styles from './index.module.css';

type Props = {
  id: string;
};

export const Testimonial: FC<Props> = memo(({ id }) => {
  const testimonial = testimonials[id];
  return (
    <div className={styles.testimonial}>
      {testimonial.quote.map((p, i, a) => {
        if (i < a.length - 1) {
          return <p key={i}>&ldquo;{p}</p>;
        }
        return <p key={i}>&ldquo;{p}&rdquo;</p>;
      })}
      <p className="mb-0">&mdash;{testimonial.name}</p>
      <div className={styles.imageWrapper}>
        <Image src={testimonial.image} alt={testimonial.name} fill objectFit="cover" className={styles.image} />
      </div>
    </div>
  );
});

Testimonial.displayName = 'Testimonial';
