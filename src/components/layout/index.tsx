import type { FC, PropsWithChildren } from 'react';

import { Footer } from './footer';
import { Header } from './header';
import { TaxCreditsModal } from '@/components/taxCreditsModal';
import { BrevoConversations } from '@/scripts/brevoCoversations';

import '@/app/bootstrap.scss';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex-shrink-0">{children}</main>
      <Footer />
      {process.env.BREVO_CONVERSATIONS_ID && <BrevoConversations conversationsId={process.env.BREVO_CONVERSATIONS_ID} />}
      <TaxCreditsModal />
    </>
  );
};
