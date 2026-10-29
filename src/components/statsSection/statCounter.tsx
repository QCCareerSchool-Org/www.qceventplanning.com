'use client';

import { useIntersectionObserverRatio } from '@davewelsh79/use-intersection-observer';
import type { FC } from 'react';
import { useSyncExternalStore } from 'react';
import { useCountUp } from 'react-use-count-up';

import styles from './statsSection.module.scss';

const duration = 2_000; // 2 seconds
const observerOptions: IntersectionObserverInit = { threshold: Array.from({ length: 11 }, (_, i) => Math.round(i * 0.1 * 10) / 10) }; // 0, 0.1, 0.2, ..., 1

// nothing to subscribe to; we only need the server snapshot (false) during SSR and hydration, then the client snapshot (true)
const subscribe = (): (() => void) => () => undefined;

interface Props {
  end: number;
  suffix?: string;
}

/**
 * Renders the final value on the server and during hydration so crawlers and no-JS visitors see the real number,
 * then switches to the fade-in count-up animation once mounted in the browser
 */
export const StatCounter: FC<Props> = ({ end, suffix }) => {
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const [ started, ratio, ref ] = useIntersectionObserverRatio(true, observerOptions);
  const count = useCountUp({ start: 0, end, duration, started, easingFunction: 'easeOutCubic' });

  return <div ref={ref} className={styles.count} style={mounted ? { opacity: ratio } : undefined}>{mounted ? count : end}{suffix}</div>;
};
