/**
 * Changes color at different screen sizes
 */

import Link from 'next/link';
import type { FC } from 'react';

import styles from './paymentPlanButton.module.scss';

export const PaymentPlanButton: FC = () => (
  <Link href="#paymentPlans" className={`btn btn-lg ${styles.paymentPlanButton}`}>Payment Plans</Link>
);
