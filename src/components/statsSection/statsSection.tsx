import type { StaticImageData } from 'next/image';
import type { FC } from 'react';

import CounterBackgroundImage from './counter-bg.jpg';
import { StatCounter } from './statCounter';
import styles from './statsSection.module.scss';
import { BackgroundImage } from '@/components/backgroundImage';

interface Props {
  heading?: string;
  body?: string;
  background?: StaticImageData;
}

export const StatsSection: FC<Props> = ({ heading, body, background }) => (
  <section className={`${styles.section} text-white`}>
    <BackgroundImage src={background ?? CounterBackgroundImage} />
    <div className="container">
      {heading && (
        <div className="row justify-content-center text-center mb-4">
          <div className="col-12 col-lg-8">
            <h2 className="h3 mb-0">{heading}</h2>
          </div>
        </div>
      )}
      <div className="row text-center">
        {stats.map((stat, i) => (
          <div key={stat.title} className={i < stats.length - 1 ? 'col-12 col-lg-4 mb-s mb-lg-0' : 'col-12 col-lg-4'}>
            <StatCounter end={stat.end} suffix={stat.suffix} />
            <h3 className="h6">{stat.title}</h3>
            <small className={styles.description}>{stat.description}</small>
          </div>
        ))}
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

interface Stat {
  end: number;
  suffix?: string;
  title: string;
  description: string;
}

const stats: Stat[] = [
  { end: 30, suffix: 'K', title: 'Students & Graduates', description: 'Inspiring the Next Generation of Professionals' },
  { end: 40, title: 'Years in Business', description: 'Pioneering Education Since 1984' },
  { end: 15, title: 'Industry Experts', description: 'Providing Insights for Real-World Success' },
];
