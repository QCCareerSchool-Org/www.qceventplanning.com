import Image from 'next/image';
import type { FC } from 'react';

import { Animation } from './animation';
import BackgroundImage from './background.jpg';
import styles from './index.module.scss';
import IEWPCertification from '@/components/certifications/iewp.svg';

export const CertificationSection: FC = () => (
  <section className={`bg-dark text-white ${styles.certificationSection}`}>
    <Image src={BackgroundImage} alt="" fill placeholder="blur" style={{ objectFit: 'cover' }} />
    <div className="container">
      <div className="row justify-content-center g-s">
        <div className="col-6 col-sm-5 col-md-4 col-xxl-3">
          <Animation><IEWPCertification /></Animation>
        </div>
        <div className="col-12 col-md-8 col-xxl-9">
          <h2 className="h3">Your Event &amp; Wedding Planning Certification</h2>
          <p>Once you've completed your course online, you'll receive your certification and professional designation. Use these to market yourself as a certified event and wedding planner.</p>
          <p>This certification demonstrates that you have successfully completed professional event and wedding planner training and that you possess all the skills and knowledge required to plan, design, and execute flawless private and corporate events.</p>
          <h3 className="h5">Your Certification Has Many Benefits</h3>
          Start your own event and wedding planning business
          Provide coordination & vendor outreach services to clients
          Work for an existing event or wedding planning company
          Work for a corporation planning meetings and external events
          Plan events for venues, hotels, restaurants, and more!
        </div>
      </div>
    </div>
  </section>
);
