import Link from 'next/link';
import type { FC } from 'react';

import CertIcon from './cert.svg';
import ClockIcon from './clock.svg';
import commonStyles from './commonStyles.module.css';
import styles from './full.module.scss';
import ShieldCheckIcon from './shield-check.svg';
import TagIcon from './tag.svg';
import type { Price } from '@/domain/price';
import { formatPrice } from '@/lib/formatPrice';
import { tightNumber } from '@/lib/tightNumber';

type Props = {
  price: Price;
  href: string;
};

export const Full: FC<Props> = ({ price, href }) => (
  <div className={`${styles.full} card`}>
    <div className="card-body">
      <h6 className={commonStyles.title}>Pay In Full</h6>
      <div className={commonStyles.description}>One-Time Payment of</div>
      <hr className={commonStyles.hr} />
      <div className={commonStyles.price}><span className={commonStyles.priceSmall}>{price.currency.symbol}{tightNumber(price.plans.full.total) && <span style={{ marginRight: '0.25rem' }} />}</span><span className={styles.dark}>{price.plans.full.total}</span></div>
      <Link href={href} className="btn btn-primary">Enroll Now</Link>
      <hr className={commonStyles.hr} />
      <ul className={commonStyles.list}>
        <li className={`${commonStyles.bold} ${styles.dark}`}><TagIcon className={commonStyles.icon} /> SAVE {price.currency.symbol}{formatPrice(price.plans.full.discount)} when you pay in full</li>
        <li><CertIcon className={commonStyles.icon} /> Certification upon graduation</li>
        <li><ShieldCheckIcon className={commonStyles.icon} /> 21-day money-back guarantee</li>
        <li><ClockIcon className={commonStyles.icon} /> Lifetime Access</li>
      </ul>
    </div>
  </div>
);
