'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import { fbqPageview } from '@/lib/fbq';

export const useRouteChange = (): void => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const url = searchParams?.toString().length ? `${pathname}?${searchParams?.toString()}` : pathname;

    fbqPageview();
  }, [ pathname, searchParams ]);
};
