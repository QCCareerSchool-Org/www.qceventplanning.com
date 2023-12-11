import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import AboutQCImage from './about-qc.jpg';
import BBBIcon from './bbb.svg';
import ShieldIcon from './shield.svg';
import type { PageComponent } from '@/app/serverComponent';
import { ILEASection } from '@/components/ileaSection';

export const metadata: Metadata = {
  title: 'About QC - QC Event School',
};

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
    <ILEASection />
    <section>
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-lg-6">
            <div className="mb-3"><BBBIcon /></div>
            <h2 className="h4 mb-3">BBB Accreditation</h2>
            <p className="lead mb-0">QC is happy to celebrate 15 years of accreditation with the Better Business Bureau. Are you hesitant about enrolling in an online course? Rest assured that QC has the highest possible consumer satisfaction rating (A+) with the Better Business Bureau. QC Event School has had thousands of satisfied students take these courses, and many students are now running their own successful businesses. See our BBB review.</p>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mb-3"><ShieldIcon style={{ marginBttom: 6 }} /></div>
            <h2 className="h4 mb-3">21-Day Money-Back Guarantee</h2>
            <p className="lead mb-0">Once you enroll with QC Event School, you'll be protected by a money-back guarantee! Once your enrollment has been processed, you have 21 days to review the course materials and decide whether you want to continue. If you decide this course isn't the right course for you, simply contact the school to request a full refund.Additional information on QC's money-back guarantee is available in your enrollment.</p>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default AboutQCPage;
