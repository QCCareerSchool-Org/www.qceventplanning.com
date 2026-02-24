'use client';

import Link from 'next/link';
import type { FC, MouseEventHandler } from 'react';
import { useState } from 'react';

import Arrow from './arrow.svg';
import { Buttons } from './buttons';
import styles from './client.module.scss';
import type { Price } from '@/domain/price';

interface Props {
  price: Price;
  originalPrice: number;
  href: string;
}

export type Plan = 'full' | 'part';

export const Client: FC<Props> = ({ price, originalPrice, href }) => {
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
    <div className={styles.client}>
      <Buttons plan={plan} onFullClick={handleFullClick} onPartClick={handlePartClick} />
      <p className={styles.totalValue}>Total Value: <span className={styles.originalPrice}>{price.currency.symbol}{priceFormatter.format(originalPrice)}</span></p>
      <div className={styles.price}>{price.currency.symbol}{plan === 'full'
        ? priceFormatter.format(price.plans.full.total)
        : <>{priceFormatter.format(price.plans.part.installmentSize)}/mo</>
      }</div>
      <p className={styles.details}>{plan === 'full'
        ? <>One-time payment</>
        : <>{price.plans.part.installments} Monthly Installments</>
      } • Lifetime Access</p>
      <Link href={href}><button className={styles.enrollButton}>Become a Master Planner <Arrow className={styles.icon} /></button></Link>
    </div>
  );
};

const priceFormatter = Intl.NumberFormat('en-US');
