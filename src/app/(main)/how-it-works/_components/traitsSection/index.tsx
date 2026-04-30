import Image from 'next/image';
import type { FC } from 'react';
import { BiCheckCircle } from 'react-icons/bi';

import DesignImage from './design.png';

export const TraitsSection: FC = () => (
  <section>
    <div className="container">
      <div className="row align-items-center g-s">
        <div className="col-12 col-lg-6">
          <h2 className="mb-4">Is Event Planning Right for You?</h2>
          <p className="lead mb-5">You do not need a specific background to succeed in this industry. If you recognize yourself in these traits, you already have the foundation of a great event planner.</p>
          <Image src={DesignImage} alt="" placeholder="blur" sizes="(min-width: 992px) 50vw, 100vw" className="img-fluid rounded shadow" />
        </div>
        <div className="col-12 col-lg-6">
          <div className="d-grid gap-4">
            {plannerTraits.map(trait => (
              <div className="d-flex gap-3" key={trait.title}>
                <BiCheckCircle aria-hidden="true" className="text-primary fs-3 flex-shrink-0" />
                <div>
                  <h3 className="h6 mb-1">{trait.title}</h3>
                  <p className="mb-0">{trait.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-light border-start border-primary border-4 rounded mt-5 p-4">
            <h3 className="h5 mb-2">Does this sound like you?</h3>
            <p className="mb-0">If you have the passion, QC has the professional roadmap to help you turn it into a career.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const plannerTraits = [
  {
    title: 'The Organized Dreamer',
    text: 'You love big ideas, and you also enjoy building the list that makes them real.',
  },
  {
    title: 'The Natural Connector',
    text: 'You enjoy working with people and building relationships with clients, venues, and vendors.',
  },
  {
    title: 'The Creative Problem-Solver',
    text: 'When plans change, you can think quickly and keep the experience moving forward.',
  },
  {
    title: 'The Detail Enthusiast',
    text: 'You notice lighting, timing, flow, and the small touches that create memorable events.',
  },
  {
    title: 'The Goal-Oriented Learner',
    text: 'You are ready to turn natural instincts into professional standards and a portfolio you can show proudly.',
  },
];
