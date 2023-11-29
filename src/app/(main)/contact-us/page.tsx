import type { Metadata } from 'next';

import type { PageComponent } from '@/app/serverComponent';
import { getData } from '@/lib/getData';
import { getTelephoneNumber } from '@/lib/telephone';

export const metadata: Metadata = {
  title: 'Contact Us - QC Event School',
};

const ContactUsPage: PageComponent = () => {
  const { countryCode } = getData();
  const telephoneNumber = getTelephoneNumber(countryCode);

  return (
    <>
      <section>
        <div className="container">
          <h1>Contact Us</h1>
          {telephoneNumber}
        </div>
      </section>
    </>
  );
};

export default ContactUsPage;
