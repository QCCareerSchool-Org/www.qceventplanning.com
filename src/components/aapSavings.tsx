import Big from 'big.js';
import type { FC } from 'react';

import { aapCourseCodes } from '@/domain/courseCode';
import { fetchPrice } from '@/lib/fetchPrice';
import { formatPrice } from '@/lib/formatPrice';

interface Props {
  countryCode: string;
  provinceCode: string | null;
}

export const AAPSavings: FC<Props> = async ({ countryCode, provinceCode }) => {
  const [ price, combinedPrice ] = await Promise.all([
    fetchPrice([ 'aa' ], countryCode, provinceCode, undefined, undefined, process.env.FIREWALL_BYPASS_SECRET),
    fetchPrice(aapCourseCodes, countryCode, provinceCode, undefined, undefined, process.env.FIREWALL_BYPASS_SECRET),
  ]);

  if (!price.success || !combinedPrice.success) {
    return;
  }
  const originalPrice = combinedPrice.value.courses.reduce((prev, course) => { return prev.plus(course.cost); }, Big(0));

  const aapPrice = price.value.plans.full.total;

  const savings = originalPrice.minus(aapPrice);

  return `${price.value.currency.symbol}${formatPrice(parseFloat(savings.toFixed(2)))}`;
};
