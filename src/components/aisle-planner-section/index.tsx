import Image from 'next/image';
import type { FC } from 'react';

import AislePlannerBackgroundImage from './aisle-planner-background.jpg';
import AislePlannerLogoImage from './aisle-planner-logo.png';
import styles from './index.module.css';

export const AislePlannerSection: FC = () => (
  <section className="text-white">
    <Image src={AislePlannerBackgroundImage} fill placeholder="blur" alt="" sizes="100vw" style={{ objectFit: 'cover' }} />
    <div className={styles.overlay} />
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
          <h2><Image src={AislePlannerLogoImage} alt="Aisle Planner" className="img-fluid mb-4" /></h2>
          <p className="mb-0">As a QC Student, you'll have access to an amazing event planning software, Aisle Planner! This software allows you to manage all your events at the touch of a button, from creating a project timeline to planning seating for your event to keeping track of all your clients, and so much more! For a limited time, all QC students can get a 6-month subscription to Aisle Planner, absolutely free!</p>
        </div>
      </div>
    </div>
  </section>
);
