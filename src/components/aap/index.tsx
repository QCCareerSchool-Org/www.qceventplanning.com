import Big from 'big.js';
import type { FC } from 'react';

import { AAPMain } from './main';
import { aapCourseCodes } from '@/domain/courseCode';
import { fetchPrice } from '@/lib/fetchPrice';

interface Props {
  countryCode: string;
  provinceCode: string | null;
  href?: string;
}

export const AAP: FC<Props> = async ({ countryCode, provinceCode, href = '/online-event-courses/all-access-program' }) => {
  const [ price, combinedPrice ] = await Promise.all([
    fetchPrice([ 'aa' ], countryCode, provinceCode, undefined, undefined, process.env.FIREWALL_BYPASS_SECRET),
    fetchPrice(aapCourseCodes, countryCode, provinceCode, undefined, undefined, process.env.FIREWALL_BYPASS_SECRET),
  ]);

  if (!price.success || !combinedPrice.success) {
    return;
  }
  const originalPrice = parseFloat(combinedPrice.value.courses.reduce((prev, course) => { return prev.plus(course.cost); }, Big(0)).toFixed(2));

  return <AAPMain price={price.value} originalPrice={originalPrice} href={href} />;
};
