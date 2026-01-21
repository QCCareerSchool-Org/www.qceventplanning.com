import type { FC } from 'react';

import { NewYear2026 } from '@/components/promos/newYear2026';
import { jan21Period } from '@/lib/promotionPeriods';

interface Props {
  date: number;
  countryCode: string;
}

export const CurrentPromotion: FC<Props> = ({ date, countryCode }) => {
  if (jan21Period.contains(date)) {
    return <NewYear2026 countryCode={countryCode} />;
  }
};
