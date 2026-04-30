import type { FC } from 'react';

import { JourneyCard } from './journeyCard';
import { SectionHeader } from '@/components/sectionHeader';

export const JourneySection: FC = () => (
  <section id="career-pathways">
    <div className="container">
      <SectionHeader
        eyebrow="Your Journey to Success"
        title="4 Steps to Becoming an Event Planner"
        text="You do not need years of university to start your career. Follow a practical path that turns your passion into a professional brand."
      />
      <div className="row g-4">
        {journeySteps.map((step, index) => (
          <div className="col-12 col-md-6 col-lg-3 d-flex" key={step.title}>
            <JourneyCard number={index + 1} title={step.title} text={step.text} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

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
