import type { StaticImageData } from 'next/image';
import type { FC } from 'react';

import { BackgroundImage } from '../backgroundImage';
import ILEABackgroundImage from './ilea-bg.jpg';
import ILEALogoImage from './ilea-logo.svg';
import styles from './index.module.scss';

interface Props {
  backgroundImage?: StaticImageData;
  leftAligned?: boolean;
}

export const ILEASection: FC<Props> = ({ backgroundImage, leftAligned }) => (
  <section className={styles.section}>
    <BackgroundImage src={backgroundImage ?? ILEABackgroundImage} />
    <div className="container">
      <div className={`row ${leftAligned ? '' : 'justify-content-center'}`}>
        <div className={leftAligned ? 'col-12 col-lg-6' : 'col-12 col-lg-9 col-xl-7 col-xxl-6 text-center'}>
          <ILEALogoImage className="mb-3" title="ILEA logo" />
          <h2 className="mb-3">ILEA Approved</h2>
          <p className="mb-0">Each of QC's professional event certifications meets the rigorous standards needed to be approved by the International Live Events Association.</p>
        </div>
      </div>
    </div>
  </section>
);
