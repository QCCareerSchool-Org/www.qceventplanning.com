import { Footer } from './footer';
import { Header } from './header';
import type { LayoutComponent } from '@/app/serverComponent';

const LandingLayout: LayoutComponent = ({ children }) => (
  <>
    <Header />
    <main className="flex-shrink-0">{children}</main>
    <Footer />
  </>
);

export default LandingLayout;
