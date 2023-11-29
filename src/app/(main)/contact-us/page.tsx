import type { PageComponent } from '@/app/serverComponent';
import { getData } from '@/lib/getData';
import { getTelephoneNumber } from '@/lib/telephone';

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
