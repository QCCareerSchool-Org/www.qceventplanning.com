import type { FC } from 'react';

import { SectionHeader } from './sectionHeader';
import styles from '../page.module.scss';

const journeySteps = [
  {
    title: 'Obtain Professional Certification',
    text: 'Master event design, contracts, client management, and the professional standards clients expect from a planner.',
  },
  {
    title: 'Gain Real-World Skills',
    text: 'Complete practical assignments, receive tutor feedback, and learn how to make planning decisions with confidence.',
  },
  {
    title: 'Build a Digital Portfolio',
    text: 'Create a showcase of concepts, mood boards, timelines, and planning work that helps clients understand your style.',
  },
  {
    title: 'Establish Your Network',
    text: 'Connect with venues, vendors, peers, and professional associations so you can become a trusted local resource.',
  },
];

export const JourneySection: FC = () => (
  <section id="career-pathways" className={styles.journeySection}>
    <div className="container">
      <SectionHeader
        eyebrow="Your Journey to Success"
        title="4 Steps to Becoming an Event Planner"
        text="You do not need years of university to start your career. Follow a practical path that turns your passion into a professional brand."
      />
      <div className={styles.stepsGrid}>
        {journeySteps.map((step, index) => (
          <div className={styles.stepCard} key={step.title}>
            <div className={styles.stepNumber}>{index + 1}</div>
            <p className="eyebrow mb-2">Step {index + 1}</p>
            <h3 className="h5 mb-3">{step.title}</h3>
            <p className="mb-0">{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
