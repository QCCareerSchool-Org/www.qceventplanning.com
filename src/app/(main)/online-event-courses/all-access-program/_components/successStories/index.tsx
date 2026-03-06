import type { FC } from 'react';

import { CertCarousel } from './certCarousel';
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
          <div className={styles.box}><strong>Individual Course Certificates:</strong> Demonstrate your mastery in 9 specific niche areas.</div>
          <div className={styles.box}><strong>The Master Planner Certificate:</strong> A prestigious capstone credential that signals you are a full-service expert.</div>
        </div>
        <div className="col-12 col-lg-6 order-lg-0">
          <CertCarousel />
        </div>
      </div>
    </div>
  </section>
);
