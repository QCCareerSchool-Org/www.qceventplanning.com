'use client';

import { type FC, useEffect } from 'react';

import type { Enrollment } from '@/domain/enrollment';
import { addToIDevAffiliate } from '@/lib/addToIDevAffiliate';
import { fbqSale } from '@/lib/fbq';
import { gaSale } from '@/lib/gtag';
import { sendEnrollmentEmail } from '@/lib/sendEnrollmentEmail';
import { setStudent } from '@/lib/setStudent';
import { trustPulseEnrollment } from '@/lib/trustpulse';

type Props = {
  enrollment: Enrollment;
  code: string;
  ipAddress: string | null;
};

export const Processing: FC<Props> = ({ enrollment, code, ipAddress }) => {
  // perform this on the client side so that the client's IP address is used
  useEffect(() => {
    if (!enrollment.emailed) {
      addToIDevAffiliate(enrollment).catch(() => { /* */ });
      gaSale(enrollment);
      fbqSale(enrollment);
      sendEnrollmentEmail(enrollment.id, code).catch(console.error);
      setStudent(enrollment.id, code).catch(console.error);
      trustPulseEnrollment(enrollment, ipAddress).catch(console.error);

      const url = `/api/sale?enrollmentId=${encodeURIComponent(enrollment.id)}&code=${encodeURIComponent(code)}`;
      fetch(url, { method: 'post' }).then(async response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      }).then(responseBody => {
        console.log(responseBody);
      }).catch(console.error);
    }
  }, [ enrollment, code, ipAddress ]);
  return null;
};
