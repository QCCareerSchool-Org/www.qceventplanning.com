'use client';

import type { FC } from 'react';
import { useEffect, useState } from 'react';

import { Banner } from './banner';
import { getParts } from './getParts';

type Props = {
  date: number;
  countryCode: string;
};

const bannerStartDate = Date.UTC(2024, 11, 12, 19); // Dec 12, 2024 at 14:00 (19:00 UTC)
const countDownStartDate = Date.UTC(2024, 11, 18, 8); // Dec 18, 2024 at 03:00 (08:00 UTC)
const endDate = Date.UTC(2024, 11, 19, 8); // Dec 19, 2024 at 03:00 (08:00 UTC)

if (endDate < countDownStartDate) {
  throw Error('end is before count down start');
}

if (countDownStartDate < bannerStartDate) {
  throw Error('count down starts before banner starts');
}

export const CountDownTimer: FC<Props> = ({ date }) => {
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

    const showTimer = currentDate >= countDownStartDate;

    const message = showTimer
      ? <LastChanceMessage />
      : <RegularMessage />;

    return (
      <Banner
        url="https://enroll.qceventplanning.com"
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

const RegularMessage: FC = () => (
  <span style={{ textTransform: 'uppercase' }}>
    Get a Second Course FREE!
  </span>
);

const LastChanceMessage: FC = () => (
  <span style={{ textTransform: 'uppercase' }}>
    <strong style={{ color: '#f00', paddingRight: '0.125rem' }}>Last Chance:</strong> Get a Second Course FREE!
  </span>
);
