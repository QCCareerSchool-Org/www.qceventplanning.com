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

export const Pinterest: FC<Props> = ({ id, userValues }) => {
  const pd = userValues ? {
    ...(userValues.emailAddress ? { em: hash(userValues.emailAddress) } : undefined),
    ...(userValues.firstName ? { fn: hash(userValues.firstName) } : undefined),
    ...(userValues.lastName ? { ln: hash(userValues.lastName) } : undefined),
    ...(userValues.telephoneNumber ? { ph: hash(userValues.telephoneNumber) } : undefined),
    ...(userValues.city ? { ct: hash(userValues.city) } : undefined),
    ...(userValues.provinceCode ? { st: hash(userValues.provinceCode) } : undefined),
    ...(userValues.countryCode ? { country: hash(userValues.countryCode) } : undefined),
  } : undefined;

  const url = new URL('https://ct.pinterest.com/v3');
  url.searchParams.append('event', 'init');
  url.searchParams.append('tid', id);
  if (pd) {
    for (const [ key, value ] of Object.entries(pd)) {
      url.searchParams.append(`pd[${key}]`, value);
    }
  }
  url.searchParams.append('noscript', '1');

  return (
    <>
      <Script id="pinterest" dangerouslySetInnerHTML={{ __html: getScript(id) }} />
      {pd && <Script id="pinterest-userValues" dangerouslySetInnerHTML={{ __html: getUserValuesScript(pd) }} />}
      <Script id="pinterest-page" dangerouslySetInnerHTML={{ __html: `pintrk('page');` }} />
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img height="1" width="1" style={{ display: 'none' }} alt="" src={url.toString()} />
      </noscript>
    </>
  );
};

const getScript = (id: string): string => {
  return `
!function(e){if(!window.pintrk){window.pintrk = function () {
window.pintrk.queue.push(Array.prototype.slice.call(arguments))};var
  n=window.pintrk;n.queue=[],n.version="3.0";var
  t=document.createElement("script");t.async=!0,t.src=e;var
  r=document.getElementsByTagName("script")[0];
  r.parentNode.insertBefore(t,r)}}("https://s.pinimg.com/ct/core.js");
pintrk('load', ${safeJSON(id)});
`;
};

const getUserValuesScript = (pd: Record<string, string>): string => {
  return `pintrk('set', ${safeJSON(pd)});`;
};
