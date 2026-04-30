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
          <p className="lead mb-5">As a planner, you are the creative strategist behind each celebration. You coordinate logistics, vendors, budgets, timelines, and the details that bring an event to life.</p>
          <div className="d-grid gap-4">
            <h3 className="h6 text-uppercase mb-0">Core responsibilities and professional impact</h3>
            {responsibilities.map(item => (
              <div className="d-flex gap-3" key={item.title}>
                <BiCheckCircle aria-hidden="true" className="text-primary flex-shrink-0 mt-1" />
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
    title: 'Creative Concepting',
    text: 'Design the visual story, guest experience, and overall atmosphere for each event.',
  },
  {
    title: 'Expert Curation',
    text: 'Source venues, vendors, rentals, and partners that match the client brief and budget.',
  },
  {
    title: 'Strategic Budgeting',
    text: 'Track costs, compare options, and help clients make confident planning decisions.',
  },
  {
    title: 'Detailed Timelines',
    text: 'Build production schedules that keep vendors, clients, and event-day teams aligned.',
  },
  {
    title: 'On-Site Leadership',
    text: 'Guide the event day with steady communication and quick solutions when plans shift.',
  },
];
