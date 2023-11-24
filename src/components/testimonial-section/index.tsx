import type { FC } from 'react';
import { ImageCircle } from '../imageCircle';
import { testimonials } from '../testimonial/data';

import styles from './index.module.css';

type Props = {
  id: string;
};

export const TestimonialSection: FC<Props> = ({ id }) => {
  const testimonial = testimonials[id];

  return (
    <section>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-9 col-xl-8 col-xxl-6">
            <blockquote>
              <div className={styles.text}>
                {testimonial.long.map((q, i, a) => {
                  if (i < a.length - 1) {
                    return <p key={i} className={styles.quotation}>&ldquo;{q}</p>;
                  }
                  return <p key={i} className={styles.quotation}>&ldquo;{q}&rdquo;</p>;
                })}
              </div>
              <footer className={styles.footer}>
                <ImageCircle src={testimonial.image} alt={testimonial.name} imagePositionX={testimonial.imagePositionX} imagePositionY={testimonial.imagePositionY} />
                <cite className={styles.name}>{testimonial.name}</cite>
                <div className={styles.title}>{testimonial.title}</div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};
