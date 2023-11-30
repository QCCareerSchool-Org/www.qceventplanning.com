import Link from 'next/link';
import type { FC } from 'react';

import styles from './index.module.scss';

type Props = {
  title: string;
  text: string;
  courseCodes?: string[];
  buttonText?: string;
};

export const GetStartedSection: FC<Props> = ({ title, text, courseCodes, buttonText = 'Enroll Today' }) => {
  const href = 'https://enroll.qceventplanning.com?' + courseCodes?.map(c => `c[]=${encodeURIComponent(c)}`).join('&');
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 col-xl-7 text-center">
            <h2 className="mb-3">{title}</h2>
            <p className="mb-3">{text}</p>
            <Link href={href} className="btn btn-primary">{buttonText}</Link>
          </div>
        </div>
      </div>
    </section>
  );
};
