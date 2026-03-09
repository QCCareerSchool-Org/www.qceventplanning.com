'use client';

import type { FC, MouseEventHandler } from 'react';
import { useState } from 'react';

import { Buttons } from './buttons';
import styles from './client.module.scss';
import type { Price } from '@/domain/price';

interface Props {
  price: Price;
  originalPrice: number;
  href: string;
  buttonText?: string;
  inverse?: boolean;
}

export type Plan = 'full' | 'part';

export const AAPClient: FC<Props> = ({ price, originalPrice, inverse }) => {
  const [ plan, setPlan ] = useState<Plan>('full');

  const handleFullClick: MouseEventHandler = e => {
    e.preventDefault();
    setPlan('full');
  };

  const handlePartClick: MouseEventHandler = e => {
    e.preventDefault();
    setPlan('part');
  };

  return (
    <div className={`${styles.client} ${inverse ? styles.inverse : ''}`}>
      <Buttons plan={plan} onFullClick={handleFullClick} onPartClick={handlePartClick} inverse={inverse} />
      <p className={styles.totalValue}>Total Value: <span className={styles.originalPrice}>{price.currency.symbol}{priceFormatter.format(originalPrice)}</span></p>
      <div className={styles.price}>{price.currency.symbol}{plan === 'full'
        ? priceFormatter.format(price.plans.full.total)
        : <>{priceFormatter.format(price.plans.part.installmentSize)}/mo</>
      }</div>
      <div className={styles.details}>{plan === 'full'
        ? <>One-time Payment</>
        : <>{price.plans.part.installments} Monthly Installments</>
      } • Lifetime Access</div>
    </div>
  );
};

const priceFormatter = Intl.NumberFormat('en-US');
