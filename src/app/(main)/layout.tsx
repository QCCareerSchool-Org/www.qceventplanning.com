import type { Metadata } from 'next';
import Script from 'next/script';

import { Footer } from './footer';
import { Header } from './header';
import type { LayoutComponent } from '@/app/serverComponent';
import { Bing } from '@/components/scripts/bing';
import { Facebook } from '@/components/scripts/facebook';
import { GoogleAnalytics } from '@/components/scripts/googleAnalytics';
import { LiveChat } from '@/components/scripts/liveChat';
import { Pardot } from '@/components/scripts/pardot';
import { PerfectAudience } from '@/components/scripts/perfectAudience';
import { Tiktok } from '@/components/scripts/tiktok';
import { TrustPulse } from '@/components/scripts/trustPulse';
import { VWO } from '@/components/scripts/vwo';

export const metadata: Metadata = {
  title: 'QC Event School',
};

const MainLayout: LayoutComponent = ({ children }) => {
  return (
    <>
      {process.env.GOOGLE_ANALYTICS_ID && <GoogleAnalytics id={process.env.GOOGLE_ANALYTICS_ID} adsId={process.env.GOOGLE_ADS_ID} />}
      {process.env.VWO_ID && <VWO id={parseInt(process.env.VWO_ID, 10)} />}
      <Header />
      <main className="flex-shrink-0">{children}</main>
      <Footer />
      {process.env.FACEBOOK_ID && <Facebook id={process.env.FACEBOOK_ID} />}
      {process.env.TIKTOK_ID && <Tiktok id={process.env.TIKTOK_ID} />}
      {process.env.PARDOT_ACCOUNT_ID && process.env.PARDOT_CAMPAIGN_ID && <Pardot accountId={process.env.PARDOT_ACCOUNT_ID} campaignId={process.env.PARDOT_CAMPAIGN_ID} />}
      {process.env.BING_ID && <Bing id={process.env.BING_ID} />}
      {process.env.TRUSTPULSE_ID && <TrustPulse id={parseInt(process.env.TRUSTPULSE_ID, 10)} />}
      <LiveChat license={1056788} group={1} />
      {process.env.PERFECT_AUDIENCE_ID && <PerfectAudience id={process.env.PERFECT_AUDIENCE_ID} />}
    </>
  );
};

export default MainLayout;
