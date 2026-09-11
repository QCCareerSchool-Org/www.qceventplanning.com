'use client';

import Script from 'next/script';
import type { FC } from 'react';

import type { UserValues } from '@/domain/userValues';
import { hash } from '@/lib/hash';
import { safeJSON } from '@/lib/safeJSON';

interface Props {
  id: string;
  userValues?: UserValues;
}

export const GoogleAnalytics: FC<Props> = ({ id, userValues }) => {
  const hashedEmail = userValues?.emailAddress ? hash(userValues.emailAddress) : undefined;

  return (
    <>
      <Script id="pinterest" dangerouslySetInnerHTML={{ __html: getScript(id, userValues) }} />
      <noscript dangerouslySetInnerHTML={{ __html: `<img height="1" width="1" style="display:none;" alt="" src="https://ct.pinterest.com/v3/?event=init&tid=${encodeURIComponent(id)}&pd[em]=<hashed_email_address>&noscript=1" /></noscript>` }} />
    </>
  );
};

const getScript = (id: string, userValues?: UserValues): string => {
  return `
!function(e){if(!window.pintrk){window.pintrk = function () {
window.pintrk.queue.push(Array.prototype.slice.call(arguments))};var
  n=window.pintrk;n.queue=[],n.version="3.0";var
  t=document.createElement("script");t.async=!0,t.src=e;var
  r=document.getElementsByTagName("script")[0];
  r.parentNode.insertBefore(t,r)}}("https://s.pinimg.com/ct/core.js");
pintrk('load', ${safeJSON(id)}, {em: '<user_email_address>'});
pintrk('page');
`;
};
