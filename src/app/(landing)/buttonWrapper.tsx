'use client';

import type { FC, PropsWithChildren } from 'react';

import type { ScreenSizeComparisonFunction } from '@/hooks/useScreenSizeContext';
import { useScreenSizeContext } from '@/hooks/useScreenSizeContext';
import { useScrollPositionContext } from '@/hooks/useScrollPositionContext';

interface Props {
  alwaysVisible: boolean;
}

export const ButtonWrapper: FC<PropsWithChildren<Props>> = ({ alwaysVisible, children }) => {
  const scrollPosition = useScrollPositionContext();
  const { gte } = useScreenSizeContext();

  return (alwaysVisible || show(gte, scrollPosition)) && <>{children}</>;
};

const show = (gte: ScreenSizeComparisonFunction, scrollPosition: number): boolean => {
  if (gte('xxl')) {
    return scrollPosition >= 590;
  }

  if (gte('xl')) {
    return scrollPosition >= 610;
  }

  if (gte('lg')) {
    return scrollPosition >= 590;
  }

  if (gte('md')) {
    return scrollPosition >= 530;
  }

  if (gte('sm')) {
    return scrollPosition >= 385;
  }

  // if (screenWidth >= 375) {
  //   return scrollPosition >= 420;
  // }

  return false;
};
