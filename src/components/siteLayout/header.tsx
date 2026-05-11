import type { FC } from 'react';

import { PromoBanner } from './promoBanner';
import { MainNav } from '../../app/(main)/mainNav';
import { Banner } from '../countDownTimer/banner';
import { may06 } from '@/periods';

interface Props {
  countryCode: string;
  provinceCode: string | null;
  date: number;
}

export const Header: FC<Props> = ({ date }) => {
  return (
    <header className={`flex-shrink-0`} style={{ position: 'sticky', top: 0, zIndex: 1020, width: '100%' }}>
      {/* eslint-disable-next-line no-constant-condition, no-constant-binary-expression, @typescript-eslint/no-unnecessary-condition, custom/no-unnecessary-condition-except-window */}
      {false && may06.contains(date)
        ? (
          <PromoBanner date={date} period={may06.toDTO()}>
            <span className="d-none d-lg-inline">Ends Soon—</span>Unlock Our Entire Event Planning Course Library
          </PromoBanner>
        )
        : (
          <Banner
            url="https://enroll.qceventplanning.com/all-access-program"
            message={(
              <span style={{ textTransform: 'uppercase' }}>
                <strong>BEST VALUE:</strong> Join the All-Access Program & Save <button className="btn btn-danger my-2 btn-sm ms-3 text-uppercase">Claim Offer</button>
              </span>
            )}
            showTimer={false}
            days={0}
            hours={0}
            minutes={0}
            seconds={0}
          />
        )
      }
      <MainNav />
    </header>
  );
};
