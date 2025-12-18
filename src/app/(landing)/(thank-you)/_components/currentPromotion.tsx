import type { FC } from 'react';

import { BoxingDay2025 } from '@/components/promos/boxingDay2025';

interface Props {
  date: number;
  countryCode: string;
}

export const CurrentPromotion: FC<Props> = ({ date, countryCode }) => {
  if (date >= Date.UTC(2025, 11, 26, 8) && date < Date.UTC(2026, 0, 3, 8)) { // 2025-12-26T03:00 (8:00 UTC) to 2026-01-03T03:00 (8:00 UTC)
    return <BoxingDay2025 countryCode={countryCode} />;
  }
};
