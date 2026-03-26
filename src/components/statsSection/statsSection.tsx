'use client';

import { useIntersectionObserverRatio } from '@davewelsh79/use-intersection-observer';
import type { FC } from 'react';
import { useCountUp } from 'react-use-count-up';

import CounterBackgroundImage from './counter-bg.jpg';
import styles from './statsSection.module.scss';
import { BackgroundImage } from '@/components/backgroundImage';

const duration = 2_000; // 2 seconds
const observerOptions: IntersectionObserverInit = { threshold: Array.from({ length: 11 }, (_, i) => Math.round(i * 0.1 * 10) / 10) }; // 0, 0.1, 0.2, ..., 1

interface Props {
  heading?: string;
  body?: string;
}

export const StatsSection: FC<Props> = ({ heading, body }) => {
  const [ studentsStart, studentsRatio, studentsRef ] = useIntersectionObserverRatio(true, observerOptions);
  const [ yearsStart, yearsRatio, yearsRef ] = useIntersectionObserverRatio(true, observerOptions);
  const [ expertsStart, expertsRatio, expertsRef ] = useIntersectionObserverRatio(true, observerOptions);

  const students = useCountUp({ start: 0, end: 30, duration, started: studentsStart, easingFunction: 'easeOutCubic' });
  const years = useCountUp({ start: 0, end: 40, duration, started: yearsStart, easingFunction: 'easeOutCubic' });
  const experts = useCountUp({ start: 0, end: 15, duration, started: expertsStart, easingFunction: 'easeOutCubic' });

  return (
    <section className={`${styles.section} text-white`}>
      <BackgroundImage src={CounterBackgroundImage} />
      <div className="container">
        {heading && (
          <div className="row justify-content-center text-center mb-4">
            <div className="col-12 col-lg-8">
              <h2 className="h3 mb-0">{heading}</h2>
            </div>
          </div>
        )}
        <div className="row text-center">
          <div className="col-12 col-lg-4 mb-s mb-lg-0">
            <div ref={studentsRef} className={styles.count} style={{ opacity: studentsRatio }}>{students}K</div>
            <h3 className="h6">Students &amp; Graduates</h3>
            <small className={styles.description}>Inspiring the Next Generation of Professionals</small>
          </div>
          <div className="col-12 col-lg-4 mb-s mb-lg-0">
            <div ref={yearsRef} className={styles.count} style={{ opacity: yearsRatio }}>{years}</div>
            <h3 className="h6">Years in Business</h3>
            <small className={styles.description}>Pioneering Education Since 1984</small>
          </div>
          <div className="col-12 col-lg-4">
            <div ref={expertsRef} className={styles.count} style={{ opacity: expertsRatio }}>{experts}</div>
            <h3 className="h6">Industry Experts</h3>
            <small className={styles.description}>Providing Insights for Real-World Success</small>
          </div>
        </div>
        {body && (
          <div className="row justify-content-center text-center mt-5">
            <div className="col-12 col-lg-8">
              <p className="lead mb-0">{body}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
