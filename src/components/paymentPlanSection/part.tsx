import Link from 'next/link';
import type { FC } from 'react';

import CertIcon from './cert.svg';
import ClockIcon from './clock.svg';
import commonStyles from './commonStyles.module.css';
import DollarCircleIcon from './dollar-circle.svg';
import styles from './part.module.scss';
import ShieldCheckIcon from './shield-check.svg';
import type { Price } from '@/domain/price';
import { formatPrice } from '@/lib/formatPrice';
import { tightNumber } from '@/lib/tightNumber';

type Props = {
  price: Price;
  href: string;
};

export const Part: FC<Props> = ({ price, href }) => (
  <div className={`${styles.part} card`}>
    <div className="card-body">
      <h6 className={`${commonStyles.title} ${styles.dark}`}>{price.plans.part.installments}-Month Installment Plan</h6>
      <div className={commonStyles.description}>Get Started for only</div>
      <hr className={commonStyles.hr} />
      <div className={commonStyles.price}><span className={commonStyles.priceSmall}>{price.currency.symbol}{tightNumber(price.plans.part.deposit) && <span style={{ marginRight: '0.25rem' }} />}</span><span className={styles.dark}>{price.plans.part.deposit}</span></div>
      <Link href={href} className="btn btn-primary">Enroll Now</Link>
      <hr className={commonStyles.hr} />
      <ul className={commonStyles.list}>
        <li className={`${commonStyles.bold} ${styles.dark}`}><DollarCircleIcon className={commonStyles.icon} /> {price.plans.part.installments} monthly payments of {price.currency.symbol}{formatPrice(price.plans.part.installmentSize)}</li>
        <li className={styles.offWhite}><CertIcon className={commonStyles.icon} /> Certification upon graduation</li>
        <li className={styles.offWhite}><ShieldCheckIcon className={commonStyles.icon} /> 21-day money-back guarantee</li>
        <li className={styles.offWhite}><ClockIcon className={commonStyles.icon} /> Lifetime Access</li>
      </ul>
    </div>
  </div>
);
