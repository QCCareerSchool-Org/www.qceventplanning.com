import type { FC, PropsWithChildren } from 'react';

import { GeoLocationProvider } from './geoLocationProvider';
import { ScreenWidthProvider } from './screenWidthProvider';
import { ScrollPositionProvider } from './scrollPositionProvider';
import type { GeoLocation } from '@/domain/geoLocation';

type Props = {
  geoLocation: GeoLocation;
};

export const Provider: FC<PropsWithChildren<Props>> = ({ geoLocation, children }) => (
  <ScreenWidthProvider>
    <ScrollPositionProvider>
      <GeoLocationProvider geoLocation={geoLocation}>
        {children}
      </GeoLocationProvider>
    </ScrollPositionProvider>
  </ScreenWidthProvider>
);
