import type { FC, PropsWithChildren } from 'react';

import { Footer } from './footer';
import { Header } from './header';
import { TaxCreditsModal } from '@/components/taxCreditsModal';
import type { UserValues } from '@/domain/userValues';
import { LiveChat } from '@/scripts/liveChat';

import '@/app/bootstrap.scss';

interface Props {
  countryCode: string;
  provinceCode: string | null;
  date: number;
  userValues?: UserValues;
}

export const SiteLayout: FC<PropsWithChildren<Props>> = ({ countryCode, provinceCode, date, userValues, children }) => {

  return (
    <>
      <Header countryCode={countryCode} provinceCode={provinceCode} date={date} />
      <main className="flex-shrink-0">{children}</main>
      <Footer />
      {process.env.LIVECHAT_LICENSE && <LiveChat group={process.env.LIVECHAT_GROUP_ID} license={process.env.LIVECHAT_LICENSE} userValues={userValues} />}
      <TaxCreditsModal />
    </>
  );
};
