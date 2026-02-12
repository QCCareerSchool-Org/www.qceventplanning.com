import type { FC, PropsWithChildren } from 'react';

import { CountDownTimer } from '../countDownTimer';
import type { LastChancePeriodDTO } from '@/lib/period';

interface Props {
  date: number;
  period: LastChancePeriodDTO;
}

export const PromoBanner: FC<PropsWithChildren<Props>> = ({ date, period, children }) => (
  <CountDownTimer
    date={date}
    startDate={period.start}
    countdownStartDate={period.lastChance}
    endDate={period.end}
    message={(
      <span style={{ textTransform: 'uppercase' }}>
        {children}<button className="btn btn-danger my-2 btn-sm ms-3 text-uppercase">Claim Offer</button>
      </span>
    )}
  />
);
