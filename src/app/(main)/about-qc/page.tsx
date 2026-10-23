import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import AboutQCImage from './about-qc.jpg';
import BBBIcon from './bbb.svg';
import { CoreValuesSection } from './coreValuesSection';
import { MeetOurTeamSection } from './meetOurTeamSection';
import styles from './page.module.scss';
import ShieldIcon from './shield.svg';
import { ILEASection } from '@/components/ileaSection';
import type { PageComponent } from '@/serverComponent';

export const metadata: Metadata = {
  title: 'About QC Event School',
  alternates: {
    canonical: '/about-qc',
  },
};

const iconSize = 48;

const AboutQCPage: PageComponent = () => (
  <>
    <section>
      <div className="container">
        <div className="row justify-content-center g-s">
          <div className="col-12 col-lg-6 col-xxl-5 d-none d-lg-block">
            <Image src={AboutQCImage} className="img-fluid" style={{ marginBottom: -48 }} alt="" />
          </div>
          <div className="col-12 col-lg-6 col-xxl-7">
            <p className={`${styles.years} mb-3`}>Celebrating Over 40 Years</p>
            <h1 className="mb-3">About QC Event School</h1>
            <p className="mb-3">QC Career School, the parent company of QC Event School, has trained aspiring professionals worldwide through distance education since 1984. As part of QC Career School, QC Event School offers flexible, high-quality online training that helps students develop professional event planning skills from home, at their own pace. Thousands of QC Event School graduates have gone on to pursue careers in the event planning industry.</p>
            <p className="mb-5">QC continually updates its course content to reflect evolving industry trends and practices. Students also receive dedicated support throughout their studies, with personalized guidance to help them succeed. Through ongoing innovation and a genuine commitment to student success, QC Event School provides a supportive learning experience that prepares students to pursue their career goals.</p>
            <Link href="/online-event-courses" className="btn btn-outline-dark">View Courses</Link>
          </div>
        </div>
      </div>
    </section>
    <MeetOurTeamSection className="bg-light" />
    <CoreValuesSection />
    <ILEASection />
    <section>
      <div className="container">
        <div className="row g-5 g-xl-s">
          <div className="col-12 col-lg-6">
            <BBBIcon height={iconSize} className={styles.goldIcon} />
            <h2 className="h4 mb-3">20 Years of Accreditation<span className="d-lg-none d-xxl-inline"> with the BBB</span></h2>
            <p>QC Career School, the parent company of QC Event School, is proud to have held the highest possible consumer satisfaction rating with the Better Business Bureau for over 20 years. Our A+ rating reflects our commitment to quality and student satisfaction.</p>
            <p className="mb-0">QC Event School has had thousands of satisfied students take our courses, with many going on to launch lucrative event businesses and build successful careers.</p>
          </div>
          <div className="col-12 col-lg-6">
            <ShieldIcon height={iconSize} className={styles.goldIcon} />
            <h2 className="h4 mb-3">14-Day Money-Back Guarantee</h2>
            <p>Once you enroll with QC Event School, you'll be protected by a money-back guarantee!</p>
            <p className="mb-0">Once your enrollment has been processed, you have 14 days to review the course materials and decide whether you want to continue. If you decide this course isn't the right course for you, simply contact the school to request a full refund. Additional information on QC's money-back guarantee is available in your enrollment agreement.</p>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default AboutQCPage;
