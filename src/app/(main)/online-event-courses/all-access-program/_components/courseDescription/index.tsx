import type { FC, PropsWithChildren } from 'react';

import AwardIcon from './award.svg';
import styles from './index.module.css';

interface Props {
  heading: string;
}

export const CourseDescription: FC<PropsWithChildren<Props>> = ({ heading, children }) => (
  <div className={styles.wrapper}>
    <div className={styles.left}><AwardIcon width="16" style={{ marginTop: '0.375rem' }} /></div>
    <div className={styles.right}>
      <h3 className="h6">{heading}</h3>
      {children}
    </div>
  </div>
);
