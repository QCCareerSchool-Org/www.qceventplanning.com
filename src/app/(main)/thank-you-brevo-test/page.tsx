import { headers } from 'next/headers';
import { Processing } from '../thank-you-course-catalog/processing';
import type { PageComponent } from '@/app/serverComponent';
import { getClientIp } from '@/lib/getClientIp';
import { getParam } from '@/lib/getParam';

const ThankYouBrevoTestPage: PageComponent = ({ searchParams }) => {
  const headerList = headers();
  const firstName = getParam(searchParams.firstName);
  const emailAddress = getParam(searchParams.emailAddress);
  const forwardedFor = headerList.get('x-forwarded-for') ?? undefined;
  const realIp = headerList.get('x-real-ip') ?? undefined;
  const ipAddress = getClientIp(forwardedFor, realIp) ?? undefined;
  const leadId = getParam(searchParams.leadId);

  return (
    <>
      <Processing emailAddress={emailAddress} firstName={firstName} ipAddress={ipAddress} leadId={leadId} />
      <section>
        <div className="container">
          <h1>
            {searchParams.firstName
              ? <>Thank You, {searchParams.firstName}!</>
              : <>Thank You!</>
            }
          </h1>
        </div>
      </section>
    </>
  );
};

export default ThankYouBrevoTestPage;
