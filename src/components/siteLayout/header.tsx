import type { FC } from 'react';

import { PromoBanner } from './promoBanner';
import { MainNav } from '../../app/(main)/mainNav';
import { gbpCountry } from '@/domain/currency';
import { feb19 } from '@/periods';

interface Props {
  countryCode: string;
  date: number;
}

export const Header: FC<Props> = ({ date, countryCode }) => {
  const discount = gbpCountry(countryCode) ? '£100' : '$100';

  return (
    <header className={`flex-shrink-0`} style={{ position: 'sticky', top: 0, zIndex: 1020, width: '100%' }}>
      {feb19.contains(date)
        ? (
          <PromoBanner date={date} period={feb19.toDTO()}>
            <span className="d-none d-lg-inline">Don't Miss Out—</span>BOGO + {discount} OFF
          </PromoBanner>
        )
        : null
      }
      <MainNav />
    </header>
  );
};
