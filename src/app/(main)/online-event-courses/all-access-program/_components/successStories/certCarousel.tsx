'use client';

import { useIntersectionObserver } from '@davewelsh79/use-intersection-observer';
import type { FC } from 'react';
import type { ResponsiveType } from 'react-multi-carousel';
import Carousel from 'react-multi-carousel';

import { CertSlide } from './certSlide';
import BessyLopez from './images/success-storie-bessy-lopez.jpg';
import Antonia from './images/success-stories-antonia-mcclure.jpg';
import AppCert from './images/success-stories-app-cert.jpg';
import DouniaSaikaley from './images/success-stories-dounia-saikaley.jpg';
import JorginaTeles from './images/success-stories-jorgina-teles.jpg';
;
import { useScreenSizeContext } from '@/hooks/useScreenSizeContext';

const responsive: ResponsiveType = {
  all: { breakpoint: { max: 9999, min: 0 }, items: 1 },
};

const autoPlaySpeed = 8000; // 8 seconds

export const CertCarousel: FC = () => {
  const { lt } = useScreenSizeContext();
  const [ intersected, ref ] = useIntersectionObserver();

  const mobile = lt('md');

  return (
    <div ref={ref}>
      <Carousel ssr responsive={responsive} infinite arrows={!mobile} showDots={mobile} autoPlay={intersected} autoPlaySpeed={autoPlaySpeed}>
        <CertSlide src={AppCert} name="" />
        <CertSlide src={DouniaSaikaley} name="Dounia Saikaley" />
        <CertSlide src={BessyLopez} name="Bessy Lopez" />
        <CertSlide src={JorginaTeles} name="Jorgina Teles" />
        <CertSlide src={Antonia} name="Antonia McClure" />
      </Carousel>
    </div>
  );
};
