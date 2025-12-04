import Link from 'next/link';
import type { FC } from 'react';

import commonStyles from './commonStyles.module.scss';
import styles from './part.module.scss';
import type { Price } from '@/domain/price';
import { formatPrice } from '@/lib/formatPrice';
import { tightNumber } from '@/lib/tightNumber';

interface Props {
  price: Price;
  href: string;
}

export const Part: FC<Props> = ({ price, href }) => (
  <div className={`${commonStyles.card} ${styles.part} card`}>
    <div className={`${commonStyles.message} ${styles.message}`} />
    <div className={`card-body ${commonStyles.cardBody}`}>
      <h6 className={`${commonStyles.title} ${styles.dark}`}>{price.plans.part.installments}-Month Installment Plan</h6>
      <div className={commonStyles.description}>Start with a deposit of</div>
      <hr className={`${commonStyles.hr} ${styles.hr}`} />
      <div className={commonStyles.price}>
        <span className={commonStyles.priceSmall}>{price.currency.symbol}</span>{tightNumber(price.plans.part.deposit) && <span style={{ marginRight: '0.25rem' }} />}<span className="text-black">{formatPrice(price.plans.part.deposit)}</span>
      </div>
      <p className="fw-bold mb-1"><span className="d-none d-sm-inline d-md-none d-lg-inline">Make </span>{price.plans.part.installments} monthly payments of {price.currency.symbol}{formatPrice(price.plans.part.installmentSize)}</p>
      <p className="fw-bold">(Total: {price.currency.symbol}{formatPrice(price.plans.part.total)})</p>
      <hr className={`${commonStyles.hr} ${styles.hr}`} />
      <Link href={href} className="btn btn-secondary">Enroll Now</Link>
    </div>
  </div>
);
