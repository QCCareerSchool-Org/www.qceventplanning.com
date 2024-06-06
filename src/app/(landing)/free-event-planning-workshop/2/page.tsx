import type { Metadata } from 'next';

import { Header } from '../../header';
import { AboutQCSection } from '../_sections/AboutQCSection';
import { CTASection } from '../_sections/CTASection';
import { HeroSection } from '../_sections/HeroSection';
import { MeetInstructorSection } from '../_sections/MeetInstructorSection';
import { WhatYoullLearnSection } from '../_sections/WhatYoullLearnSection';
import styles from '../page.module.scss';
import type { PageComponent } from '@/app/serverComponent';
import CheckIcon from '@/components/check.svg';
import { TestimonialWallSection } from '@/components/testimonialWallSection';

export const metadata: Metadata = {
  title: 'Join the Free Webinar with Lisa Forbes',
};

const testimonialIds = [ 'TE-0013', 'TE-0002', 'TE-0003', 'TE-0004', 'TE-0005', 'TE-0006' ];

const WebinarPage: PageComponent = () => {
  return (
    <>
      <Header logoLink buttonContent={<><span className={styles.headerButtonSmallText}>Register Now</span><span className={styles.headerButtonLargeText}><span className="text-primary"><CheckIcon height="16" className="me-2" style={{ position: 'relative', top: -1 }} /></span>Join the Workshop</span></>} />
      <HeroSection extraFields />
      <WhatYoullLearnSection />
      <MeetInstructorSection />
      <AboutQCSection />
      <TestimonialWallSection testimonialIds={testimonialIds} />
      <CTASection />
    </>
  );
};

export default WebinarPage;
