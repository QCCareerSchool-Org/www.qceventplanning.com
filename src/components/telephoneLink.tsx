'use client';

import type { CSSProperties, FC } from 'react';

import { useGeoLocation } from '@/hooks/useGeoLocation';
import { getTelephoneNumber } from '@/lib/telephone';

type Props = {
  className?: string;
  style?: CSSProperties;
};

export const TelephoneLink: FC<Props> = ({ className, style }) => {
  const geoLocation = useGeoLocation();
  const telephoneNumber = getTelephoneNumber(geoLocation.countryCode);
  return (
    <a href={`tel:${telephoneNumber}`} className={className} style={style}>{telephoneNumber}</a>
  );
};
