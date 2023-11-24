import type { FC } from 'react';

import styles from './guarantee.module.css';
import ShieldIcon from './shield.svg';

export const PaymentSectionGuarantee: FC = () => (
  <div className="text-center">
    <ShieldIcon className={`${styles.gold} mb-3`} />
    <p className={`${styles.gold} small mb-3`}>21 DAY MONEY-BACK GUARANTEE</p>
    <h4 className="mb-3">Money-Back Guarantee</h4>
    <p className="lead mb-0">Following enrollment processing, you have 21 days to review course materials. If the course isn't suitable and you haven't submitted work to your tutor, contact us for a full refund.</p>
  </div>
);
