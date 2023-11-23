import type { FC } from 'react';

import styles from './paymentPlanButton.module.css';

export const PaymentPlanButton: FC = () => (
  <button className={`btn ${styles.paymentPlanButton}`}>Payment Plans</button>
);
