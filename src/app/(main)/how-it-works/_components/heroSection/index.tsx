import Link from 'next/link';
import type { FC } from 'react';

import styles from './index.module.scss';
import HeroImage from '../../images/hero.png';
import { BackgroundImage } from '@/components/backgroundImage';
import { Overlay } from '@/components/overlay';

export const HeroSection: FC = () => (
  <section className={`${styles.hero} bg-dark text-white`}>
    <BackgroundImage src={HeroImage} objectPosition="62% center" mobile={{ src: HeroImage, breakpoint: 'md', objectPosition: '58% center' }} priority />
    <Overlay backgroundColor="rgba(1, 0, 37, 0.25)" className={styles.overlay} />
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-8 col-xl-7">
          <p className="eyebrow mb-3">Career Guide</p>
          <h1 className="mb-4">How to Become an Event Planner</h1>
          <p className="lead text-shadow mb-5">Launch your career with flexible online training, professional certification, and the practical standards you need to plan memorable events with confidence.</p>
          <div className="d-flex flex-column flex-sm-row gap-3">
            <Link href="/online-event-courses" className="btn btn-lg btn-primary">Explore Courses</Link>
            <Link href="#career-pathways" className="btn btn-lg btn-outline-light">See the Path</Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);
