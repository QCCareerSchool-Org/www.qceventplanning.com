import type { PageComponent } from '@/app/serverComponent';
import { getData } from '@/lib/getData';
import { getTelephoneNumber } from '@/lib/telephone';

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
