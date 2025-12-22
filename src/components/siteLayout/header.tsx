import type { FC } from 'react';

import { MainNav } from '../../app/(main)/mainNav';
// import { CanadaHeader } from '@/components/canadaHeader';
import { CountDownTimer } from '@/components/countDownTimer';
import { gbpCountry } from '@/domain/currency';
import { getServerData } from '@/lib/getData';

const bannerStartDate = Date.UTC(2025, 11, 1, 5); // 2025-12-01T00:00 (05:00 UTC)
const bannerCountdownStartDate = Date.UTC(2025, 11, 5, 8); // 2025-12-05T03:00 (08:00 UTC)
const bannerEndDate = Date.UTC(2025, 11, 6, 8); // 2025-12-06T03:00 (8:00 UTC)

export const Header: FC = async () => {
  const date = new Date().getTime();
  const { countryCode } = await getServerData();
  const discount = gbpCountry(countryCode) ? '£100' : '$100';

  return (
    <header className={`flex-shrink-0`} style={{ position: 'sticky', top: 0, zIndex: 1020, width: '100%' }}>
      <CountDownTimer
        date={date}
        startDate={bannerStartDate}
        countdownStartDate={bannerCountdownStartDate}
        endDate={bannerEndDate}
        message={(
          <span style={{ textTransform: 'uppercase' }}>
            <span className="d-none d-lg-inline">Don't Miss Out—</span>Cyber Monday Savings Are Here! Get <strong>TWO</strong> Free Specialty Courses Plus {discount} Off<br className="d-lg-none" /><button className="btn btn-danger my-2 btn-sm ms-3 text-uppercase">Claim Offer</button>
          </span>
        )}
        lastChanceMessage={(
          <span style={{ textTransform: 'uppercase' }}>
            <span className="d-none d-lg-inline">Don't Miss Out—</span>Cyber Monday Savings Are Here! Get <strong>TWO</strong> Free Specialty Courses Plus {discount} Off<br /><button className="btn btn-danger my-2 btn-sm ms-3 text-uppercase">Claim Offer</button>
          </span>
        )}
      />
      {/* {countryCode === 'CA' && <CanadaHeader />} */}
      <MainNav />
    </header>
  );
};
