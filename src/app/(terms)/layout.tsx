import type { LayoutComponent } from '@/app/serverComponent';

import '@/app/bootstrap.scss';

const TermsLayout: LayoutComponent = ({ children }) => (
  <>
    <main>{children}</main>
  </>
);

export default TermsLayout;
