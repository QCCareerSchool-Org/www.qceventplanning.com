import type { FC, PropsWithChildren } from 'react';

import { Footer } from './footer';
import { Header } from './header';
import { TaxCreditsModal } from '@/components/taxCreditsModal';
import { BrevoConversations } from '@/scripts/brevoConversations';

import '@/app/bootstrap.scss';

interface Props {
  countryCode: string;
  date: number;
}

export const SiteLayout: FC<PropsWithChildren<Props>> = ({ countryCode, date, children }) => {
  return (
    <>
      <Header countryCode={countryCode} date={date} />
      <main className="flex-shrink-0">{children}</main>
      <Footer />
      {process.env.BREVO_CONVERSATIONS_ID && process.env.BREVO_GROUP_ID && <BrevoConversations conversationsId={process.env.BREVO_CONVERSATIONS_ID} groupId={process.env.BREVO_GROUP_ID} />}
      <TaxCreditsModal />
    </>
  );
};
