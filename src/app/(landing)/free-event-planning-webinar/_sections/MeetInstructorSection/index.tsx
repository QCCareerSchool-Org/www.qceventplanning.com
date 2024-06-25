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
          <p className="mb-0">Join our webinar and gain exclusive insights, networking hacks, and practical advice from Lisa Forbes. With over 15 years of experience curating unforgettable moments, Lisa brings a wealth of expertise and entrepreneurial savvy. Her grace under pressure and genuine warmth will inspire and empower you in your event planning journey, setting you apart in today's thriving event-planning industry.</p>
        </div>
      </div>
    </div>
    <Image src={BackgroundMobileImage} className="d-lg-none" style={{ width: '100%', height: 'auto' }} alt="" />
  </section>
);
