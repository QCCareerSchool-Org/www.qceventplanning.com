import type { FC, MouseEventHandler } from 'react';

import styles from './paymentPlanButton.module.css';

type Props = {
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const PaymentPlanButton: FC<Props> = props => (
  <button onClick={props.onClick} className={`btn ${styles.paymentPlanButton}`}>Payment Plans</button>
);
