import type { FC, ReactNode } from 'react';
import type { IconType } from 'react-icons';
import { BiGlobe, BiMedal, BiMessageSquareEdit, BiRocket } from 'react-icons/bi';

import { Pillar } from './pillar';

interface PillarItem {
  icon: IconType;
  title: string;
  text: ReactNode;
}

export const WhyQCSection: FC = () => (
  <section>
    <div className="container">
      <div className="row align-items-center g-s">
        <div className="col-12 col-lg-5">
          <h2 className="mb-4">Why Aspiring Professionals Choose QC</h2>
          <p className="lead mb-0">We don&rsquo;t just teach event planning; we launch careers. Our pillars are designed to give you a competitive edge:</p>
        </div>
        <div className="col-12 col-lg-7">
          <div className="row g-4">
            {whyQCPillars.map(item => (
              <div className="col-12 col-md-6 d-flex" key={item.title}>
                <Pillar icon={item.icon} title={item.title} text={item.text} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const whyQCPillars: PillarItem[] = [
  {
    icon: BiMessageSquareEdit,
    title: 'Personalized 1-on-1 Mentorship:',
    text: 'You are never alone. Every assignment is reviewed by a professional planner who provides tailored feedback.',
  },
  {
    icon: BiRocket,
    title: 'Your Professional Launchpad:',
    text: 'Graduate with the industry-standard templates, contracts, and pricing strategies you need to book clients immediately.',
  },
  {
    icon: BiMedal,
    title: 'Specialization Mastery:',
    text: 'Master niche services in Weddings, Corporate Events, or Luxury Celebrations to command higher professional fees.',
  },
  {
    icon: BiGlobe,
    title: 'A Global Network:',
    text: 'Join a community of planning professionals and stay connected long after you graduate.',
  },
];
