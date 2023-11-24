/**
 * Changes color at different screen sizes
 */

import Link from 'next/link';
import type { FC } from 'react';

import styles from './paymentPlanButton.module.css';

export const PaymentPlanButton: FC = () => (
  <Link href="#paymentPlans" className={`btn ${styles.paymentPlanButton}`}>Payment Plans</Link>
);
