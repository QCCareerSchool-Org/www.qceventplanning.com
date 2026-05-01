import Image from 'next/image';
import type { FC } from 'react';
import { BiCheckCircle } from 'react-icons/bi';

import DetailImage from './detail.png';

export const ResponsibilitiesSection: FC = () => (
  <section className="bg-light">
    <div className="container">
      <div className="row align-items-center g-s">
        <div className="col-12 col-lg-6">
          <h2 className="mb-4">What Does a Professional Event Planner Do?</h2>
          <p className="lead mb-5">As a planner, you are the creative strategist behind every celebration. You&rsquo;ll organize and manage events from concept to completion, coordinating the logistics, vendors, budget, and timeline needed to bring an event to life.</p>
          <div className="d-grid gap-4">
            <h3 className="h6 mb-0">Your Core Responsibilities &amp; Professional Impact</h3>
            {responsibilities.map(item => (
              <div className="d-flex gap-3" key={item.title}>
                <BiCheckCircle aria-hidden="true" className="text-primary fs-3 flex-shrink-0" />
                <div>
                  <h4 className="h6 mb-1">{item.title}</h4>
                  <p className="mb-0">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <Image src={DetailImage} alt="" placeholder="blur" sizes="(min-width: 992px) 50vw, 100vw" className="img-fluid rounded shadow" />
        </div>
      </div>
    </div>
  </section>
);

const responsibilities = [
  {
    title: 'Creative Concepting:',
    text: 'Designing the visual "story" and aesthetic flow of the event.',
  },
  {
    title: 'Expert Curation:',
    text: 'Scouting the perfect venues and hand-picking an elite team of partners.',
  },
  {
    title: 'Strategic Budgeting:',
    text: 'Making every dollar work harder to deliver high-end results without the stress.',
  },
  {
    title: 'Seamless Choreography:',
    text: 'Developing a precise timeline so the event feels effortless for the host.',
  },
  {
    title: 'On-Site Leadership:',
    text: 'Serving as the calm, confident director on event day—solving challenges before anyone else notices.',
  },
];
