import type { FC } from 'react';

import BarChartIcon from './icons/bar-chart.svg';
import BriefcaseIcon from './icons/briefcase.svg';
import RulerIcon from './icons/ruler.svg';
import styles from './page.module.scss';

type Props = {
  className?: string;
};

const iconHeight = 32;

export const InfoSection: FC<Props> = ({ className }) => (
  <section className={className}>
    <div className="container">
      <div className="row justify-content-center g-4">
        <div className="col-12 col-sm-10 col-xl-4">
          <BriefcaseIcon height={iconHeight} className={`${styles.cobaltGrey} mb-3`} />
          <h2 className="h4 mb-3">Start Your Own Event Planning Business</h2>
          <p>QC Event School prepares you to become a successful event planning professional and business owner. Every course includes optional business training to guide you through setting up your company, writing an effective business plan, and marketing your services. You'll gain the skills needed to run your own successful event planning business in any event industry stream.</p>
        </div>
        <div className="col-12 col-sm-10 col-xl-4">
          <BarChartIcon height={iconHeight} className={`${styles.cobaltGrey} mb-3`} />
          <h2 className="h4 mb-3">Expand Your Existing Business</h2>
          <p>If you're a seasoned event planning professional aiming to take your career to the next level, specializing your skills and earning certifications will be key to reaching this goal! Expanding your services allows you to enhance your skills and reach more clients. You'll increase your revenue and improve client satisfaction!</p>
        </div>
        <div className="col-12 col-sm-10 col-xl-4">
          <RulerIcon height={iconHeight} className={`${styles.cobaltGrey} mb-3`} />
          <h2 className="h4 mb-3">Work for an Established Event Planning Company</h2>
          <p>You don't have to start your own business to become a successful event planner. Event planning companies and other businesses are always looking to add talent to their ranks. Being a certified event planning professional will give you a competitive advantage when looking for event planning jobs.</p>
        </div>
      </div>
    </div>
  </section>
);
