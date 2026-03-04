'use client';

import { useIntersectionObserver } from '@davewelsh79/use-intersection-observer';
import type { FC, PropsWithChildren } from 'react';
import { memo } from 'react';
import type { ResponsiveType } from 'react-multi-carousel';
import Carousel from 'react-multi-carousel';

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
  const [ intersected, ref ] = useIntersectionObserver();

  return (
    <div ref={ref}>
      <Carousel ssr responsive={responsive} itemClass="d-flex" infinite arrows={!mobile} showDots={mobile} autoPlay={intersected} autoPlaySpeed={autoPlaySpeed}>
        {children}
      </Carousel>
    </div>
  );
});

GoogleCarousel.displayName = 'GoogleCarousel';
