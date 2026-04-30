import Image from 'next/image';
import type { FC } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

import DetailImage from '../images/detail.png';
import styles from '../page.module.scss';

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

export const ResponsibilitiesSection: FC = () => (
  <section className="bg-light">
    <div className="container">
      <div className="row align-items-center g-s">
        <div className="col-12 col-lg-6">
          <h2 className="mb-4">What Does a Professional Event Planner Do?</h2>
          <p className="lead mb-5">As a planner, you are the creative strategist behind each celebration. You coordinate logistics, vendors, budgets, timelines, and the details that bring an event to life.</p>
          <div className={styles.featureList}>
            <h3 className="h6 text-uppercase mb-0">Core responsibilities and professional impact</h3>
            {responsibilities.map(item => (
              <div className={styles.featureItem} key={item.title}>
                <FaCheckCircle aria-hidden="true" className={styles.checkIcon} />
                <div>
                  <h4 className="h6 mb-1">{item.title}</h4>
                  <p className="mb-0">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className={styles.imageFrame}>
            <Image src={DetailImage} alt="" fill placeholder="blur" sizes="(min-width: 992px) 50vw, 100vw" className={styles.coverImage} />
          </div>
        </div>
      </div>
    </div>
  </section>
);
