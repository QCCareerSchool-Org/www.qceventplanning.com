import Big from 'big.js';
import type { FC } from 'react';

import { Main } from './main';
import { fetchPrice } from '@/lib/fetch';

interface Props {
  countryCode: string;
  provinceCode: string | null;
  href?: string;
}

export const AAP: FC<Props> = async ({ countryCode, provinceCode, href = 'https://enroll.qceventplanning.com/all-access-program' }) => {
  const [ price, combinedPrice ] = await Promise.all([
    fetchPrice([ 'aa' ], countryCode, provinceCode),
    fetchPrice([ 'ep', 'cp', 'ed', 'dw', 'lw', 'pe', 'fl', 'eb', 've' ], countryCode, provinceCode),
  ]);

  if (!price.success || !combinedPrice.success) {
    return;
  }
  const originalPrice = combinedPrice.value.courses.reduce((prev, course) => { return prev.plus(course.cost); }, Big(0)).toNumber();

  return <Main price={price.value} originalPrice={originalPrice} href={href} />;
};
