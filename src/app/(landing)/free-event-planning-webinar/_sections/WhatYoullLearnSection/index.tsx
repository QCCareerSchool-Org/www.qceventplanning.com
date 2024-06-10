import Image from 'next/image';
import type { FC } from 'react';

import styles from './index.module.scss';
import BackgroundDeskopImage from './what-youll-learn-5.jpg';
import BackgroundMobileImage from './what-youll-learn-med-2.jpg';

export const WhatYoullLearnSection: FC = () => (
  <section className={styles.section}>
    <Image src={BackgroundDeskopImage} className="d-none d-lg-block" alt="" fill placeholder="blur" style={{ objectFit: 'cover', objectPosition: '50% 50%' }} />
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-5 col-xxl-5">
          <h2 className="h3 mb-3">Here's What You'll Learn in This FREE Career Webinar</h2>
          <ul className="mb-0">
            <li>Networking tips and how to gain real-world experience</li>
            <li>How to thrive in a competitive landscape</li>
            <li>Pricing strategies for your event services</li>
            <li>How to build lasting client relationships</li>
          </ul>
          <div className="text-center">
            <Image src={BackgroundMobileImage} className="mt-3 d-lg-none" alt="" placeholder="blur" style={{ width: '75%', height: 'auto' }} />
          </div>
        </div>
      </div>
    </div>
  </section>
);
