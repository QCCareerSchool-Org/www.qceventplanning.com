import type { ReactNode } from 'react';
import type { FC } from 'react';
import type { IconType } from 'react-icons';
import { BiCertification, BiLineChart, BiStar, BiWallet } from 'react-icons/bi';

import { IconBadge } from './iconBadge';
import { SectionHeader } from './sectionHeader';

interface CareerStat {
  icon: IconType;
  title: string;
  text: ReactNode;
}

const careerStats: CareerStat[] = [
  {
    icon: BiCertification,
    title: 'Entry Requirements',
    text: 'Professional certification, practical training, and a polished portfolio help establish client trust.',
  },
  {
    icon: BiLineChart,
    title: 'Earning Potential',
    text: 'Specialized planners can grow their income as their expertise, niche, and client list expand.',
  },
  {
    icon: BiStar,
    title: 'Top Skills',
    text: 'Budgeting, vendor negotiation, logistics, design thinking, and calm creative problem solving.',
  },
  {
    icon: BiWallet,
    title: 'Fastest Path',
    text: 'Online certification lets you learn career-ready skills without pausing the rest of your life.',
  },
];

export const CareerStatsSection: FC = () => (
  <section>
    <div className="container">
      <SectionHeader title="Your Career at a Glance" />
      <div className="row g-4">
        {careerStats.map(item => (
          <div className="col-12 col-md-6 col-xl-3 d-flex" key={item.title}>
            <div className="card h-100">
              <div className="card-body">
                <IconBadge icon={item.icon} />
                <h2 className="h5 mb-3">{item.title}</h2>
                <p className="mb-0">{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
