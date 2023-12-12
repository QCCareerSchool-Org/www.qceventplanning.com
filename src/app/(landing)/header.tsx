import Link from 'next/link';
import type { FC } from 'react';

import { ButtonWrapper } from './buttonWrapper';
import styles from './header.module.scss';
import DownloadIcon from '@/components/download.svg';
import { Logo } from '@/components/logo';

export const Header: FC = () => (
  <div className={styles.headerComponent}>
    <header className={styles.header}>
      <div className="container">
        <div className={styles.content}>
          <Logo height={20} />
          <ButtonWrapper>
            <Link href="#" className={`btn btn-navy ${styles.button}`}><span className="text-light"><DownloadIcon height="14" className="me-2" style={{ position: 'relative', top: -1 }} /></span><span className="d-none d-sm-inline">Get Your Free </span>Catalog</Link>
          </ButtonWrapper>
        </div>
      </div>
    </header>
    <div className={styles.headerSpacer} />
  </div>
);
