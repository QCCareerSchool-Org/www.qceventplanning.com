import Image from 'next/image';
import Link from 'next/link';

import AboutQCImage from './about-qc.jpg';
import type { PageComponent } from '@/app/serverComponent';

const AboutQCPage: PageComponent = () => (
  <>
    <section>
      <div className="container">
        <div className="row justify-content-center g-s">
          <div className="col-6 col-xxl-5 d-none d-lg-block">
            <Image src={AboutQCImage} className="img-fluid" style={{ marginBottom: -48 }} alt="" />
          </div>
          <div className="col-12 col-lg-6 col-xxl-5">
            <h1 className="mb-3">About QC</h1>
            <p className="mb-3">QC Event School is a faculty of QC Career School, an online international school educating creative professionals through distance education for 40 years. QC's event planning courses provide the best event training possible from the comfort of your own home. Since 2007, QC Event School has had thousands of dedicated students graduate from the school and begin their careers in the event industry.</p>
            <p className="mb-5">Each year, QC improves the student experience by updating course content to reflect the latest industry trends. QC Event School is proud to provide students with an industry-leading support system with the goal of developing a personal relationship with each and every student. With continuous innovation and a genuine commitment to students' success, QC will always provide a world-class learning experience.</p>
            <Link href="/online-event-courses" className="btn btn-outline-dark">View Courses</Link>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default AboutQCPage;
