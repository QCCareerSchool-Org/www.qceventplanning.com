import type { FC } from 'react';

import { NewYears2025 } from '@/components/promos/newYears2025';

interface Props {
  date: number;
  countryCode: string;
}

export const CurrentPromotion: FC<Props> = ({ date, countryCode }) => {
  if (date >= Date.UTC(2025, 11, 26, 8) && date < Date.UTC(2026, 0, 17, 8)) { // 2025-12-26T03:00 (8:00 UTC) to 2026-01-17T03:00 (8:00 UTC)
    return <NewYears2025 countryCode={countryCode} date={date} />;
  }
  return null;
};
