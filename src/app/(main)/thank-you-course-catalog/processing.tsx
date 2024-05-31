'use client';

import type { FC } from 'react';
import { useEffect, useRef } from 'react';

import { fbqLead } from '@/lib/fbq';
import { gaEvent, gaUserData } from '@/lib/gtag';
import { trustPulseLead } from '@/lib/trustpulse';

type Props = {
  emailAddress?: string;
  firstName?: string;
  ipAddress?: string;
  leadId?: string;
};

export const Processing: FC<Props> = props => {
  const effectCalled = useRef(false);

  useEffect(() => {
    if (!props.emailAddress) {
      return;
    }
    if (effectCalled.current) {
      return;
    }
    effectCalled.current = true;
    gaUserData({ email: props.emailAddress });
    fbqLead(props.leadId);
    gaEvent('conversion', {
      send_to: 'AW-1071836607/9wB_CNvknggQv9uL_wM', // eslint-disable-line camelcase
      value: 1.0,
      currency: 'USD',
    });
    void trustPulseLead({
      emailAddress: props.emailAddress ?? null,
      firstName: props.firstName ?? null,
      postalCode: null,
      ipAddress: props.ipAddress ?? null,
    });
  }, [ props.emailAddress, props.firstName, props.ipAddress, props.leadId ]);

  return null;
};
