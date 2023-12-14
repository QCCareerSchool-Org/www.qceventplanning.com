import Link from 'next/link';
import type { FC } from 'react';

import { ButtonWrapper } from './buttonWrapper';
import styles from './header.module.scss';
import { Logo } from '@/components/logo';

type Props = {
  href?: string;
  buttonContent?: JSX.Element | string;
  buttonAlwaysVisible?: boolean;
};

export const Header: FC<Props> = ({ href = '#', buttonContent, buttonAlwaysVisible }) => (
  <div className={styles.headerComponent}>
    <header className={styles.header}>
      <div className="container">
        <div className={styles.content}>
          <Logo height={20} />
          {buttonContent && (
            <ButtonWrapper alwaysVisible={!!buttonAlwaysVisible}>
              <Link href={href} className={`btn btn-navy ${styles.button}`}>{buttonContent}</Link>
            </ButtonWrapper>
          )}
        </div>
      </div>
    </header>
    <div className={styles.headerSpacer} />
  </div>
);
