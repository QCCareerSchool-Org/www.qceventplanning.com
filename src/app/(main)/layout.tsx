import type { Metadata } from 'next';
import type { LayoutComponent } from '../serverComponent';
import { Footer } from './footer';
import { Header } from './header';

export const metadata: Metadata = {
  title: 'QC Event School',
};

const MainLayout: LayoutComponent = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex-shrink-0">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
