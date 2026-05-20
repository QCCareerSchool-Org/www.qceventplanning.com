import type { FC } from 'react';

import { PromoBanner } from './promoBanner';
import { MainNav } from '../../app/(main)/mainNav';
import { CanadaHeader } from '../canadaHeader';
import { Banner } from '../countDownTimer/banner';
import { may16 } from '@/periods';

interface Props {
  countryCode: string;
  provinceCode: string | null;
  date: number;
}

export const Header: FC<Props> = props => {
  return (
    <header className="flex-shrink-0" style={{ position: 'sticky', top: 0, zIndex: 1020, width: '100%' }}>
      <InnerBanner {...props} />
      <MainNav />
    </header>
  );
};

const InnerBanner: FC<Props> = ({ date, countryCode }) => {
  if (countryCode === 'CA') {
    return <CanadaHeader />;
  }

  if (may16.contains(date)) {
    return (
      <PromoBanner date={date} period={may16.toDTO()}>
        {countryCode === 'US'
          ? <>Memorial Week Special: 2 Free Specialy Courses</>
          : <><span className="d-none d-lg-inline">Ends Soon—</span>2 Free Specialy Courses</>
        }
      </PromoBanner>
    );
  }

  return (
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
  );
};
