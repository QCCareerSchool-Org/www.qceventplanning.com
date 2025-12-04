import Image from 'next/image';
import type { FC } from 'react';

import BlackFridayBadge from './bf-label.png';
import styles from './index.module.css';
import TagIcon from '@/components/icons/tag.svg';

interface Props {
  countryCode: string;
  date: number;
}

const startDate = Date.UTC(2024, 10, 26);
const endDate = Date.UTC(2024, 10, 30, 8); // 2024-11-30T03:00 (08:00 UTC)

export const PromoSection: FC<Props> = ({ date }) => {
  if (date < startDate || date >= endDate) {
    return;
  }

  return (
    <section className="bg-black text-white">
      <div className="container">
        <div className="row justify-content-center g-5">
          <div className="col-6 col-sm-5 col-md-4 col-lg-3"><Image src={BlackFridayBadge} alt="Exclusive Black Friday savings" className="img-fluid w-100" /></div>
          <div className="col-12 col-lg-8 col-xl-7 text-center text-lg-start">
            <h2 className="h3 mb-4">Master Event Planning with Our Black Friday Triple-Course Offer</h2>
            <p className={`lead mb-4 ${styles.muted}`}>Enroll in a foundation course and receive <span className="text-white">two specialty courses FREE!</span> Gain expert guidance, industry-recognized certifications, and business training to launch your career.</p>
            <a href="https://enroll.qceventplanning.com" className="btn btn-danger"><span className="text-black me-2" style={{ marginLeft: -3 }}><TagIcon height="16" /></span>Get Started Today</a>
          </div>
        </div>
      </div>
    </section>
  );
};
