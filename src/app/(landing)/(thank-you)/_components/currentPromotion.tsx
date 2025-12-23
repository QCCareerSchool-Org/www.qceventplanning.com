import type { FC } from 'react';

import { NewYears2025 } from '@/components/promos/newYears2025';
import { PromotionPeriod } from '@/lib/promotionPeriod';
import { endOfYear2025, newYear2026 } from '@/lib/promotionPeriods';

interface Props {
  date: number;
  countryCode: string;
}

const span = PromotionPeriod.span(endOfYear2025, newYear2026);

export const CurrentPromotion: FC<Props> = ({ date, countryCode }) => {
  if (span.contains(date)) {
    return <NewYears2025 countryCode={countryCode} date={date} />;
  }
};
