import type { FC } from 'react';

import { CertCarousel } from './certCarousel';
import AwardIcon from './images/award.svg';
import TrophyIcon from './images/trophy.svg';
import styles from './index.module.css';

interface Props {
  className?: string;
}

export const SuccessStoriesSection: FC<Props> = ({ className }) => (
  <section className={className}>
    <div className="container">
      <div className="row g-5">
        <div className="col-12 col-lg-6 order-lg-1">
          <div className="eyebrow text-primary mb-3">Certifications That Prove Your Expertise</div>
          <h2 className="h3 mb-3">Build Trust with Professional Credentials</h2>
          <p>Prove your range of skills and expertise to prospective clients and your professional network.</p>
          <div className="d-flex flex-column gap-3">
            <div className={`${styles.box} ms-2`}>
              <div className="d-flex gap-3">
                <div className="flex-shrink pt-1"><TrophyIcon width="28" /></div>
                <div className="flex-grow">
                  <h3 className="h6 mb-0">Individual Course Certificates</h3>
                  <small>Demonstrate your mastery in 9 specific niche areas.</small>
                </div>
              </div>
            </div>
            <div className={`${styles.box} ${styles.inverse}`}>
              <div className="d-flex gap-3">
                <div className="flex-shrink text-primary pt-1"><AwardIcon width="32" /></div>
                <div className="flex-grow">
                  <h3 className="h6 mb-0">The Master Planner Certificate</h3>
                  <small>A prestigious capstone credential that signals you are a full-service expert.</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 order-lg-0">
          <CertCarousel />
        </div>
      </div>
    </div>
  </section>
);
