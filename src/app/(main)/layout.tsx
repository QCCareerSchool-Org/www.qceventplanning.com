import type { Metadata } from 'next';

import { Footer } from './footer';
import { Header } from './header';
import type { LayoutComponent } from '@/app/serverComponent';
import { getData } from '@/lib/getData';

export const metadata: Metadata = {
  title: 'QC Event School',
};

const MainLayout: LayoutComponent = ({ children }) => {
  const { countryCode } = getData();
  return (
    <>
      <Header />
      <main className="flex-shrink-0">{children}</main>
      <Footer countryCode={countryCode} />
    </>
  );
};

export default MainLayout;
