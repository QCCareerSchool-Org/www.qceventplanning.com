import type { Metadata } from 'next';

import ChatIcon from './chat.svg';
import EmailIcon from './email.svg';
import styles from './page.module.scss';
import PhoneIcon from './phone.svg';
import type { PageComponent } from '@/app/serverComponent';
import { ChatLink } from '@/components/chatLink';
import { EmailLink } from '@/components/emailLink';
import { GetStartedSection } from '@/components/getStartedSection';
import { getData } from '@/lib/getData';
import { getTelephoneNumber } from '@/lib/telephone';

export const metadata: Metadata = {
  title: 'Contact Us',
  alternates: {
    canonical: '/contact-us',
  },
};

const ContactUsPage: PageComponent = async () => {
  const { countryCode } = await getData();
  const telephoneNumber = getTelephoneNumber(countryCode);

  return (
    <div className={styles.contactUs}>
      <section>
        <div className="container">
          <div className="row justify-content-center text-center mb-s">
            <div className="col-12 col-lg-10 col-xl-9 col-xxl-8">
              <p className={styles.green}>We want to hear from you!</p>
              <h1 className="mb-3">Contact Us</h1>
              <p className={`${styles.bold} mb-0`}>Whether you're a prospective student curious about QC's courses or tuition, or a current student with questions about an assignment, we're here to assist you in any way possible.</p>
            </div>
          </div>
          <div className="row justify-content-center text-center">
            <div className={`col-12 col-sm-10 col-md-8 mb-5 mb-lg-0 ${styles.emailCol}`}>
              <EmailIcon />
              <h2 className="h4">Email</h2>
              <p>Feel free to email us anytime, day or night, and we'll respond promptly.</p>
              <EmailLink />
            </div>
            <div className={`col-12 col-sm-10 col-md-8 mb-5 mb-lg-0 ${styles.phoneCol}`}>
              <PhoneIcon />
              <h2 className="h4">Phone</h2>
              <p>Connect with a student advisor for guidance on enrolling with QC or assistance with your courses and assignments.</p>
              <a href={`tel:${telephoneNumber}`}>{telephoneNumber}</a>
            </div>
            <div className={`col-12 col-sm-10 col-md-8 ${styles.chatCol}`}>
              <ChatIcon />
              <h2 className="h4">Chat</h2>
              <p>Have an urgent question? Our Student Support Specialists are standing by<span className="d-lg-none d-xxl-inline"> for a quick chat</span>!</p>
              <ChatLink>Chat with Support</ChatLink>
            </div>
          </div>
        </div>
      </section>
      <GetStartedSection title="Ready to Enroll?" text="You can get started with QC Event School whenever you like! When you enroll, you’ll receive a login to the Online Student Center where you can access your course online." buttonText="Enroll Online" />
    </div>
  );
};

export default ContactUsPage;
