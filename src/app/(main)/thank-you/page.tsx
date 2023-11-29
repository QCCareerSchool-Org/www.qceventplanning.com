import type { PageComponent } from '@/app/serverComponent';

const ThankYouPage: PageComponent = ({ searchParams }) => {
  const firstName = getParam(searchParams.firstName);
  const lastName = getParam(searchParams.lastName);
  const emailAddress = getParam(searchParams.emailAddress);
  const emailOptIn = getParam(searchParams.emailOptIn);

  return (
    <>
      <section>
        <div className="container">
          <h1>Your Course Catalog</h1>
          {firstName && <p>Thanks, {firstName}!</p>}
          {lastName}
          {emailAddress}
          {emailOptIn}
        </div>
      </section>
    </>
  );
};

export default ThankYouPage;

const getParam = (param: string[] | string | undefined): string | undefined => {
  return Array.isArray(param)
    ? param[0]
    : param;
};
