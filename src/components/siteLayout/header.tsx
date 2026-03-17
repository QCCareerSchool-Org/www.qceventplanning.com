import type { FC } from 'react';

import { PromoBanner } from './promoBanner';
import { MainNav } from '../../app/(main)/mainNav';
import { gbpCountry } from '@/domain/currency';
import { mar18 } from '@/periods';

interface Props {
  countryCode: string;
  date: number;
}

export const Header: FC<Props> = ({ countryCode, date }) => {
  const discount = gbpCountry(countryCode) ? '£100' : '$100';
  return (
    <header className={`flex-shrink-0`} style={{ position: 'sticky', top: 0, zIndex: 1020, width: '100%' }}>
      {mar18.contains(date)
        ? (
          <PromoBanner date={date} period={mar18.toDTO()}>
            <span className="d-none d-lg-inline">Don't Miss Out—</span>Get 2 free specialty courses <strong>+ {discount} OFF</strong>
          </PromoBanner>
        )
        : null
      }
      <MainNav />
    </header>
  );
};
