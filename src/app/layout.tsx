import type { Metadata } from 'next';

import type { LayoutComponent } from './serverComponent';
import { neueHaasDisplay, neueHaasText } from '@/fonts';
import { Provider } from '@/providers';
import { Bing } from '@/scripts/bing';
import { Brevo } from '@/scripts/brevo';
import { Facebook } from '@/scripts/facebook';
import { GoogleAnalytics } from '@/scripts/googleAnalytics';
import { OptInMonster } from '@/scripts/optInMonster';
import { PerfectAudience } from '@/scripts/perfectAudience';
import { Tiktok } from '@/scripts/tiktok';
import { VWO } from '@/scripts/vwo';

import './global.scss';

export const metadata: Metadata = {
  title: { default: 'QC Event School', template: '%s - QC Event School' },
  metadataBase: new URL('https://www.qceventplanning.com'),
};

const RootLayout: LayoutComponent = ({ children }) => {
  return (
    <html lang="en" className={`${neueHaasText.variable} ${neueHaasDisplay.variable} h-100`}>
      <head>
        {process.env.GOOGLE_ANALYTICS_ID && <GoogleAnalytics id={process.env.GOOGLE_ANALYTICS_ID} adsId={process.env.GOOGLE_ADS_ID} />}
        {process.env.VWO_ID && <VWO id={parseInt(process.env.VWO_ID, 10)} />}
        {process.env.BREVO_CLIENT_KEY && <Brevo clientKey={process.env.BREVO_CLIENT_KEY} />}
      </head>
      <body className="d-flex flex-column">
        <Provider>
          {children}
        </Provider>
        {process.env.FACEBOOK_ID && <Facebook id={process.env.FACEBOOK_ID} />}
        {process.env.TIKTOK_ID && <Tiktok id={process.env.TIKTOK_ID} />}
        {process.env.BING_ID && <Bing id={process.env.BING_ID} />}
        {process.env.PERFECT_AUDIENCE_ID && <PerfectAudience id={process.env.PERFECT_AUDIENCE_ID} />}
        <OptInMonster />
      </body>
    </html>
  );
};

export default RootLayout;
