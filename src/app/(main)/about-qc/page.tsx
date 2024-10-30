import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import AboutQCImage from './about-qc.jpg';
import BBBIcon from './bbb.svg';
import { CoreValuesSection } from './coreValuesSection';
import { MeetOurTeamSection } from './meetOurTeamSection';
import styles from './page.module.scss';

import ShieldIcon from './shield.svg';
import type { PageComponent } from '@/app/serverComponent';
import { ILEASection } from '@/components/ileaSection';

export const metadata: Metadata = {
  title: 'About QC Event School',
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
            <p className={`${styles.years} mb-3`}>Celebrating 40 Years</p>
            <h1 className="mb-3">About QC Event School</h1>
            <p className="mb-3">QC Career School has been at the forefront of distance education, training aspiring professionals worldwide for over four decades. As a faculty of QC Career School, QC Event School offers flexible, high-quality online training to ensure students can receive a top-tier education in event planning from the comfort of their homes. QC Event School has had thousands of dedicated students graduate and begin their careers in the event planning industry.</p>
            <p className="mb-5">Each year, QC improves the student experience by updating course content to reflect the latest industry trends. QC Event School is proud to provide students with an industry-leading support system with the goal of developing a personal relationship with each and every student. With continuous innovation and a genuine commitment to students' success, QC will always provide a world-class learning experience.</p>
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
            <p>QC is proud to have held the highest possible consumer satisfaction rating with the Better Business Bureau for over 20 years. Our A+ rating reflects our commitment to quality and student satisfaction.</p>
            <p className="mb-0">QC Event School has had thousands of satisfied students take our courses, with many going on to launch lucrative event businesses and build successful careers.</p>
          </div>
          <div className="col-12 col-lg-6">
            <ShieldIcon height={iconSize} className={styles.goldIcon} />
            <h2 className="h4 mb-3">21-Day Money-Back Guarantee</h2>
            <p>Once you enroll with QC Event School, you'll be protected by a money-back guarantee!</p>
            <p className="mb-0">Once your enrollment has been processed, you have 21 days to review the course materials and decide whether you want to continue. If you decide this course isn't the right course for you, simply contact the school to request a full refund. Additional information on QC's money-back guarantee is available in your enrollment agreement.</p>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default AboutQCPage;
