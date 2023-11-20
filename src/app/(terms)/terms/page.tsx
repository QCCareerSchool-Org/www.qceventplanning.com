import type { Metadata } from 'next';

import type { PageComponent } from '@/app/serverComponent';

export const metadata: Metadata = {
  title: 'Privacy Policy and Terms of Service - QC Event School',
};

const TermsPage: PageComponent = () => (
  <>
    <h1>Terms</h1>
  </>
);

export default TermsPage;
