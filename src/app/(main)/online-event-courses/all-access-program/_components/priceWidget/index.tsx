import Big from 'big.js';
import type { FC } from 'react';

import styles from './index.module.css';
import { AAPClient } from '@/components/aap/client';
import type { Price } from '@/domain/price';

interface Props {
  price: Price;
  combinedPrice: Price;
  href: string;
}

export const PriceWidget: FC<Props> = ({ price, combinedPrice, href }) => {
  const originalPrice = parseFloat(combinedPrice.courses.reduce((prev, course) => { return prev.plus(course.cost); }, Big(0)).toFixed(2));
  return (
    <div className={styles.wrapper}>
      <h3 className="h4 mb-3">Start Your Journey Today</h3>
      <AAPClient
        originalPrice={originalPrice}
        price={price}
        href={href}
        buttonText="Become a Master Planner"
        inverse
      />
    </div>
  );
};
