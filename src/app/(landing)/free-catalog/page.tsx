import type { Metadata } from 'next';

import type { PageComponent } from '@/app/serverComponent';
import { BrochureForm } from '@/components/brochureForm';

export const metadata: Metadata = {
  title: 'Free Catalog - QC Event School',
};

const FreeCatalogPage: PageComponent = () => {
  return (
    <section>
      <div className="container">
        <h1>Free Catalog</h1>
        <BrochureForm action="https://go.qceventplanning.com/l/947642/2022-02-15/8n8h7" />
      </div>
    </section>
  );
};

export default FreeCatalogPage;
