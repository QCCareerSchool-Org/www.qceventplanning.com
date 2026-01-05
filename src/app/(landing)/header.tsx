'use client';

import Link from 'next/link';
import type { FC, JSX } from 'react';
import { Element as ScrollElement, Link as ScrollLink } from 'react-scroll';

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

export const Header: FC<Props> = ({ logoLink, buttonHref, buttonContent, buttonAlwaysVisible, buttonClass = `btn btn-navy ${styles.button}` }) => (
  <>
    <ScrollElement name="top" />
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
                {buttonHref
                  ? <Link href={buttonHref} className={buttonClass}>{buttonContent}</Link>
                  : <ScrollLink to="top" smooth duration={300} className={buttonClass}>{buttonContent}</ScrollLink>
                }
              </ButtonWrapper>
            )}
          </div>
        </div>
      </header>
    </div>
  </>
);
