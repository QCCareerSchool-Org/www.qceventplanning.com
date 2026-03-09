'use client';

import type { FC, MouseEventHandler } from 'react';

import MapleLeafIcon from '@/components/icons/maple-leaf.svg';
import { useTaxCreditPopupContext } from '@/hooks/useTaxCreditPopupContext';
import { gaEvent } from '@/lib/gtag';

export const CanadianTax: FC = () => {
  const [ , toggle ] = useTaxCreditPopupContext();

  const handleClick: MouseEventHandler = e => {
    e.preventDefault();
    toggle();
    gaEvent('canadian tax popup');
  };

  return <p className="lead mt-2 mb-0 fw-bold">You can save more than 50% on your course fees. <a href="#" onClick={handleClick}>Learn More</a> <MapleLeafIcon height={22} /></p>;
};
