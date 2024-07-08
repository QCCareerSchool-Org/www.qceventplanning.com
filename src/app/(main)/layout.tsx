import type { Metadata } from 'next';
import { Suspense } from 'react';

import { LayoutClient } from '../layoutClient';
import { Footer } from './footer';
import { Header } from './header';
import type { LayoutComponent } from '@/app/serverComponent';
import '@/app/bootstrap.scss';
import { LiveChat } from '@/scripts/liveChat';

export const metadata: Metadata = {
  title: 'QC Event School',
};

const MainLayout: LayoutComponent = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex-shrink-0">{children}</main>
      <Footer />
      <LiveChat license={1056788} group={1} />
      <Suspense><LayoutClient /></Suspense>
    </>
  );
};

export default MainLayout;
