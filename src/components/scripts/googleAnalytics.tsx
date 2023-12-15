'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import type { FC } from 'react';
import { useEffect } from 'react';

import { gaPageview } from '@/lib/gtag';

type Props = {
  id: string;
  adsId?: string;
};

export const GoogleAnalytics: FC<Props> = ({ id, adsId }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + (searchParams ? searchParams.toString() : '');
    gaPageview(id, url);
  }, [ pathname, searchParams, id ]);

  return (
    <>
      <Script async src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`} />
      <Script id="google-analytics" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: getScript(id, adsId) }} />
    </>
  );
};

const getScript = (id: string, adsId?: string): string => {
  let script = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', \`${id.replace(/`/ug, '\\`')}\`, {
  page_path: window.location.pathname,
});
`;
  if (adsId) {
    script += `gtag('config', \`${adsId.replace(/`/ug, '\\`')}\`, { allow_enhanced_conversions: true });\n`;
  }
  return script;
};
