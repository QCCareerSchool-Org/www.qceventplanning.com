import type { FC } from 'react';
import { memo } from 'react';

import styles from './testimonial.module.css';
import { testimonialData } from './testimonialData';

type Props = {
  id: string;
};

export const Testimonial: FC<Props> = memo(({ id }) => {
  return (
    <div className={styles.testimonial}>
      {testimonialData[id].quote.map((p, i, a) => {
        if (i < a.length - 1) {
          return <p key={i}>&ldquo;{p}</p>;
        }
        return <p key={i}>&ldquo;{p}&rdquo;</p>;
      })}
      <p className="mb-0">&mdash;{testimonialData[id].name}</p>
    </div>
  );
});

Testimonial.displayName = 'Testimonial';
