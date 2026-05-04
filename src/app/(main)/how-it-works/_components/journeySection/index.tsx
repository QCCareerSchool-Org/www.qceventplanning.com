import type { FC } from 'react';

import { JourneyCard } from './journeyCard';
import { SectionHeader } from '@/components/sectionHeader';

export const JourneySection: FC = () => (
  <section id="career-pathways">
    <div className="container">
      <SectionHeader
        eyebrow="Your Journey to Success"
        title="4-Steps to Becoming an Event Planner"
        text="You don't need years of university to start your career. Follow this proven path to transform your passion into a professional brand."
      />
      <div className="row g-5 g-xl-4">
        {journeySteps.map((step, index) => (
          <div className="col-12 col-md-6 col-xl-3 d-flex" key={step.title}>
            <JourneyCard number={index + 1} title={step.title} text={step.text} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const journeySteps = [
  {
    title: 'Obtain Professional Certification:',
    text: 'Master industry-standard fundamentals and high-impact skills like event design, contracts, and client management. Focused certification programs provide the technical authority clients demand.',
  },
  {
    title: 'Gain Real-World Skills:',
    text: 'Build your "event intuition" through mentorship, practical assignments through your course, and assisting local planners.',
  },
  {
    title: 'Build a Digital Portfolio:',
    text: 'Curate a signature showcase of your event concepts and mood boards. A professional portfolio proves your vision to potential clients before they book their first consultation.',
  },
  {
    title: 'Establish Your Professional Network:',
    text: 'Connect with local venues and vendors. By building a trusted network, you become an invaluable resource for your clients.',
  },
];
