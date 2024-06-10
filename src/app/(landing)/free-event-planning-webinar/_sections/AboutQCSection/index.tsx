import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

import AboutQCImage from './about-qc.png';
import styles from './index.module.scss';

type Props = {
  showCoursesButton?: boolean;
};

export const AboutQCSection: FC<Props> = ({ showCoursesButton }) => (
  <section className="bg-light">
    <div className="container">
      <div className="row justify-content-center align-items-center g-s">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          <Image src={AboutQCImage} alt="" style={{ width: '100%', height: 'auto', marginBottom: '-12.5%' }} />
        </div>
        <div className="col-12 col-lg-6">
          <p className={styles.lead}>Celebrating 40 years</p>
          <h1 className="mb-3">About QC</h1>
          <p>QC Event School is a faculty of QC Career School, an online international school educating creative professionals through distance education for 40 years. QC's event planning courses provide the best event training possible from the comfort of your own home. Since 2007, QC Event School has had thousands of dedicated students graduate from the school and begin their careers in the event industry.</p>
          <p className="mb-0">Each year, QC improves the student experience by updating course content to reflect the latest industry trends. QC Event School is proud to provide students with an industry-leading support system with the goal of developing a personal relationship with each and every student. With continuous innovation and a genuine commitment to students' success, QC will always provide a world-class learning experience.</p>
          {showCoursesButton && <Link href="/online-event-courses" className="btn btn-outline-secondary mt-4">View Courses</Link>}
        </div>
      </div>
    </div>
  </section>
);
