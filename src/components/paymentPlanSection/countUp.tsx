'use client';

import { useIntersectionObserver } from '@davewelsh79/use-intersection-observer';
import type { FC } from 'react';
import { useCountUp } from 'react-use-count-up';

interface Props {
  value: number;
  duration?: number;
  once?: boolean;
  options?: IntersectionObserverInit;
}

export const CountUp: FC<Props> = ({ value, duration = 2_000, once = true, options }) => {
  const [ intersected, ref ] = useIntersectionObserver(once, options);

  const displayValue = useCountUp({ start: 0, end: value, duration, easingFunction: 'easeOutCubic', started: intersected });

  return <span ref={ref}>{displayValue}</span>;
};
