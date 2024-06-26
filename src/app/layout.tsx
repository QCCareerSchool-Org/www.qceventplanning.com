import type { Metadata } from 'next';

import { LayoutClient } from './layoutClient';
import type { LayoutComponent } from './serverComponent';
import { neueHaasDisplay, neueHaasText } from '@/fonts';
import { Provider } from '@/providers';
import { Bing } from '@/scripts/bing';
import { Facebook } from '@/scripts/facebook';
import { GoogleAnalytics } from '@/scripts/googleAnalytics';
import { OptInMonster } from '@/scripts/optInMonster';
import { Pardot } from '@/scripts/pardot';
import { PerfectAudience } from '@/scripts/perfectAudience';
import { Tiktok } from '@/scripts/tiktok';
import { TrustPulse } from '@/scripts/trustPulse';
import { VWO } from '@/scripts/vwo';

import './global.scss';

export const metadata: Metadata = {
  title: 'QC Event School',
};

const RootLayout: LayoutComponent = ({ children }) => {
  return (
    <html lang="en" className={`${neueHaasText.variable} ${neueHaasDisplay.variable} h-100`}>
      <head>
        {process.env.GOOGLE_ANALYTICS_ID && <GoogleAnalytics id={process.env.GOOGLE_ANALYTICS_ID} adsId={process.env.GOOGLE_ADS_ID} />}
        {process.env.VWO_ID && <VWO id={parseInt(process.env.VWO_ID, 10)} />}
      </head>
      <body className="d-flex flex-column h-100">
        <Provider>
          {children}
        </Provider>
        {process.env.FACEBOOK_ID && <Facebook id={process.env.FACEBOOK_ID} />}
        {process.env.TIKTOK_ID && <Tiktok id={process.env.TIKTOK_ID} />}
        {process.env.PARDOT_ACCOUNT_ID && process.env.PARDOT_CAMPAIGN_ID && <Pardot accountId={process.env.PARDOT_ACCOUNT_ID} campaignId={process.env.PARDOT_CAMPAIGN_ID} />}
        {process.env.BING_ID && <Bing id={process.env.BING_ID} />}
        {process.env.TRUSTPULSE_ID && <TrustPulse id={parseInt(process.env.TRUSTPULSE_ID, 10)} />}
        {process.env.PERFECT_AUDIENCE_ID && <PerfectAudience id={process.env.PERFECT_AUDIENCE_ID} />}
        <OptInMonster />
      </body>
      <LayoutClient />
    </html>
  );
};

export default RootLayout;
