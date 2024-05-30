'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export const useRouteChange = (): void => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const url = searchParams?.toString().length ? `${pathname}?${searchParams?.toString()}` : pathname;
  }, [ pathname, searchParams ]);
};
