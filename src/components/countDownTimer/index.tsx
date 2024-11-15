'use client';

import type { FC } from 'react';
import { useEffect, useState } from 'react';

import { Banner } from './banner';
import { getParts } from './getParts';

type Props = {
  date: number;
  countryCode: string;
};

const bannerStartDate = Date.UTC(2024, 10, 15, 21, 40); // November 15, 2024 at 16:40 (21:40 UTC)
const countDownStartDate = Date.UTC(2024, 10, 29, 8); // November 29, 2024 at 3:00 (08:00 UTC)
const endDate = Date.UTC(2024, 10, 30, 8); // November 30, 2024 at 03:00 (08:00 UTC)

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
      ? <RegularMessage />
      : <LastChanceMessage />;

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
    <strong style={{ color: '#f00', paddingRight: '0.125rem' }}>Last Chance:</strong> Get 2 Specialty Courses FREE!
  </span>
);

const LastChanceMessage: FC = () => (
  <span style={{ textTransform: 'uppercase' }}>
    <strong style={{ color: '#f00', paddingRight: '0.125rem' }}>Black Friday:</strong> Get 2 Specialty Courses FREE!
  </span>
);
