import type { Metadata } from 'next';
import Link from 'next/link';

import { InfoSection } from './infoSection';
import styles from './page.module.scss';
import type { PageComponent } from '@/app/serverComponent';
import { BackgroundImage } from '@/components/backgroundImage';
import { GetStartedSection } from '@/components/getStartedSection';
import HeroImageDesktop from '@/components/homeHeroImage/hero-large.jpg';
import HeroImageMobile from '@/components/homeHeroImage/hero-small.jpg';
import { PerksSection } from '@/components/perksSection';
import { TestimonialWallSection } from '@/components/testimonialWallSection';

export const metadata: Metadata = {
  title: 'Your Event & Wedding Planning Career',
  alternates: {
    canonical: '/your-career',
  },
};

const testimonialIds = [ 'TE-0001', 'TE-0002', 'TE-0003', 'TE-0004', 'TE-0005', 'TE-0006' ];

const YourCareerPage: PageComponent = () => (
  <>
    <section className={styles.heroSection}>
      <BackgroundImage priority src={HeroImageDesktop} objectPosition="37.5% 25%" mobile={{ src: HeroImageMobile, breakpoint: 'lg', objectPosition: '50% 87.5%' }} />
      <div className="container text-white text-shadow">
        <div className="row">
          <div className="col-12 col-md-8 col-lg-6 col-xxl-5">
            <h1 className="mb-4">Your Event Planning Career</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-8 col-md-7 col-lg-6 col-xxl-5">
            <p className="lead mb-4"><strong>Start your career as an event planning professional!</strong> QC's comprehensive courses equip you with the essential skills and industry knowledge to excel in your chosen event planning niche. Each course is designed to help you confidently launch your dream career in the dynamic event industry.</p>
            <Link href="/online-event-courses" className="btn btn-dark btn-lg">View Courses</Link>
          </div>
        </div>
      </div>
    </section>
    <InfoSection className="bg-light" />
    <TestimonialWallSection testimonialIds={testimonialIds} />
    <PerksSection className="bg-light" />
    <GetStartedSection
      title="Ready to Start an Exciting New Career in event planning?"
      text="Become Professionally Certified with QC's Online Event Planning Training"
    />
  </>
);

export default YourCareerPage;
