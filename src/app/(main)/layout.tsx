import { Suspense } from 'react';

import { LayoutClient } from '../layoutClient';
import { Footer } from './footer';
import { Header } from './header';
import type { LayoutComponent } from '@/app/serverComponent';
import { TaxCreditsModal } from '@/components/taxCreditsModal';
import { BrevoConversations } from '@/scripts/brevoCoversations';

import '@/app/bootstrap.scss';

const MainLayout: LayoutComponent = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex-shrink-0">{children}</main>
      <Footer />
      {process.env.BREVO_CONVERSATIONS_ID && <BrevoConversations conversationsId={process.env.BREVO_CONVERSATIONS_ID} />}
      <Suspense><LayoutClient /></Suspense>
      <TaxCreditsModal />
    </>
  );
};

export default MainLayout;
