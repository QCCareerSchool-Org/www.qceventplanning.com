import type { FC } from 'react';

import { PromoBanner } from './promoBanner';
import { MainNav } from '../../app/(main)/mainNav';
import { mar04 } from '@/periods';

interface Props {
  countryCode: string;
  date: number;
}

export const Header: FC<Props> = ({ date }) => {
  return (
    <header className={`flex-shrink-0`} style={{ position: 'sticky', top: 0, zIndex: 1020, width: '100%' }}>
      {mar04.contains(date)
        ? (
          <PromoBanner date={date} period={mar04.toDTO()}>
            <span className="d-none d-lg-inline">Don't Miss Out—</span>Get 2 specialty courses <strong>free</strong>
          </PromoBanner>
        )
        : null
      }
      <MainNav />
    </header>
  );
};
