import type { FC } from 'react';

import styles from './coreValuesSection.module.scss';
import AccessibilityIcon from './icons/door.svg';
import HeadphoneIcon from './icons/headphones.svg';
import LightbulbIcon from './icons/lightbulb.svg';
import QualityIcon from './icons/q-logo.svg';

const iconHeight = 40;

type Props = {
  className?: string;
};

export const CoreValuesSection: FC<Props> = ({ className }) => (
  <section className={className}>
    <div className="container">
      <h2 className="text-center mb-5">QC's Core Values</h2>
      <div className="row justify-content-center g-5">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-3">
          <QualityIcon height={iconHeight} className={`${styles.icon} mb-3`} />
          <p className={styles.heading}><strong>Quality:</strong> You'll see QC's commitment to quality reflected in every aspect of your event planning courses.</p>
          <ul className={`${styles.list} mb-0 small`}>
            <li>Expert-reviewed course lessons</li>
            <li>Custom-designed Online Student Center</li>
            <li>Industry-focused webinars</li>
          </ul>
        </div>
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-3">
          <HeadphoneIcon height={iconHeight} className={`${styles.icon} mb-3`} />
          <p className={styles.heading}><strong>Support:</strong> QC's dedicated advisors offer you unmatched guidance and support.</p>
          <ul className={`${styles.list} mb-0 small`}>
            <li>Assignment support 7 days a week</li>
            <li>Feedback and guidance from industry experts</li>
            <li>A vibrant virtual community of event and wedding planning students and professionals</li>
          </ul>
        </div>
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-3">
          <LightbulbIcon height={iconHeight} className={`${styles.icon} mb-3`} />
          <p className={styles.heading}><strong>Innovation:</strong> QC Event School is continuously working to improve your online learning experience.</p>
          <ul className={`${styles.list} mb-0 small`}>
            <li>Interactive digital lessons</li>
            <li>Engaging instructional videos</li>
            <li>Real-world case studies</li>
          </ul>
        </div>
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-3">
          <AccessibilityIcon height={iconHeight} className={`${styles.icon} mb-3`} />
          <p className={styles.heading}><strong>Accessibility:</strong> QC ensures access to high-quality education and the chance to pursue dreams.</p>
          <ul className={`${styles.list} mb-0 small`}>
            <li>Affordable tuition and customized payment plans</li>
            <li>Flexible learning schedule</li>
            <li>Convenient, easy-to-access online courses</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);
