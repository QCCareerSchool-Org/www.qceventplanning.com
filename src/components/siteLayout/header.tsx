import type { FC } from 'react';

import { PromoBanner } from './promoBanner';
import { MainNav } from '../../app/(main)/mainNav';
import { CanadaHeader } from '../canadaHeader';
import { Banner } from '../countDownTimer/banner';
import { june13, june27 } from '@/periods';

interface Props {
  countryCode: string;
  provinceCode: string | null;
  date: number;
}

export const Header: FC<Props> = props => {
  return (
    <header className="flex-shrink-0" style={{ position: 'sticky', top: 0, zIndex: 1020, width: '100%' }}>
      <InnerBanner {...props} />
      <MainNav countryCode={props.countryCode} />
    </header>
  );
};

const InnerBanner: FC<Props> = ({ date, countryCode }) => {
  if (countryCode === 'CA') {
    return <CanadaHeader />;
  }

  if (june13.contains(date)) {
    return (
      <PromoBanner date={date} period={june13.toDTO()}>
        {countryCode === 'US'
          ? <>Ends Soon: Enroll today & Get 2 Free Specialty Courses</>
          : <><span className="d-none d-lg-inline">Ends Soon—</span>2 Free Specialty Courses</>
        }
      </PromoBanner>
    );
  }

  if (june27.contains(date)) {
    return (
      <PromoBanner date={date} period={june27.toDTO()}>
        {countryCode === 'US'
          ? <>4th of July Special:Get 2 Free Specialty Courses + $100 OFF</>
          : <><span className="d-none d-lg-inline">Ends Soon—</span>2 Free Specialty Courses + $100 OFF</>
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
