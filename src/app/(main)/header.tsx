import type { FC } from 'react';

import styles from './header.module.css';
import { MainNav } from './mainNav';

export const Header: FC = () => {
  return (
    <header className={`${styles.header} flex-shrink-0`}>
      <MainNav />
    </header>
  );
};
