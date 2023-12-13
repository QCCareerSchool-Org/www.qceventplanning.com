import type { FC } from 'react';

import styles from './index.module.scss';
import ShieldIcon from './shield.svg';

export const AboutSection: FC = () => (
  <section className={styles.aboutSection}>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10 col-xl-9 col-xxl-8 text-center">
          <ShieldIcon className="mb-4" />
          <div className={`${styles.gold} mb-4`}>Celebrating 40 Years</div>
          <h2 className="h3 mb-4">About QC Event School</h2>
          <p className="mb-0">QC Event School, part of QC Career School, offers online courses for creative professionals with 40 years of experience. Gain advanced training from home, preparing for a new career while maintaining your current income. Upon graduation, acquire the skills to swiftly establish a successful business or career. Benefit from 7-day support via email, phone, Live Chat, or social media, ensuring your educational needs are met throughout and after completing your online event and wedding planning course.</p>
        </div>
      </div>
    </div>
  </section>
);
