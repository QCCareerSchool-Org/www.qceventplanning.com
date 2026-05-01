import type { FC, ReactNode } from 'react';
import type { IconType } from 'react-icons';
import { BiBriefcase, BiParty, BiWine } from 'react-icons/bi';

import { SectionHeader } from '@/components/sectionHeader';

interface Specialization {
  icon: IconType;
  title: string;
  text: ReactNode;
}

export const SpecializationsSection: FC = () => (
  <section className="bg-light">
    <div className="container">
      <SectionHeader
        eyebrow="Expand Your Skills"
        title="Event Planning Specialization & Income Potential"
        text="The most successful planners master advanced specializations to build a signature brand and maximize earning potential."
      />
      <div className="row g-4">
        {specializations.map(item => (
          <div className="col-12 col-md-6 col-lg-4 d-flex" key={item.title}>
            <div className="card h-100 shadow">
              <div className="card-body">
                <item.icon aria-hidden="true" className="text-primary display-6 mb-4" />
                <h3 className="h5 mb-3">{item.title}</h3>
                <p className="mb-0">{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const specializations: Specialization[] = [
  {
    icon: BiBriefcase,
    title: 'Corporate & Business ($62,000 – $110,000+):',
    text: 'Partner with brands for high-impact launches and conferences. Focus on brand storytelling and professional results.',
  },
  {
    icon: BiWine,
    title: 'Weddings & Social ($53,000 – $95,000+):',
    text: 'Blend unrivaled design creativity with personal service to bring celebrations to life.',
  },
  {
    icon: BiParty,
    title: 'Public & Large-Scale ($57,000 – $105,000+):',
    text: 'Lead the crowd at festivals and concerts. Master complex logistics, permits, and safety planning.',
  },
];
