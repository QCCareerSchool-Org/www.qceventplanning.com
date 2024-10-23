import Link from 'next/link';
import type { FC } from 'react';

import QIcon from './icons/q-logo.svg';
import styles from './meetOurTeamSection.module.scss';
import JoannePendonImage from '@/components/employees/joanne-pendon.jpg';
import LucieDemersImage from '@/components/employees/lucie-demers.jpg';
import MalcolmAsselinImage from '@/components/employees/malcolm-asselin.jpg';
import { ImageCircle } from '@/components/imageCircle';

type Props = {
  className?: string;
};

const imageSize = 200;

export const MeetOurTeamSection: FC<Props> = ({ className }) => (
  <section className={className}>
    <div className="container">
      <div className="row justify-content-center mb-5 text-lg-center">
        <div className="col-12 col-lg-10 col-xl-8">
          <h2 className="mb-4">Meet Our Team</h2>
          <p className="lead mb-0">At QC, we believe that support is at the heart of a great learning experience. Our dedicated team is here to ensure that your journey with QC is rewarding and engaging, every step of the way. From your first lesson to graduation day, the QC team is committed to helping you reach your full potential.</p>
        </div>
      </div>
      <div className="row justify-content-center g-5 mb-5">
        <div className="col-12 col-md-8 col-lg-4">
          <div className="mb-4">
            <ImageCircle size={imageSize} src={JoannePendonImage} alt="Joanne Pendon" />
          </div>
          <h3 className={styles.heading}>Joanne, CEO</h3>
          <p className="mb-0 small">At QC, my team is committed to delivering innovation and quality at every step of your learning journey. Our goal is to blend innovation with connection, so you always feel supported throughout your journey. Most importantly, we're dedicated to providing top-tier education at an affordable price, empowering you to confidently launch a successful business or career.</p>
        </div>
        <div className="col-12 col-md-8 col-lg-4">
          <div className="mb-4">
            <ImageCircle size={imageSize} src={MalcolmAsselinImage} alt="Joanne Pendon" />
          </div>
          <h3 className={styles.heading}>Malcolm, Student Success Manager</h3>
          <p className="mb-0 small">My top priority at QC is to enrich your learning experience by fostering a strong, supportive community where you can connect with fellow students and graduates, and learn from industry experts. I want to make sure you have every resource you need right at your fingertips.</p>
        </div>
        <div className="col-12 col-md-8 col-lg-4">
          <div className="mb-4">
            <ImageCircle size={imageSize} src={LucieDemersImage} alt="Joanne Pendon" />
          </div>
          <h3 className={styles.heading}>Lucie, Student Coordinator</h3>
          <p className="mb-0 small">I'm here to support you from the moment you begin your journey with QC through to graduation. I oversee the enrollment process and personally welcome you to the school to ensure you get off to a great start. If you have any questions along the way, I'm just a phone call away!</p>
        </div>
      </div>

      <div className="text-center">
        <Link href="/about-qc/meet-the-team" className="btn btn-primary">Meet More of the QC Team!<QIcon height="16" className="ms-2" style={{ position: 'relative', top: -1 }} /></Link>
      </div>
    </div>
  </section>
);
