'use client';

import type { SVGProps } from 'react';
import { forwardRef, useRef } from 'react';

import styles from './index.module.scss';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { mergeRefs } from '@/lib/mergeRefs';

type Props = SVGProps<SVGSVGElement>;

export const Squiggle = forwardRef<SVGSVGElement, Props>(({ className, strokeWidth, ...props }, parentRef) => {
  const localRef = useRef<SVGSVGElement>(null);
  const intersected = useIntersectionObserver(localRef, undefined, true);

  // include caller className last so it can win in CSS specificity/tie-breaks if needed
  const classList = `${styles.squiggle} ${intersected ? styles.show : ''} ${className ?? ''}`;

  return (
    <svg
      {...props}
      ref={mergeRefs(localRef, parentRef)}
      // className is applied after {...props} so it always wins,
      // even if className ends up inside props in the future
      className={classList}
      aria-hidden="true"
      viewBox="0 0 694 96.19"
      preserveAspectRatio="none"
      stroke="currentColor"
      fill="none"
    >
      <path strokeWidth={strokeWidth ?? 10} d="M12,84.1947 C12,84.1947 176,-27.8053 153,27.1947 C130,82.1947 122.88,103.746702 220,41.1947 C279,3.1947 210,80.1947 314,72.1947 C378.439,67.2377 494.147003,0.8867 682,32.1947" />
    </svg>
  );
});

Squiggle.displayName = 'Squiggle';
