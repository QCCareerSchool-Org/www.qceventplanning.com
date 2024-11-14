'use client';

import type { FC } from 'react';
import { useEffect, useState } from 'react';

import { Banner } from './banner';
import { getParts } from './getParts';
import { gbpCountry } from '@/domain/currency';

type Props = {
  date: number;
  countryCode: string;
};

const bannerStartDate = Date.UTC(2024, 10, 12, 17, 43); // November 12, 2024 at 12:30 (17:30 UTC)
const countDownStartDate = Date.UTC(2024, 10, 13, 17, 43); // November 13, 2024 at 12:30 (17:30 UTC)
const endDate = Date.UTC(2024, 10, 20, 5); // November 20, 2024 at 00:00 (05:00 UTC)

if (endDate < countDownStartDate) {
  throw Error('end is before count down start');
}

if (countDownStartDate < bannerStartDate) {
  throw Error('count down starts before banner starts');
}

export const CountDownTimer: FC<Props> = ({ date, countryCode }) => {
  const [ currentDate, setCurrentDate ] = useState(date);

  // keep track of the current time each second
  useEffect(() => {
    const id = setInterval(() => {
      setCurrentDate(d => d + 1000);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  if (currentDate >= bannerStartDate && currentDate < endDate) {
    const [ days, hours, minutes, seconds ] = getParts(endDate - currentDate);

    const discount = gbpCountry(countryCode) ? '£100' : '$100';

    const showTimer = currentDate >= countDownStartDate;

    const message = showTimer
      ? <RegularMessage discount={discount} />
      : <LastChanceMessage discount={discount} />;

    return (
      <Banner
        url="https://enroll.qcdesignschool.com"
        message={message}
        showTimer={showTimer}
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

const RegularMessage: FC<{ discount: string }> = ({ discount }) => (
  <span style={{ textTransform: 'uppercase' }}>
    <strong style={{ color: '#f00', paddingRight: '0.125rem' }}>Black Friday Ending:</strong> BOGO Any Course + {discount} Off
  </span>
);

const LastChanceMessage: FC<{ discount: string }> = ({ discount }) => (
  <span style={{ textTransform: 'uppercase' }}>
    <strong style={{ color: '#f00', paddingRight: '0.125rem' }}>Black Friday:</strong> BOGO Any Course + {discount} Off
  </span>
);
