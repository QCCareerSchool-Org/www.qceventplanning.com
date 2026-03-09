'use client';

import { useCallback, useMemo, useSyncExternalStore } from 'react';

export type BreakpointSize = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type Size = 'xs' | BreakpointSize;

export interface Breakpoint {
  name: BreakpointSize;
  min: number;
}

const getQuery = (b: Breakpoint): string => {
  return `(min-width: ${b.min}px)`;
};

const getServerSnapshot = () => null;

export const useScreenSize = (breakpoints: Breakpoint[]) => {
  const mqls = useMemo(() => {
    if (typeof window === 'undefined') {
      return [];
    }
    return breakpoints.map(b => ({ name: b.name, mql: window.matchMedia(getQuery(b)) }));
  }, [ breakpoints ]);

  const subscribe = useCallback((onStoreChange: () => void) => {
    mqls.forEach(({ mql }) => mql.addEventListener('change', onStoreChange));
    return () => mqls.forEach(({ mql }) => mql.removeEventListener('change', onStoreChange));
  }, [ mqls ]);

  const getSnapshot = useCallback((): Size => {
    for (let i = mqls.length - 1; i >= 0; i--) {
      if (mqls[i].mql.matches) {
        return mqls[i].name;
      }
    }
    return 'xs';
  }, [ mqls ]);

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};
