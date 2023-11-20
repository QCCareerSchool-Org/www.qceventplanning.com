import type { LayoutComponent } from '../serverComponent';

const TermsLayout: LayoutComponent = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default TermsLayout;
