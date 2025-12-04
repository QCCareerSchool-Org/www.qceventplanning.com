import Link from 'next/link';
import type { FC } from 'react';

import { Zoom } from '../zoom';
import commonStyles from './commonStyles.module.scss';
import styles from './full.module.scss';
import TagIcon from './tag.svg';
import type { Price } from '@/domain/price';
import { formatPrice } from '@/lib/formatPrice';
import { tightNumber } from '@/lib/tightNumber';

interface Props {
  price: Price;
  href: string;
}

export const Full: FC<Props> = ({ price, href }) => (
  <div className={`${commonStyles.card} ${styles.full} card`}>
    <div className={`${commonStyles.message} ${styles.message}`}>Save {price.currency.symbol}{formatPrice(price.plans.full.discount)} - Limited Time Offer &nbsp;<Zoom><TagIcon height="18" color="#b20000" /></Zoom></div>
    <div className={`card-body ${commonStyles.cardBody}`}>
      <h6 className={`${commonStyles.title} text-white`}>Pay in Full</h6>
      <div className={commonStyles.description}>One-time payment of</div>
      <hr className={`${commonStyles.hr} ${styles.hr}`} />
      <div className={commonStyles.price}>
        <span className={styles.redStrikethrough}>{price.currency.symbol}{formatPrice(price.cost)}</span>
        <span className={commonStyles.priceSmall}>{price.currency.symbol}</span>{tightNumber(price.plans.full.total) && <span style={{ marginRight: '0.25rem' }} />}{formatPrice(price.plans.full.total)}
      </div>
      <p className="mb-1">
        <span className="fw-bold">Save {price.currency.symbol}{formatPrice(price.plans.full.discount)}</span> when you pay in full</p>
      <p className="fw-bold">(Total: {price.currency.symbol}{formatPrice(price.plans.full.total)})</p>
      <hr className={`${commonStyles.hr} ${styles.hr}`} />
      <Link href={href} className="btn btn-light">Enroll Now</Link>
    </div>
  </div>
);
