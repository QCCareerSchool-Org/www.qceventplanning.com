'use client';

import type { FC, PropsWithChildren } from 'react';
import { memo, useRef } from 'react';
import type { ResponsiveType } from 'react-multi-carousel';
import Carousel from 'react-multi-carousel';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface Props {
  mobile: boolean;
}

const responsive: ResponsiveType = {
  all: {
    breakpoint: { max: 9999, min: 0 },
    items: 1,
  },
};

const autoPlaySpeed = 8000; // 8 seconds

export const GoogleCarousel: FC<PropsWithChildren<Props>> = memo(({ mobile, children }) => {
  const carouselRef = useRef(null);
  const intersected = useIntersectionObserver(carouselRef);

  return (
    <div ref={carouselRef}>
      <Carousel ssr responsive={responsive} itemClass="d-flex" infinite arrows={!mobile} showDots={mobile} autoPlay={intersected} autoPlaySpeed={autoPlaySpeed}>
        {children}
      </Carousel>
    </div>
  );
});

GoogleCarousel.displayName = 'GoogleCarousel';
