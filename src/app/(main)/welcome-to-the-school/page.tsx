import type { Metadata } from 'next';
import { cookies, headers } from 'next/headers';
import Image from 'next/image';
import { redirect } from 'next/navigation';

import AlexSignatureImage from './alex-myers.png';
import { Processing } from './processing';
import type { PageComponent } from '@/app/serverComponent';
import { EnrollmentDetails } from '@/components/enrollmentDetails';
import { TelephoneLink } from '@/components/telephoneLink';
import { addToIDevAffiliate } from '@/lib/addToIDevAffiliate';
import { createBrevoContact } from '@/lib/brevoAPI';
import { fbPostPurchase } from '@/lib/facebookConversionAPI';
import { getEnrollment } from '@/lib/fetch';
import { getParam } from '@/lib/getParam';
import { sendEnrollmentEmail } from '@/lib/sendEnrollmentEmail';

const brevoStudentListId = 14;

export const metadata: Metadata = {
  title: 'Thank You for Enrolling with QC Event School!',
  alternates: {
    canonical: '/welcome-to-the-school',
  },
};

const WelcomeToTheSchoolPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const enrollmentIdParam = getParam(searchParams.enrollmentId);
  const codeParam = getParam(searchParams.code);

  if (typeof enrollmentIdParam === 'undefined' || typeof codeParam === 'undefined') {
    redirect('/');
  }

  const enrollmentId = parseInt(enrollmentIdParam, 10);
  if (isNaN(enrollmentId)) {
    redirect('/');
  }

  const enrollment = await getEnrollment(enrollmentId, codeParam);

  if (!enrollment.success) {
    redirect('/');
  }

  if (!enrollment.emailed) {
    const headerList = await headers();
    const ipAddress = headerList.get('x-real-ip');
    const userAgent = headerList.get('user-agent');

    const cookieStore = await cookies();
    const fbc = cookieStore.get('_fbc')?.value;
    const fbp = cookieStore.get('_fbp')?.value;

    // send email
    try {
      await sendEnrollmentEmail(enrollmentId, codeParam);
    } catch (err) {
      console.error(err);
    }

    // create Brevo contact
    try {
      await createBrevoContact(enrollment.emailAddress, enrollment.firstName, enrollment.lastName, enrollment.countryCode, enrollment.provinceCode, { STATUS_EVENT_STUDENT: true }, [ brevoStudentListId ]);
    } catch (err) {
      console.error(err);
    }

    // iDevAffiliate
    try {
      await addToIDevAffiliate(enrollment, ipAddress);
    } catch (err) {
      console.error(err);
    }

    // Facebook
    if (enrollment.transactionTime === null || new Date().getTime() - enrollment.transactionTime.getTime() < 7 * 24 * 60 * 60 * 1000) {
      try {
        const source = 'https://www.qceventplanning.com/welcome-to-the-school';
        await fbPostPurchase(enrollment, source, ipAddress, userAgent, fbc, fbp);
      } catch (err) {
        console.error(err);
      }
    }
  }

  return (
    <>
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <h1 className="mb-3">Thank You for Enrolling with QC Event School!</h1>
              <p>Your enrollment has been received and will be processed quickly. You will receive an email within the next business day containing login information to your online student center. If you don't see an email from us, please check your spam folder.</p>
              <p>If you have any questions regarding the course, or if you want to discuss your goals, our friendly and knowledgeable student support advisors are available 7 days a week by email at <a href="mailto:info@qceventplanning.com">info@qceventplanning.com</a> or by phone at <span style={{ whiteSpace: 'nowrap' }}><TelephoneLink countryCode={enrollment.countryCode} /></span>. We would be delighted to speak with you and assist you in any way we can. We hope your learning experience with us will be enjoyable, interesting, and valuable.</p>
              <p>Remember, we want to develop a personal relationship with you and be readily available for you whenever you need us.</p>
              <p><strong>Best of luck with your studies!</strong></p>
              <p>Sincerely,</p>
              <Image
                src={AlexSignatureImage}
                alt="Alex Myers"
                style={{ maxWidth: '100%', height: 'auto', marginBottom: '0.5rem' }}
              /><br /><div style={{ marginTop: -14 }}>Director<br /><strong>QC Career School</strong></div>
            </div>
          </div>
        </div>
      </section>
      <EnrollmentDetails enrollment={enrollment} />
      <Processing enrollment={enrollment} />
    </>
  );
};

export default WelcomeToTheSchoolPage;
