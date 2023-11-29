'use client';

import type { CSSProperties, FC } from 'react';

import { getTelephoneNumber } from '@/lib/telephone';

type Props = {
  countryCode: string;
  className?: string;
  style?: CSSProperties;
};

export const TelephoneLink: FC<Props> = ({ countryCode, className, style }) => {
  const telephoneNumber = getTelephoneNumber(countryCode);
  return (
    <a href={`tel:${telephoneNumber}`} className={className} style={style}>{telephoneNumber}</a>
  );
};
