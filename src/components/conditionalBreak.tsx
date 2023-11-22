'use client';

import type { FC } from 'react';
import { useScreenWidth } from '@/hooks/useScreenWidth';

type Props = {
  xs?: boolean;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
  xxl?: boolean;
};

export const ConditionalBreak: FC<Props> = ({ xs, sm, md, lg, xl, xxl }) => {
  const screenWidth = useScreenWidth();

  if (screenWidth >= 1400) {
    return xxl ?? xl ?? lg ?? md ?? sm ?? xs ?? true ? <br /> : ' ';
  }

  if (screenWidth >= 1200) {
    return xl ?? lg ?? md ?? sm ?? xs ?? true ? <br /> : ' ';
  }

  if (screenWidth >= 992) {
    return lg ?? md ?? sm ?? xs ?? true ? <br /> : ' ';
  }

  if (screenWidth >= 768) {
    return md ?? sm ?? xs ?? true ? <br /> : ' ';
  }

  if (screenWidth >= 576) {
    return sm ?? xs ?? true ? <br /> : ' ';
  }

  return xs ?? true ? <br /> : ' ';
};
