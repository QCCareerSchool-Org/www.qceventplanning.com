import type { FC, ReactNode } from 'react';
import type { IconType } from 'react-icons';
import { BiAward, BiGlobe, BiRocket, BiSupport } from 'react-icons/bi';

import { IconBadge } from './iconBadge';

interface Pillar {
  icon: IconType;
  title: string;
  text: ReactNode;
}

const whyQCPillars: Pillar[] = [
  {
    icon: BiSupport,
    title: 'Personalized Mentorship',
    text: 'Every assignment is reviewed by a professional planner who provides targeted feedback.',
  },
  {
    icon: BiRocket,
    title: 'A Professional Launchpad',
    text: 'Graduate with templates, business guidance, and planning tools you can use with clients.',
  },
  {
    icon: BiAward,
    title: 'Specialization Mastery',
    text: 'Add skills in weddings, corporate events, luxury celebrations, floral design, decor, and more.',
  },
  {
    icon: BiGlobe,
    title: 'A Global Network',
    text: 'Connect with fellow planners and stay part of the QC community after graduation.',
  },
];

export const WhyQCSection: FC = () => (
  <section>
    <div className="container">
      <div className="row align-items-center g-s">
        <div className="col-12 col-lg-5">
          <p className="eyebrow mb-3">The QC Advantage</p>
          <h2 className="mb-4">Why Aspiring Professionals Choose QC</h2>
          <p className="lead mb-0">QC does more than explain event planning theory. Our online courses are designed to help you build professional judgment, business confidence, and the practical skills to serve real clients.</p>
        </div>
        <div className="col-12 col-lg-7">
          <div className="row g-4">
            {whyQCPillars.map(item => (
              <div className="col-12 col-md-6 d-flex" key={item.title}>
                <div className="card h-100">
                  <div className="card-body">
                    <IconBadge icon={item.icon} />
                    <h3 className="h5 mb-3">{item.title}</h3>
                    <p className="mb-0">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
