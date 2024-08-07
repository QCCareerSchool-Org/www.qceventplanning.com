'use client';

import type { FC } from 'react';
import { useEffect, useRef } from 'react';

import { brevoIdentify } from '@/lib/brevo';
import { fbqLead } from '@/lib/fbq';
import { gaEvent, gaUserData } from '@/lib/gtag';
import { trustPulseLead } from '@/lib/trustpulse';

type Props = {
  emailAddress?: string;
  firstName?: string;
  ipAddress?: string;
  leadId?: string;
  conversionId: string;
};

export const LeadProcessing: FC<Props> = props => {
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
    // eslint-disable-next-line camelcase
    gaEvent('conversion', { send_to: props.conversionId });
    void trustPulseLead({
      emailAddress: props.emailAddress ?? null,
      firstName: props.firstName ?? null,
      postalCode: null,
      ipAddress: props.ipAddress ?? null,
    });
    brevoIdentify(props.emailAddress);
  }, [ props.emailAddress, props.firstName, props.ipAddress, props.leadId, props.conversionId ]);

  return null;
};
