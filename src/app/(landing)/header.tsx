import type { FC } from 'react';

import styles from './header.module.css';
import { Logo } from '@/components/logo';

export const Header: FC = () => (
  <header className={styles.header}>
    <Logo height={20} />
  </header>
);
