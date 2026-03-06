'use client';

import type { FC, PropsWithChildren } from 'react';
import { createContext, useContext } from 'react';

import type { Breakpoint } from '@/hooks/useScreenSize';
import type { Size as ScreenSize } from '@/hooks/useScreenSize';
import { useScreenSize } from '@/hooks/useScreenSize';

const breakpoints = [
  { name: 'sm', min: 567 },
  { name: 'md', min: 768 },
  { name: 'lg', min: 992 },
  { name: 'xl', min: 1200 },
  { name: 'xxl', min: 1400 },
] as const satisfies Breakpoint[];

const SIZE_ORDER = [ 'xs', ...breakpoints.map(b => b.name) ] as const;

const ScreenSizeContext = createContext<ScreenSize | null | undefined>(undefined);

export const ScreenSizeProvider: FC<PropsWithChildren> = ({ children }) => {
  const state = useScreenSize(breakpoints);

  return (
    <ScreenSizeContext.Provider value={state}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

export type ScreenSizeComparisonFunction = (s: ScreenSize) => boolean;

export interface ScreenSizeResult {
  /** equal to a particlar screen size */
  eq: ScreenSizeComparisonFunction;
  /** greater than or equal a particlar screen size */
  gte: ScreenSizeComparisonFunction;
  /** less than or equal a particlar screen size */
  lte: ScreenSizeComparisonFunction;
  /** greater than a particlar screen size */
  gt: ScreenSizeComparisonFunction;
  /** less than a particlar screen size */
  lt: ScreenSizeComparisonFunction;
  /** smaller than all specified breakpoints */
  xs: boolean;
  /** window is available */
  ready: boolean;
}

export const useScreenSizeContext = (): ScreenSizeResult => {
  const context = useContext(ScreenSizeContext);
  if (context === undefined) {
    throw new Error('useScreenSizeContext must be used within a ScreenSizeProvider');
  }
  const index = context !== null ? SIZE_ORDER.indexOf(context) : -1;
  return {
    eq: (s: ScreenSize) => index === SIZE_ORDER.indexOf(s),
    gte: (s: ScreenSize) => index >= SIZE_ORDER.indexOf(s),
    lte: (s: ScreenSize) => index <= SIZE_ORDER.indexOf(s),
    gt: (s: ScreenSize) => index > SIZE_ORDER.indexOf(s),
    lt: (s: ScreenSize) => index < SIZE_ORDER.indexOf(s),
    xs: index === -1,
    ready: context !== null,
  };
};
