import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import { FaBullseye, FaTrophy } from 'react-icons/fa';

import styles from './index.module.scss';

interface Props {
  className?: string;
  title: string;
  subtitle: string;
  description: string;
  bestFor: string;
  careerOutcome: string;
  href: string;
  imageSrc: StaticImageData;
}

export const FeaturedCourseCard: FC<Props> = ({ className, title, subtitle, description, bestFor, careerOutcome, href, imageSrc }) => (
  <div className={`${styles.cardWrap} ${className ?? ''}`}>
    <div className={`row align-items-stretch justify-content-center g-4 g-lg-0 ${styles.row}`}>
      <div className="col-12 col-lg-6">
        <div className={styles.imagePanel}>
          <Image src={imageSrc} alt="" className={styles.image} />
        </div>
      </div>
      <div className="col-12 col-lg-6">
        <div className="p-5 p-xl-5">
          <h3 className="h5 fw-bold mt-2 mb-1 text-navy">{title}</h3>
          <p className="mb-3 text-navy">{subtitle}</p>
          <p className="mb-4">{description}</p>
          <div className={`${styles.detailItem} mb-3`}>
            <div className={`${styles.detailIcon} ${styles.detailIconNavy}`}><FaBullseye size={24} /></div>
            <div>
              <h4 className="h6 mb-0">Best For:</h4>
              <p className="mb-0 small">{bestFor}</p>
            </div>
          </div>
          <div className={`${styles.detailItem} mb-4`}>
            <div className={`${styles.detailIcon} ${styles.detailIconPrimary}`}><FaTrophy size={24} /></div>
            <div>
              <h4 className="h6 mb-0">Career Outcome:</h4>
              <p className="mb-0 small">{careerOutcome}</p>
            </div>
          </div>
          <Link href={href} className={styles.link}>Learn More &gt;</Link>
        </div>
      </div>
    </div>
  </div>
);
