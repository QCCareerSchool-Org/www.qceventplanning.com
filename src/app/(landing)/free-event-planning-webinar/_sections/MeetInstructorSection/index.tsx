import Image from 'next/image';
import type { FC } from 'react';

import styles from './index.module.scss';
import BackgroundMobileImage from './meet-lisa-bg-mobile.jpg';
import BackgroundDeskopImage from './meet-lisa-bg.jpg';

export const MeetInstructorSection: FC = () => (
  <section className={styles.section}>
    <Image src={BackgroundDeskopImage} className="d-none d-lg-block" alt="" fill placeholder="blur" style={{ objectFit: 'cover', objectPosition: '25% 50%' }} />
    <div className="container">
      <div className="row justify-content-end g-s">
        <div className="col-12 col-lg-6">
          <h2 className="h3 mb-3">Meet Lisa Forbes</h2>
          <h3 className="h6 mb-3">Owner of White Aspen Weddings and Lead Planner at Hitched Planning &amp; Design</h3>
          <p className="mb-0">With over 15 years of experience crafting unforgettable moments, Lisa brings a wealth of expertise and entrepreneurial savvy. Renowned for her grace under pressure and genuine warmth, Lisa's webinar propels you to kickstart and grow your own event planning business. Uncover insider tips, networking hacks, and real-world tips that will help you stand out in the booming event planning landscape.</p>
        </div>
      </div>
    </div>
    <Image src={BackgroundMobileImage} className="d-lg-none" style={{ width: '100%', height: 'auto' }} alt="" />
  </section>
);
