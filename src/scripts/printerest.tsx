import Script from 'next/script';
import type { FC } from 'react';

import type { UserValues } from '@/domain/userValues';
import { hash, normalizeEmailAddress } from '@/lib/hash';
import type { LoadParams } from '@/lib/pintrk';
import { safeJSON } from '@/lib/safeJSON';

interface Props {
  id: string;
  userValues?: UserValues;
}

export const Pinterest: FC<Props> = ({ id, userValues }) => {
  const pd: LoadParams = {};
  if (userValues?.emailAddress) {
    pd.em = hash(normalizeEmailAddress(userValues.emailAddress));
  }

  const url = new URL('https://ct.pinterest.com/v3');
  url.searchParams.append('event', 'init');
  url.searchParams.append('tid', id);
  if (pd.em) {
    url.searchParams.append('pd[em]', pd.em);
  }
  url.searchParams.append('noscript', '1');

  return (
    <>
      <Script id="pinterest" dangerouslySetInnerHTML={{ __html: getScript(id, pd) }} />
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img height="1" width="1" style={{ display: 'none' }} alt="" src={url.toString()} />
      </noscript>
    </>
  );
};

const getScript = (id: string, pd: LoadParams): string => `
!function(e){if(!window.pintrk){window.pintrk = function () {
window.pintrk.queue.push(Array.prototype.slice.call(arguments))};var
  n=window.pintrk;n.queue=[],n.version="3.0";var
  t=document.createElement("script");t.async=!0,t.src=e;var
  r=document.getElementsByTagName("script")[0];
  r.parentNode.insertBefore(t,r)}}("https://s.pinimg.com/ct/core.js");
pintrk('load', ${safeJSON(id)}, ${safeJSON(pd)});
pintrk('page');
`;
