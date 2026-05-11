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
      {may06.contains(date)
        ? (
          <PromoBanner date={date} period={may06.toDTO()}>
            <span className="d-none d-lg-inline">Ends Soon—</span>Join the All-Access Program & Save
          </PromoBanner>
        )
        : (
          <Banner
            url="https://enroll.qceventplanning.com/all-access-program"
            message={(
              <span style={{ textTransform: 'uppercase' }}>
                <strong>BEST VALUE:</strong> Join the All-Access Program & Save
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
