import type { Metadata } from 'next';

import { Header } from '../header';
import { AboutQCSection } from './_sections/AboutQCSection';
import { CTASection } from './_sections/CTASection';
import { HeroSection } from './_sections/HeroSection';
import { MeetInstructorSection } from './_sections/MeetInstructorSection';
import { WhatYoullLearnSection } from './_sections/WhatYoullLearnSection';
import styles from './page.module.scss';
import type { PageComponent } from '@/app/serverComponent';
import CheckIcon from '@/components/check.svg';
import { TestimonialWallSection } from '@/components/testimonialWallSection';
import { getData } from '@/lib/getData';
import { getParam } from '@/lib/getParam';

export const metadata: Metadata = {
  title: 'Join the Free Webinar with Lisa Forbes',
};

const testimonialIds = [ 'TE-0013', 'TE-0002', 'TE-0003', 'TE-0004', 'TE-0005', 'TE-0006' ];

const WebinarPage: PageComponent = ({ searchParams }) => {
  const { countryCode, provinceCode } = getData();
  const gclid = getParam(searchParams.gclid);
  const msclkid = getParam(searchParams.msclkid);
  const utmSource = getParam(searchParams.utm_source);
  const utmMedium = getParam(searchParams.utm_medium);
  const utmCampaign = getParam(searchParams.utm_campaign);
  const utmContent = getParam(searchParams.utm_content);
  const utmTerm = getParam(searchParams.utm_term);
  return (
    <>
      <Header logoLink buttonContent={<><span className={styles.headerButtonSmallText}>Watch Now</span><span className={styles.headerButtonLargeText}><span className="text-primary"><CheckIcon height="16" className="me-2" style={{ position: 'relative', top: -1 }} /></span>Watch the Webinar</span></>} />
      <HeroSection countryCode={countryCode} provinceCode={provinceCode} gclid={gclid} msclkid={msclkid} utmSource={utmSource} utmMedium={utmMedium} utmCampaign={utmCampaign} utmContent={utmContent} utmTerm={utmTerm} />
      <MeetInstructorSection />
      <WhatYoullLearnSection />
      <AboutQCSection />
      <TestimonialWallSection h={3} testimonialIds={testimonialIds} />
      <CTASection />
    </>
  );
};

export default WebinarPage;
