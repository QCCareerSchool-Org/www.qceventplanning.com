import type { FC } from 'react';

import { PromoBanner } from './promoBanner';
import { MainNav } from '../../app/(main)/mainNav';
import { feb04, feb13 } from '@/lib/periods';

interface Props {
  countryCode: string;
  date: number;
}

export const Header: FC<Props> = ({ date }) => {
  return (
    <header className={`flex-shrink-0`} style={{ position: 'sticky', top: 0, zIndex: 1020, width: '100%' }}>
      {feb04.contains(date)
        ? (
          <PromoBanner date={date} promotionPeriod={feb04.toObject()}>
            <span className="d-none d-lg-inline">Don't Miss Out—</span>Enroll Today and Get 2 Free Specialty Courses!
          </PromoBanner>
        )
        : feb13.contains(date)
          ? (
            <PromoBanner date={date} promotionPeriod={feb13.toObject()}>
              <span className="d-none d-lg-inline">Limited-Time Offer—</span>Get Two <strong>Free</strong> Specialty Courses
            </PromoBanner>
          )
          : null
      }
      <MainNav />
    </header>
  );
};
