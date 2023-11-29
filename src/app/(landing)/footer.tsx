import type { FC } from 'react';

import styles from './footer.module.scss';

export const Footer: FC = () => (
  <footer className={styles.footer}>
    <div className="container">
      <small>&copy; {new Date().getFullYear()} QC Event School</small>
    </div>
  </footer>
);
