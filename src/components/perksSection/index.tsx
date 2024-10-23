import Image from 'next/image';
import type { FC } from 'react';

import styles from './index.module.scss';
import NetworkAssociationsImage from './network-associations.jpg';
import OnlineCommunityImage from './online-community.jpg';
import OnlineStudentCenter from './online-student-center.jpg';
import PointersForPlannersImage from './pointers.jpg';

type Props = {
  className?: string;
};

export const PerksSection: FC<Props> = ({ className }) => (
  <section className={className}>
    <div className="container">
      <div className="row">
        <div className="col-12 text-center mb-5">
          <h2>Career Resources</h2>
        </div>
        <div className="col-12 col-md-6 col-xl-3 mb-4 mb-xl-0">
          <div className="mb-3">
            <Image className={styles.perksImage} src={OnlineStudentCenter} alt="" />
          </div>
          <h2 className="h6 mb-3">Lifetime Access to the Online Student Center</h2>
          <p className="mb-0">QC students and graduates are provided with customizable business resources in the Online Student Center such as invoices, client contracts, vendor tracking sheets, and more. The Online Student Center also contains helpful career resources such as resume-building tips, how to prepare for an interview, a list of job websites, and a social media guide.</p>
        </div>
        <div className="col-12 col-md-6 col-xl-3 mb-4 mb-xl-0">
          <div className="mb-3">
            <Image className={styles.perksImage} src={PointersForPlannersImage} alt="" />
          </div>
          <h2 className="h6 mb-3">A Blog for Event Professionals</h2>
          <p className="mb-0">The Pointers for Planners blog offers event planning ideas, expert planning advice, student and graduate features, industry trends, and more. Access helpful articles, sample course videos, and recommendations for business resources, from planning software to marketing. Use these invaluable resources throughout your courses and career as a certified event planner.</p>
        </div>
        <div className="col-12 col-md-6 col-xl-3 mb-4 mb-md-0">
          <div className="mb-3">
            <Image className={styles.perksImage} src={NetworkAssociationsImage} alt="" />
          </div>
          <h2 className="h6 mb-3">Eligibility to Join Event Planning Associations</h2>
          <p className="mb-0">As a QC student or graduate, you can further develop your professional skills by joining professional associations! International Live Events Association (ILEA) and Association of Bridal Consultants (ABC) are just two examples of associations that QC students are eligible to join. Members enjoy discounts on workshops and conferences as well as helpful monthly newsletters.</p>
        </div>
        <div className="col-12 col-md-6 col-xl-3">
          <div className="mb-3">
            <Image className={styles.perksImage} src={OnlineCommunityImage} style={{ objectPosition: '50% 100%' }} alt="" />
          </div>
          <h2 className="h6 mb-3">An Online Community of Event Planning Professionals</h2>
          <p className="mb-0">We're here to inspire, inform, and innovate your educational journey. Discover the vibrant heart of our Virtual Community, where students and graduates connect to mentor, share insights, and grow together. Tap into free webinars for deep dives into event planning and industry secrets, and join lively chats for discussions that range from studies to career paths.</p>
        </div>
      </div>
    </div>
  </section>
);
