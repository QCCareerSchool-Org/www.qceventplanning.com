import type { Metadata } from 'next';
import { headers } from 'next/headers';
import type { LayoutComponent } from './serverComponent';

import type { GeoLocation } from '@/domain/geoLocation';
import { neueHaasDisplay, neueHaasText } from '@/fonts';
import { fetchGeoLocation } from '@/lib/fetch';
import { Provider } from '@/providers';

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
      <body className="d-flex flex-column h-100">
        <Provider geoLocation={geoLocation}>
          {children}
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
