import { headers } from 'next/headers';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import AlexSignatureImage from './alex-myers.png';
import { Processing } from './processing';
import type { PageComponent } from '@/app/serverComponent';
import { EnrollmentDetails } from '@/components/enrollmentDetails';
import { TelephoneLink } from '@/components/telephoneLink';
import { createBrevoContact } from '@/lib/brevoAPI';
import { getEnrollment } from '@/lib/fetch';
import { getParam } from '@/lib/getParam';

const brevoStudentListId = 14;

const WelcomeToTheSchoolPage: PageComponent = async ({ searchParams }) => {
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

  const headerList = headers();
  const ipAddress = headerList.get('x-real-ip');

  // create Brevo contact
  try {
    await createBrevoContact(enrollment.emailAddress, enrollment.firstName, enrollment.lastName, enrollment.countryCode, enrollment.provinceCode, { STATUS_EVENT_STUDENT: true }, [ brevoStudentListId ]);
  } catch (err) {
    console.error(err);
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
      <Processing enrollment={enrollment} code={codeParam} ipAddress={ipAddress} />
    </>
  );
};

export default WelcomeToTheSchoolPage;
