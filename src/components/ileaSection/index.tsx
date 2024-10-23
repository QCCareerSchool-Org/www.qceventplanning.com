import type { FC } from 'react';

import { BackgroundImage } from '../backgroundImage';
import ILEABackgroundImage from './ilea-bg.jpg';
import ILEALogoImage from './ilea-logo.svg';
import styles from './index.module.scss';

export const ILEASection: FC = () => (
  <section className={styles.section}>
    <BackgroundImage src={ILEABackgroundImage} />
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-9 col-xl-7 col-xxl-6 text-center">
          <ILEALogoImage className="mb-3" alt="ILEA logo" />
          <h2 className="mb-3">ILEA Approved</h2>
          <p className="mb-0">Every professional event certification meets the rigorous standards and is approved by the International Live Events Association.</p>
        </div>
      </div>
    </div>
  </section>
);
