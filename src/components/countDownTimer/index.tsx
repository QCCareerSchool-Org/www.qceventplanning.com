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

const bannerStartDate = Date.UTC(2025, 11, 1, 5); // 2025-12-01T00:00 (05:00 UTC)
const countDownStartDate = Date.UTC(2025, 11, 5, 8); // 2025-12-05T03:00 (08:00 UTC)
const endDate = Date.UTC(2025, 11, 6, 8); // 2025-12-06T03:00 (8:00 UTC)

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

    const showTimer = currentDate >= countDownStartDate;

    const message = showTimer
      ? <LastChanceMessage countryCode={countryCode} />
      : <RegularMessage countryCode={countryCode} />;

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

type MessageProps = {
  countryCode: string;
};

const RegularMessage: FC<MessageProps> = ({ countryCode }) => {
  const discount = gbpCountry(countryCode) ? '£100' : '$100';
  return (
    <span style={{ textTransform: 'uppercase' }}>
      <span className="d-none d-lg-inline">Don't Miss Out—</span>Cyber Monday Savings Are Here! Get <strong>TWO</strong> Free Specialty Courses Plus {discount} Off<br className="d-lg-none" /><button className="btn btn-danger my-2 btn-sm ms-3 text-uppercase">Claim Offer</button>
    </span>
  );
};

const LastChanceMessage: FC<MessageProps> = ({ countryCode }) => {
  const discount = gbpCountry(countryCode) ? '£100' : '$100';
  return (
    <span style={{ textTransform: 'uppercase' }}>
      <span className="d-none d-lg-inline">Don't Miss Out—</span>Cyber Monday Savings Are Here! Get <strong>TWO</strong> Free Specialty Courses Plus {discount} Off<br /><button className="btn btn-danger my-2 btn-sm ms-3 text-uppercase">Claim Offer</button>
    </span>
  );
};
