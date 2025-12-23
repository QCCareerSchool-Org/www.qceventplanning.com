import type { FC } from 'react';
import { useMemo } from 'react';

import { MainNav } from '../../app/(main)/mainNav';
import { CountDownTimer } from '@/components/countDownTimer';
import { gbpCountry } from '@/domain/currency';
import { endOfYear2025, newYear2026 } from '@/lib/promotionPeriods';

interface Props {
  countryCode: string;
  date: number;
}

export const Header: FC<Props> = ({ countryCode, date }) => {

  const dates: [start: number, countDown: number, end: number] | undefined = useMemo(() => {
    if (endOfYear2025.contains(date)) {
      return [
        endOfYear2025.start,
        endOfYear2025.end - 86_400, // one day
        endOfYear2025.end,
      ];
    } else if (newYear2026.contains(date)) {
      return [
        newYear2026.start,
        newYear2026.end - 86_400, // one day,
        newYear2026.end,
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
            {endOfYear2025.contains(date)
              ? <><span className="d-none d-lg-inline">Don't Miss Out—</span> Get a second course <strong>free</strong><br className="d-lg-none" /><button className="btn btn-danger my-2 btn-sm ms-3 text-uppercase">Claim Offer</button></>
              : <><span className="d-none d-lg-inline">Don't Miss Out—</span> Get a second course <strong>free</strong> and {discount} Off<br className="d-lg-none" /><button className="btn btn-danger my-2 btn-sm ms-3 text-uppercase">Claim Offer</button></>
            }
          </span>
        )}
      />}
      <MainNav />
    </header>
  );
};
