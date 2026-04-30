import type { FC } from 'react';

import styles from '../page.module.scss';

const trustStats = [
  {
    value: '30K',
    label: 'Students and Graduates',
    text: 'Inspiring the next generation of event professionals',
  },
  {
    value: '40',
    label: 'Years in Business',
    text: 'Pioneering distance education since 1984',
  },
  {
    value: '15',
    label: 'Industry Experts',
    text: 'Sharing real-world insight and practical feedback',
  },
];

export const TrustSection: FC = () => (
  <section className={styles.trustSection}>
    <div className="container">
      <div className="row g-4">
        {trustStats.map(stat => (
          <div className="col-12 col-md-4 text-center" key={stat.label}>
            <div className={styles.trustNumber}>{stat.value}<span>+</span></div>
            <h2 className="h5 mb-2">{stat.label}</h2>
            <p className="mb-0">{stat.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
