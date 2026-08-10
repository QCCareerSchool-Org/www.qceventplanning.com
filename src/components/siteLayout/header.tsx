import type { FC } from 'react';

import { PromoBanner } from './promoBanner';
import { MainNav } from '../../app/(main)/mainNav';
import { Banner } from '../countDownTimer/banner';
import { august14, july08 } from '@/periods';

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

const InnerBanner: FC<Props> = ({ date }) => {
  if (july08.contains(date)) {
    return (
      <PromoBanner date={date} period={july08.toDTO()}>
        <span className="d-none d-lg-inline">Ends Soon—</span>Enroll Today & Get 2 Free Specialty Courses
      </PromoBanner>
    );
  }

  if (august14.contains(date)) {
    return (
      <PromoBanner date={date} period={august14.toDTO()}>
        <span className="d-none d-lg-inline">Early Back to School Offer: </span>Get 2 FREE Specialty Courses + Textbooks
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
