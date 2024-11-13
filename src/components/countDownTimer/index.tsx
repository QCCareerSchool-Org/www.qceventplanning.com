'use client';

import type { FC } from 'react';
import { useEffect, useState } from 'react';

import { getParts } from './getParts';

type Props = {
  date: number;
};

const startBannerDate = Date.UTC(2024, 10, 12, 17, 43); // November 12, 2024 at 12:30 (17:30 UTC)
const startCountdownDate = Date.UTC(2024, 10, 13, 17, 43); // November 13, 2024 at 12:30 (17:30 UTC)
const endDate = Date.UTC(2024, 10, 20, 5); // November 20, 2024 at 00:00 (05:00 UTC)

export const CountDownTimer: FC<Props> = ({ date }) => {
  const [ currentDate, setCurrentDate ] = useState(date);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentDate(d => d + 1000);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  if (currentDate >= startBannerDate && currentDate < endDate) {
    const [ days, hours, minutes, seconds ] = getParts(endDate - currentDate);

    const daysDisabled = days === 0;
    const hoursDisabled = hours === 0 && daysDisabled;
    const minutesDisabled = minutes === 0 && hoursDisabled;
    const secondsDisabled = seconds === 0 && minutesDisabled;

    return (
      <div
        className="fw-bold text-center py-2 bg-black text-white"
      >
        Hurry up, we're almost out!
        {currentDate >= startCountdownDate &&
          <div className="d-flex justify-content-center align-items-center gap-3 gap-sm-4">
            <CountDownElement number={days} name="day" disabled={daysDisabled} />
            <CountDownElement number={hours} name="hour" disabled={hoursDisabled} />
            <CountDownElement number={minutes} name="minute" disabled={minutesDisabled} />
            <CountDownElement number={seconds} name="second" disabled={secondsDisabled} />
          </div>
        }
      </div>
    );
  }
};

export const CountDownElement: FC<{ name: string; number: number; disabled: boolean }> = ({ name, number, disabled }) => (
  <div className="fw-bold text-center d-flex flex-column justify-content-center align-items-center" style={{ width: '40px' }}>
    <span className={`fs-2 fs-sm-1 display-lg-5 ${disabled ? 'text-secondary' : ''}`}>
      {number.toString().padStart(2, '0')}
    </span>
    <span style={{ fontSize: '0.75rem', marginTop: '-10px' }}>
      {name}{number !== 1 && 's'}
    </span>
  </div>
);
