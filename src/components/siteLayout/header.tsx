import type { FC } from 'react';

import { MainNav } from '../../app/(main)/mainNav';
import { CountDownTimer } from '@/components/countDownTimer';
import { feb04 } from '@/lib/promotionPeriods';

interface Props {
  countryCode: string;
  date: number;
}

export const Header: FC<Props> = ({ date }) => {
  return (
    <header className={`flex-shrink-0`} style={{ position: 'sticky', top: 0, zIndex: 1020, width: '100%' }}>
      <CountDownTimer
        date={date}
        startDate={feb04.start}
        countdownStartDate={feb04.lastChance}
        endDate={feb04.end}
        message={(
          <span style={{ textTransform: 'uppercase' }}>
            <span className="d-none d-lg-inline">Don't Miss Out—</span>Enroll Today and Get 2 Free Specialty Courses!<br className="d-lg-none" /><button className="btn btn-danger my-2 btn-sm ms-3 text-uppercase">Claim Offer</button>
          </span>
        )}
      />
      <MainNav />
    </header>
  );
};
