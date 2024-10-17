'use client';

import type { FC } from 'react';
import { useRef } from 'react';
import { useCountUp } from 'react-use-count-up';

import CounterBackgroundImage from './counter-bg.jpg';
import styles from './statsSection.module.scss';
import { BackgroundImage } from '@/components/backgroundImage';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const duration = 2_000; // 2 seconds

export const StatsSection: FC = () => {
  const studentsRef = useRef<HTMLDivElement>(null);
  const yearsRef = useRef<HTMLDivElement>(null);
  const expertsRef = useRef<HTMLDivElement>(null);

  const studentsStart = useIntersectionObserver(studentsRef);
  const yearsStart = useIntersectionObserver(yearsRef);
  const expertsStart = useIntersectionObserver(expertsRef);

  const students = useCountUp({ start: 0, end: 30, duration, started: studentsStart, easingFunction: 'easeOutCubic' });
  const years = useCountUp({ start: 0, end: 40, duration, started: yearsStart, easingFunction: 'easeOutCubic' });
  const experts = useCountUp({ start: 0, end: 15, duration, started: expertsStart, easingFunction: 'easeOutCubic' });

  return (
    <section className={`${styles.section} text-white`}>
      <BackgroundImage src={CounterBackgroundImage} />
      <div className="container">
        <div className="row text-center">
          <div ref={studentsRef} className="col-12 col-lg-4 mb-s mb-lg-0">
            <div className={styles.count}>{students}K</div>
            <h3 className="h6">Students &amp; Graduates</h3>
            <small className={styles.description}>Inspiring the Next Generation of Professionals</small>
          </div>
          <div ref={yearsRef} className="col-12 col-lg-4 mb-s mb-lg-0">
            <div className={styles.count}>{years}</div>
            <h3 className="h6">Years in Business</h3>
            <small className={styles.description}>Pioneering Education Since 1984</small>
          </div>
          <div ref={expertsRef} className="col-12 col-lg-4">
            <div className={styles.count}>{experts}</div>
            <h3 className="h6">Industry Experts</h3>
            <small className={styles.description}>Providing Insights for Real-World Success</small>
          </div>
        </div>
      </div>
    </section>
  );
};
