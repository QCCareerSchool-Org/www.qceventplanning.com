import type { FC } from 'react';

import { BlackFridaySection } from '@/components/blackFridaySection';
import { november16 } from '@/periods';

interface Props {
  date: number;
  countryCode: string;
}

export const CurrentPromotion: FC<Props> = ({ date }) => {
  if (date < november16.end) {
    return <BlackFridaySection />;
  }
};
