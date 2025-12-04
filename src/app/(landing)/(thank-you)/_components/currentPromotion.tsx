import type { FC } from 'react';

import { CyberMonday2025 } from '@/components/promos/cyberWeek2025';

interface Props {
  date: number;
  countryCode: string;
}

export const CurrentPromotion: FC<Props> = ({ date, countryCode }) => {
  if (date >= Date.UTC(2025, 11, 1, 5) && date < Date.UTC(2025, 11, 6, 8)) { // 2025-12-01T00:00 (05:00 UTC) to 2025-12-06T03:00 (08:00 UTC)
    return <CyberMonday2025 countryCode={countryCode} />;
  }
};
