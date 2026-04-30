import type { ReactNode } from 'react';
import type { FC } from 'react';
import type { IconType } from 'react-icons';
import { FaChartLine, FaGraduationCap, FaRegStar, FaWallet } from 'react-icons/fa';

import { IconBadge } from './iconBadge';
import { SectionHeader } from './sectionHeader';
import styles from '../page.module.scss';

interface CareerStat {
  icon: IconType;
  title: string;
  text: ReactNode;
}

const careerStats: CareerStat[] = [
  {
    icon: FaGraduationCap,
    title: 'Entry Requirements',
    text: 'Professional certification, practical training, and a polished portfolio help establish client trust.',
  },
  {
    icon: FaChartLine,
    title: 'Earning Potential',
    text: 'Specialized planners can grow their income as their expertise, niche, and client list expand.',
  },
  {
    icon: FaRegStar,
    title: 'Top Skills',
    text: 'Budgeting, vendor negotiation, logistics, design thinking, and calm creative problem solving.',
  },
  {
    icon: FaWallet,
    title: 'Fastest Path',
    text: 'Online certification lets you learn career-ready skills without pausing the rest of your life.',
  },
];

export const CareerStatsSection: FC = () => (
  <section className={styles.statsSection}>
    <div className="container">
      <SectionHeader title="Your Career at a Glance" />
      <div className="row g-4">
        {careerStats.map(item => (
          <div className="col-12 col-md-6 col-xl-3 d-flex" key={item.title}>
            <div className={styles.statCard}>
              <IconBadge icon={item.icon} />
              <h2 className="h5 mb-3">{item.title}</h2>
              <p className="mb-0">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
