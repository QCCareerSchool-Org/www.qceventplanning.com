'use client';

import type { FC, PropsWithChildren } from 'react';
import { createContext, useState } from 'react';

import type { GeoLocation } from '@/domain/geoLocation';

export const GeoLocationContext = createContext<GeoLocation | undefined>(undefined);

type Props = {
  geoLocation: GeoLocation;
};

export const GeoLocationProvider: FC<PropsWithChildren<Props>> = ({ geoLocation, children }) => {
  const [ state ] = useState(geoLocation);

  return (
    <GeoLocationContext.Provider value={state}>
      {children}
    </GeoLocationContext.Provider>
  );
};
