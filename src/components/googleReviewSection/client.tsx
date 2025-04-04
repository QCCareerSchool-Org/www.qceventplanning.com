'use client';

import type { FC, PropsWithChildren } from 'react';

import { GoogleCarousel } from './googleCarousel';
import { useScreenWidth } from '@/hooks/useScreenWidth';

export const GoogleReviewSectionClient: FC<PropsWithChildren> = ({ children }) => {
  const screenWidth = useScreenWidth();

  return (
    <GoogleCarousel mobile={screenWidth < 992}>
      {children}
    </GoogleCarousel>
  );
};
