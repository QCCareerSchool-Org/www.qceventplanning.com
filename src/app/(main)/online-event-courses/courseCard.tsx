import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

import ChevronIcon from './chevron-right.svg';
import styles from './courseCard.module.scss';

type Props = {
  type: 'foundation' | 'specialty';
  name: string | JSX.Element;
  description: string;
  href: string;
  backgroundSrc: StaticImageData;
  certification: JSX.Element;
  message?: string;
};

export const CourseCard: FC<Props> = ({ type, name, description, href, backgroundSrc, certification, message }) => (
  <div className={`${styles.courseCard} card`}>
    <div className={styles.imageWrapper}>
      <Image src={backgroundSrc} className="card-img-top" style={{ height: 'auto' }} alt="" />
      <div className={styles.certification}>
        {certification}
      </div>
      {message && <div className={styles.message}>{message}</div>}
    </div>
    <div className={`${styles.courseCardBody} card-body`}>
      <div>
        <div className={styles.type}>{type === 'foundation' ? 'Foundation Course' : 'Specialty Course'}</div>
        <h2 className="h4">{name}</h2>
        <p className="lead">{description}</p>
      </div>
      <div className="d-flex flex-column flex-sm-row">
        <Link href={href} className="btn btn-lg btn-outline-medium mb-2 mb-sm-0" style={{ whiteSpace: 'nowrap' }}>Learn More</Link>
        {/* next/link doesn't scroll to the anchor */}
        <a href={`${href}#paymentPlans`} className="btn btn-lg btn-none" style={{ whiteSpace: 'nowrap' }}>See Tuition<span className="ms-3"><ChevronIcon /></span></a>
      </div>
    </div>
  </div>
);
