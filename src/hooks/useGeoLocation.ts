import { useContext } from 'react';

import type { GeoLocation } from '@/domain/geoLocation';
import { GeoLocationContext } from '@/providers/geoLocationProvider';

export const useGeoLocation = (): GeoLocation => {
  const context = useContext(GeoLocationContext);
  if (context === undefined) {
    throw Error('useGeoLocation must be used within a GeoLocationProvider');
  }
  return context;
};
