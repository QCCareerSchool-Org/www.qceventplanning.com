'use client';

import type { FC, MouseEventHandler } from 'react';

import { useTaxCreditPopupContext } from '@/hooks/useTaxCreditPopupContext';
import { gaEvent } from '@/lib/gtag';

export const LearnMore: FC = () => {
  const [ , toggle ] = useTaxCreditPopupContext();

  const handleClick: MouseEventHandler = e => {
    e.preventDefault();
    toggle();
    gaEvent('canadian tax popup');
  };

  return (
    <>
      <a href="#" onClick={handleClick}>Learn More</a>
    </>
  );
};
