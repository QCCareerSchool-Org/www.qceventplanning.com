import type { Metadata } from 'next';

import type { PageComponent } from '@/app/serverComponent';
import { getData } from '@/lib/getData';
import { getTelephoneNumber } from '@/lib/telephone';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions - QC Event School',
};

const FAQPage: PageComponent = () => {
  const { countryCode } = getData();
  const telephoneNumber = getTelephoneNumber(countryCode);

  return (
    <>
      <section>
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          {telephoneNumber}
        </div>
      </section>
    </>
  );
};

export default FAQPage;
