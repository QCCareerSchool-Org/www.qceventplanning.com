import type { Metadata } from 'next';
import { headers } from 'next/headers';

import type { LayoutComponent } from './serverComponent';
import { Bing } from '@/components/scripts/bing';
import { Facebook } from '@/components/scripts/facebook';
import { GoogleAnalytics } from '@/components/scripts/googleAnalytics';
import { LiveChat } from '@/components/scripts/liveChat';
import { Pardot } from '@/components/scripts/pardot';
import { PerfectAudience } from '@/components/scripts/perfectAudience';
import { Tiktok } from '@/components/scripts/tiktok';
import { TrustPulse } from '@/components/scripts/trustPulse';
import { VWO } from '@/components/scripts/vwo';
import type { GeoLocation } from '@/domain/geoLocation';
import { neueHaasDisplay, neueHaasText } from '@/fonts';
import { fetchGeoLocation } from '@/lib/fetch';
import { Provider } from '@/providers';

import './global.scss';

export const metadata: Metadata = {
  title: 'QC Event School',
};

const RootLayout: LayoutComponent = async ({ children }) => {

  // copy headers so that we can make a request as if we are the client
  const clientHeaders: { 'x-forwarded-for'?: string } = {};

  const headersList = headers();
  const vercelHeader = headersList.get('x-vercel-forwared-for');
  const otherHeader = headersList.get('x-forwarded-for');
  if (vercelHeader) {
    clientHeaders['x-forwarded-for'] = vercelHeader;
  } else if (otherHeader) {
    clientHeaders['x-forwarded-for'] = otherHeader;
  }

  const detectedGeoLocation = await fetchGeoLocation(clientHeaders);

  const geoLocation: GeoLocation = detectedGeoLocation ?? { countryCode: 'US', provinceCode: 'MD' };

  return (
    <html lang="en" className={`${neueHaasText.variable} ${neueHaasDisplay.variable} h-100`}>
      <head>
        {process.env.GOOGLE_ANALYTICS_ID && <GoogleAnalytics id={process.env.GOOGLE_ANALYTICS_ID} adsId={process.env.GOOGLE_ADS_ID} />}
        {process.env.VWO_ID && <VWO id={parseInt(process.env.VWO_ID, 10)} />}
      </head>
      <body className="d-flex flex-column h-100">
        <Provider geoLocation={geoLocation}>
          {children}
        </Provider>
        {process.env.FACEBOOK_ID && <Facebook id={process.env.FACEBOOK_ID} />}
        {process.env.TIKTOK_ID && <Tiktok id={process.env.TIKTOK_ID} />}
        {process.env.PARDOT_ACCOUNT_ID && process.env.PARDOT_CAMPAIGN_ID && <Pardot accountId={process.env.PARDOT_ACCOUNT_ID} campaignId={process.env.PARDOT_CAMPAIGN_ID} />}
        {process.env.BING_ID && <Bing id={process.env.BING_ID} />}
        {process.env.TRUSTPULSE_ID && <TrustPulse id={parseInt(process.env.TRUSTPULSE_ID, 10)} />}
        <LiveChat license={1056788} group={1} />
        {process.env.PERFECT_AUDIENCE_ID && <PerfectAudience id={process.env.PERFECT_AUDIENCE_ID} />}
      </body>
    </html>
  );
};

export default RootLayout;
