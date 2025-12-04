import Image from 'next/image';
import type { FC } from 'react';

import { Animation } from './animation';
import BackgroundFDImage from './background-fd.jpg';
import BackgroundImage from './background.jpg';
import styles from './index.module.scss';
import IEWPCertification from '@/components/certifications/iewp.svg';
import IFDPCertification from '@/components/certifications/ifdp.svg';
import type { CourseCode } from '@/domain/courseCode';

interface Props {
  courseCode?: CourseCode;
}

export const CertificationSection: FC<Props> = ({ courseCode }) => (
  <section className={`bg-dark text-white ${styles.certificationSection}`}>
    <Image src={courseCode === 'fd' ? BackgroundFDImage : BackgroundImage} alt="" fill placeholder="blur" style={{ objectFit: 'cover' }} />
    <div className="container">
      <div className="row justify-content-center g-s">
        <div className="col-6 col-sm-5 col-md-4 col-lg-4 col-xxl-3">
          <Animation>{courseCode === 'fd' ? <IFDPCertification /> : <IEWPCertification />}</Animation>
        </div>
        <div className="col-12 col-md-10 col-lg-8 col-xxl-9">
          {courseCode === 'fd'
            ? (
              <>
                <h2 className="h3">Your Floral Design Certification</h2>
                <p>Once you&apos;ve completed the Floral Design course, you&apos;ll graduate with the International Floral Design Professional&trade; (IFDP&trade;) certificate.</p>
                <p>This certification demonstrates that you now have all the skills and knowledge you need to be successful in the industry.</p>
                <h3 className="h5">You&apos;re ready to pursue any of the following careers:</h3>
                <ul className="mb-0">
                  <li>Work for a large retailer</li>
                  <li>Open your own floral shop</li>
                  <li>Sell arrangements online</li>
                  <li>Work for an existing florist</li>
                  <li>Specialize in wedding and event florals</li>
                </ul>
              </>
            )
            : (
              <>
                <h2 className="h3">Your Event &amp; Wedding Planning Certification</h2>
                <p>Once you've completed your course online, you'll receive your certification and professional designation. Use these to market yourself as a certified event and wedding planner.</p>
                <p>This certification demonstrates that you have successfully completed professional event and wedding planner training and that you possess all the skills and knowledge required to plan, design, and execute flawless private and corporate events.</p>
                <h3 className="h5">Your Certification Has Many Benefits</h3>
                <ul className="mb-0">
                  <li>Start your own event and wedding planning business</li>
                  <li>Provide coordination & vendor outreach services to clients</li>
                  <li>Work for an existing event or wedding planning company</li>
                  <li>Work for a corporation planning meetings and external events</li>
                  <li>Plan events for venues, hotels, restaurants, and more!</li>
                </ul>
              </>
            )
          }
        </div>
      </div>
    </div>
  </section>
);
