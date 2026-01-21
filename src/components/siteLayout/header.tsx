import type { FC } from 'react';
import { useMemo } from 'react';

import { MainNav } from '../../app/(main)/mainNav';
import { CountDownTimer } from '@/components/countDownTimer';
import { gbpCountry } from '@/domain/currency';
import { jan21Period } from '@/lib/promotionPeriods';

interface Props {
  countryCode: string;
  date: number;
}

export const Header: FC<Props> = ({ countryCode, date }) => {

  const dates: [start: number, countDown: number, end: number] | undefined = useMemo(() => {
    if (jan21Period.contains(date)) {
      return [
        jan21Period.start,
        jan21Period.end - 86_400, // one day
        jan21Period.end,
      ];
    }
  }, [ date ]);

  const discount = gbpCountry(countryCode) ? '£100' : '$100';

  return (
    <header className={`flex-shrink-0`} style={{ position: 'sticky', top: 0, zIndex: 1020, width: '100%' }}>
      {dates && <CountDownTimer
        date={date}
        startDate={dates[0]}
        countdownStartDate={dates[1]}
        endDate={dates[2]}
        message={(
          <span style={{ textTransform: 'uppercase' }}>
            <span className="d-none d-lg-inline">Don't Miss Out—</span> Get <strong>any free course</strong> and {discount} Off<br className="d-lg-none" /><button className="btn btn-danger my-2 btn-sm ms-3 text-uppercase">Claim Offer</button>
          </span>
        )}
      />}
      <MainNav />
    </header>
  );
};
