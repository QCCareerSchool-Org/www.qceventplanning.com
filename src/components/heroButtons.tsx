import type { FC, MouseEventHandler } from 'react';

import { EnrollButton } from './enrollButton';
import styles from './heroButtons.module.css';
import { PaymentPlanButton } from './paymentPlanButton';

type Props = {
  courseCodes: string[];
  onPaymentPlansClick: MouseEventHandler<HTMLButtonElement>;
};

export const HeroButtons: FC<Props> = props => {
  return (
    <div className={styles.heroButtons}>
      <div className="me-3">
        <EnrollButton courseCodes={props.courseCodes} />
      </div>
      <PaymentPlanButton onClick={props.onPaymentPlansClick} />
    </div>
  );
};
