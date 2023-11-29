import type { PageComponent } from '@/app/serverComponent';

const ThankYouPage: PageComponent = ({ searchParams }) => {
  return (
    <>
      <section>
        <div className="container">
          <h1>Your Course Catalog</h1>
        </div>
      </section>
    </>
  );
};

export default ThankYouPage;
