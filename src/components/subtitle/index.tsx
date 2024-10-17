import type { FC, PropsWithChildren } from 'react';

import styles from './index.module.scss';

type Props = {
  className?: string;
};

export const Subtitle: FC<PropsWithChildren<Props>> = ({ className, children }) => (
  <span className={`${styles.subtitle} ${className ?? ''}`}>{children}</span>
);
