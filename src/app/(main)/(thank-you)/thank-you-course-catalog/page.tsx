import type { Metadata } from 'next';
import { cookies, headers } from 'next/headers';
import Link from 'next/link';

import type { PageComponent } from '@/app/serverComponent';
import { EmailSentToast } from '@/components/emailSentToast';
import { LeadProcessing } from '@/components/leadProcessing';
// import { TelephoneFormSection } from '@/components/telephoneFormSection';
import { fbPostLead } from '@/lib/facebookConversionAPI';
import { getParam } from '@/lib/getParam';

export const metadata: Metadata = {
  title: 'Your Course Catalog',
  alternates: { canonical: '/thank-you-course-catalog' },
  robots: { index: false },
};

const ThankYouCourseCatalogPage: PageComponent = async ({ searchParams }) => {
  const leadId = getParam(searchParams.leadId);
  const firstName = getParam(searchParams.firstName);
  const lastName = getParam(searchParams.lastName);
  const emailAddress = getParam(searchParams.emailAddress);
  const countryCode = getParam(searchParams.countryCode);
  const provinceCode = getParam(searchParams.provinceCode);
  const headerList = headers();
  const ipAddress = headerList.get('x-real-ip') ?? undefined;
  const userAgent = headerList.get('user-agent') ?? undefined;
  const cookieStore = cookies();
  const fbc = cookieStore.get('_fbc')?.value;
  const fbp = cookieStore.get('_fbp')?.value;

  try {
    if (leadId && emailAddress) {
      await fbPostLead(leadId, new Date(), emailAddress, firstName, lastName, countryCode, provinceCode, ipAddress, userAgent, fbc, fbp);
    }
  } catch (err) {
    console.error(err);
  }

  return (
    <>
      {emailAddress && <EmailSentToast emailAddress={emailAddress} firstName={firstName} />}
      <LeadProcessing
        emailAddress={emailAddress}
        countryCode={countryCode}
        provinceCode={provinceCode}
        firstName={firstName}
        lastName={lastName}
        ipAddress={ipAddress}
        leadId={leadId}
        conversionId="AW-1071836607/9wB_CNvknggQv9uL_wM"
      />
      {/* {leadId && validCountryForSMS(countryCode) && <TelephoneFormSection leadId={leadId} countryCode={countryCode} />} */}
      <section className="bg-navy text-white">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-7">
              <h2 className="mb-4">Get Personalized Guidance</h2>
              <p className="lead mb-4">Need help with payment plans or course details? Our Student Support Advisors are ready to assist you. Ask us anything!</p>
              <Link href="/contact-us" className="btn btn-lg btn-primary">Talk to an Advisor Now</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// const validCountryForSMS = (countrycode?: string): boolean => countrycode === 'CA' || countrycode === 'US';

export default ThankYouCourseCatalogPage;
