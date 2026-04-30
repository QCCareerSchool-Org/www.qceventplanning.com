import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

import HeroImage from '../images/hero.png';
import styles from '../page.module.scss';

export const HeroSection: FC = () => (
  <section className={styles.hero}>
    <Image src={HeroImage} alt="" fill priority placeholder="blur" sizes="100vw" className={styles.heroImage} />
    <div className={styles.heroOverlay} />
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-8 col-xl-7">
          <p className="eyebrow mb-3">Career Guide</p>
          <h1 className="mb-4">How to Become an Event Planner</h1>
          <p className="lead mb-5">Launch your career with flexible online training, professional certification, and the practical standards you need to plan memorable events with confidence.</p>
          <div className="d-flex flex-column flex-sm-row gap-3">
            <Link href="/online-event-courses" className="btn btn-lg btn-primary">Explore Courses</Link>
            <Link href="#career-pathways" className="btn btn-lg btn-outline-light">See the Path</Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);
