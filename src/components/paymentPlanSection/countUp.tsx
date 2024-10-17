'use client';

import { type FC, useRef } from 'react';
import { useCountUp } from 'react-use-count-up';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

type Props = {
  value: number;
};

const duration = 2_000; // 2 seconds

// const formatter = (n: number) => n.toString()

export const CountUp: FC<Props> = ({ value }) => {
  const ref = useRef<HTMLElement>(null);
  const intersected = useIntersectionObserver(ref);

  const displayValue = useCountUp({ start: 0, end: value, duration, easingFunction: 'easeOutCubic', started: intersected });

  return <span ref={ref}>{displayValue}</span>;
};
