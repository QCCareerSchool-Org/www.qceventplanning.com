import Link from 'next/link';
import type { FC, JSX } from 'react';

import { ButtonWrapper } from './buttonWrapper';
import styles from './header.module.scss';
import { Logo } from '@/components/logo';

interface Props {
  logoLink?: boolean;
  buttonHref?: string;
  buttonContent?: JSX.Element | string;
  buttonAlwaysVisible?: boolean;
  buttonClass?: string;
  showBanner?: boolean;
}

export const Header: FC<Props> = ({ logoLink, buttonHref = '#', buttonContent, buttonAlwaysVisible, buttonClass = `btn btn-navy ${styles.button}` }) => (
  <div className={styles.headerComponent}>
    <header className={styles.header}>
      <div className="container">
        <div className={styles.content}>
          {logoLink
            ? <Link href="/" aria-label="Home page"><Logo height={20} /></Link>
            : <Logo height={20} />
          }
          {buttonContent && (
            <ButtonWrapper alwaysVisible={!!buttonAlwaysVisible}>
              <Link href={buttonHref} className={buttonClass}>{buttonContent}</Link>
            </ButtonWrapper>
          )}
        </div>
      </div>
    </header>
  </div>
);
