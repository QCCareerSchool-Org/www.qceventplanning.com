import Link from 'next/link';
import type { FC } from 'react';

import Arrow from './arrow.svg';
import Check from './check.svg';
import { AAPClient } from './client';
import styles from './main.module.scss';
import MPC from './mpc.svg';
import Star from './star.svg';
import type { Price } from '@/domain/price';
import { repeat } from '@/lib/repeat';

interface Props {
  price: Price;
  originalPrice: number;
  href: string;
}

export const AAPMain: FC<Props> = ({ price, originalPrice, href }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.overlay} />
      <div className={styles.detailsPane}>
        <div className={styles.pane}>
          <div className={styles.eyebrow}>
            <div className={styles.badge}>Best Value</div>
            <span>Earn Your Master Planner Certificate™</span>
          </div>
          <h2 className={styles.h2}>All-Access Program</h2>
          <h3 className={styles.h3}>Build a Full-Service Business & Maximize Your Earning Potential</h3>
          <p>Get full access to every event planning course, so you can:</p>
          <ul className={styles.checkList}>
            <li><div><Check /></div><span><strong>Master the fundamentals and learn advanced skills</strong> like event decor, corporate events, luxury planning, destination weddings, and more</span></li>
            <li><div><Check /></div><span><strong>Earn a certificate for each course completed</strong>, proving your full range of skills</span></li>
            <li><div><Check /></div><span><strong>Receive your Master Planner Certificate</strong>, the ultimate credential to showcase your expertise</span></li>
            <li><div><Check /></div><span><strong>Graduate in under a year</strong>, fully prepared to serve every type of client</span></li>
            <li><div><Check /></div><span><strong>Save up to 75%</strong> on total course fees</span></li>
          </ul>
          <p className={styles.trusted}><span className={styles.stars}>{repeat(5, () => <Star />)}</span><span>Trusted by 30,000+ Students & Grads</span></p>
        </div>
      </div>
      <div className={styles.pricePane}>
        <div className={styles.pane}>
          <div className={styles.logoWrapper}>
            <MPC title="MPC™" className={styles.logo} />
          </div>
          <AAPClient price={price} originalPrice={originalPrice} href={href} />
          <div className="mt-2">
            <Link href={href} style={{ textDecoration: 'none' }}><button className={styles.enrollButton}>Explore the Program <Arrow className={styles.icon} /></button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};
