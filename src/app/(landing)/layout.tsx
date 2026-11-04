import type { FC } from 'react';

import { Footer } from './footer';

import '@/app/bootstrap.scss';
import './landing.scss';

/**
 * The header, if any, should be included on the page
 */
const LandingLayout: FC<LayoutProps<'/'>> = ({ children }) => (
  <>
    <main className="flex-shrink-0">{children}</main>
    <Footer />
  </>
);

export default LandingLayout;
