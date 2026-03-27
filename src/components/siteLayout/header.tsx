import type { FC } from 'react';

import { PromoBanner } from './promoBanner';
import { MainNav } from '../../app/(main)/mainNav';
import { AAPSavings } from '../aapSavings';
import { Banner } from '../countDownTimer/banner';
import { gbpCountry } from '@/domain/currency';
import { mar18 } from '@/periods';

interface Props {
  countryCode: string;
  provinceCode: string | null;
  date: number;
}

export const Header: FC<Props> = ({ countryCode, provinceCode, date }) => {
  const discount = gbpCountry(countryCode) ? '£100' : '$100';
  return (
    <header className={`flex-shrink-0`} style={{ position: 'sticky', top: 0, zIndex: 1020, width: '100%' }}>
      {!mar18.contains(date)
        ? (
          <PromoBanner date={date} period={mar18.toDTO()}>
            <span className="d-none d-lg-inline">Don't Miss Out—</span>Get 2 free specialty courses <strong>+ {discount} OFF</strong>
          </PromoBanner>
        )
        : (
          <Banner
            url="https://enroll.qceventplanning.com/masterclass-offer"
            message={(
              <span style={{ textTransform: 'uppercase' }}>
                <strong>BEST VALUE:</strong> Join the All-Access Program & Save <AAPSavings countryCode={countryCode} provinceCode={provinceCode} />+ <button className="btn btn-danger my-2 btn-sm ms-3 text-uppercase">Claim Offer</button>
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
