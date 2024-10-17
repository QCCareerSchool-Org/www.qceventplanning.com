import type { CSSProperties, FC } from 'react';

import styles from './initialCircle.module.css';

type Props = {
  initial: string;
  backgroundColor: CSSProperties['backgroundColor'];
};

export const InitialCircle: FC<Props> = ({ initial, backgroundColor }) => {
  if (initial.length > 1) {
    throw Error('Initial must be a single character');
  }

  return (
    <div className={styles.initial} style={{ backgroundColor }}>{initial}</div>
  );
};
