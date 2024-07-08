'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';

import { brevoPageview } from '@/lib/brevo';

export const useRouteChange = (): void => {
  const countRef = useRef(0);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (countRef.current > 0) { // don't run the first time because it's already tracked
      if (pathname) {
        let url = `https://www.qceventplanning.com${pathname}`;
        if (searchParams?.toString().length) {
          url += `?${searchParams?.toString()}`;
        }
        const title = document.title;
        brevoPageview(title, url, pathname);
      }
    }
    countRef.current++;
  }, [ pathname, searchParams ]);
};
