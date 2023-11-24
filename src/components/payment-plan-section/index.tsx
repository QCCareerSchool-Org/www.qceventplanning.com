import type { FC } from 'react';

import type { Price } from '@/domain/price';
import { isPrice } from '@/domain/price';

type Props = {
  countryCode: string | null;
  provinceCode: string | null;
  courseCodes: string[];
  className?: string;
};

export const PaymentPlanSection: FC<Props> = async ({ countryCode, provinceCode, courseCodes, className }) => {
  const price = await getPrice(countryCode, provinceCode, courseCodes);

  return (
    <section className={className ?? 'bg-light'}>
      <div className="container">
        <h2>Tuition &amp; Payment Plans</h2>
        <pre>{JSON.stringify(price)}</pre>
      </div>
    </section>
  );
};

const getPrice = async (countryCode: string | null, provinceCode: string | null, courseCodes: string[]): Promise<Price> => {
  const queryParams = courseCodes.map(c => `courses[]=${encodeURIComponent(c)}`);
  if (countryCode) {
    queryParams.push(`countryCode=${encodeURIComponent(countryCode)}`);
    if (provinceCode) {
      queryParams.push(`provinceCode=${encodeURIComponent(provinceCode)}`);
    }
  } else {
    queryParams.push('countryCode=US');
    queryParams.push('provinceCode=MD');
  }

  const url = `https://api.qccareerschool.com/prices?${queryParams.join('&')}`;

  const response = await fetch(url, {
    headers: { 'x-api-version': '2' },
  });
  if (!response.ok) {
    throw Error(response.statusText);
  }

  const body: unknown = await response.json();
  if (isPrice(body)) {
    return body;
  }

  throw Error('Invalid response');
};
