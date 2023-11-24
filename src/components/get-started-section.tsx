import Link from 'next/link';
import type { FC } from 'react';

import styles from './get-started-section.module.scss';

type Props = {
  courseCode: 'EP';
};

export const GetStartedSection: FC<Props> = ({ courseCode }) => {
  const career = getCareer(courseCode);
  const href = `https://enroll.qceventplanning.com?c[]=${encodeURIComponent(courseCode)}`;
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 col-xl-7 text-center">
            <h2 className="mb-3">Ready to Start Your {career}?</h2>
            <p className="mb-3">Become Professionally Certified with QC's Online Event Planning Training</p>
            <Link href={href} className="btn btn-primary">Enroll Today</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const getCareer = (courseCode: string): string => {
  switch (courseCode) {
    case 'EP':
      return 'Event & Wedding Planning Career';
  }
  throw Error('Invalid course code');
};
