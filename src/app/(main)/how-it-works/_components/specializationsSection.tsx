import type { FC, ReactNode } from 'react';
import type { IconType } from 'react-icons';
import { FaBriefcase, FaTicketAlt, FaWineGlassAlt } from 'react-icons/fa';

import { IconBadge } from './iconBadge';
import { SectionHeader } from './sectionHeader';
import styles from '../page.module.scss';

interface Specialization {
  icon: IconType;
  title: string;
  text: ReactNode;
}

const specializations: Specialization[] = [
  {
    icon: FaBriefcase,
    title: 'Corporate and Business',
    text: 'Plan brand launches, conferences, company celebrations, and high-impact professional events.',
  },
  {
    icon: FaWineGlassAlt,
    title: 'Weddings and Social',
    text: 'Blend creative design, timeline management, and thoughtful client service for personal celebrations.',
  },
  {
    icon: FaTicketAlt,
    title: 'Public and Large-Scale',
    text: 'Coordinate festivals, public gatherings, and live events with complex logistics and vendor teams.',
  },
];

export const SpecializationsSection: FC = () => (
  <section className="bg-light">
    <div className="container">
      <SectionHeader
        eyebrow="Expand Your Skills"
        title="Event Planning Specializations"
        text="The most successful planners build signature services by developing advanced skills in the areas their clients value most."
      />
      <div className="row g-4">
        {specializations.map(item => (
          <div className="col-12 col-md-6 col-lg-4 d-flex" key={item.title}>
            <div className={styles.specializationCard}>
              <IconBadge icon={item.icon} />
              <h3 className="h5 mb-3">{item.title}</h3>
              <p className="mb-0">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
