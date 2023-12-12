'use client';

import type { FC, PropsWithChildren } from 'react';
import { useScreenWidth } from '@/hooks/useScreenWidth';
import { useScrollPosition } from '@/hooks/useScrollPosition';

export const ButtonWrapper: FC<PropsWithChildren> = ({ children }) => {
  const scrollPosition = useScrollPosition();
  const screenWidth = useScreenWidth();

  return show(screenWidth, scrollPosition) && children;
};

const show = (screenWidth: number, scrollPosition: number): boolean => {
  if (screenWidth >= 1400) {
    return scrollPosition >= 590;
  }

  if (screenWidth >= 1200) {
    return scrollPosition >= 610;
  }

  if (screenWidth >= 992) {
    return scrollPosition >= 590;
  }

  if (screenWidth >= 768) {
    return scrollPosition >= 530;
  }

  if (screenWidth >= 576) {
    return scrollPosition >= 385;
  }

  if (screenWidth >= 400) {
    return scrollPosition >= 420;
  }

  return false;
};
