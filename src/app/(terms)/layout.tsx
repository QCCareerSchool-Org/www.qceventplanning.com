import '@/app/bootstrap.scss';
import type { FC } from 'react';

const TermsLayout: FC<LayoutProps<'/'>> = ({ children }) => (
  <>
    <main>{children}</main>
  </>
);

export default TermsLayout;
