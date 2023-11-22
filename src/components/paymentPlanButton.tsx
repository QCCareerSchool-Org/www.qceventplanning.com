import type { FC, MouseEventHandler, PropsWithChildren } from 'react';

import styles from './paymentPlanButton.module.css';

type Props = {
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const PaymentPlanButton: FC<PropsWithChildren<Props>> = props => (
  <button onClick={props.onClick} className={`btn ${styles.paymentPlanButton}`}>Payment Plans</button>
);
