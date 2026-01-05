'use client';

import Link from 'next/link';
import type { FC, PropsWithChildren, ReactNode } from 'react';
import { Link as ScrollLink } from 'react-scroll';

interface Props {
  buttonHref?: string;
  buttonContent?: ReactNode | string;
  buttonClass?: string;
}

export const BottomSection: FC<PropsWithChildren<Props>> = ({ buttonHref, buttonContent = 'Get Your Free Catalog', buttonClass = 'btn-primary', children }) => (
  <section className="bg-navy text-white pb-0">
    <div className="container">
      <div className="row justify-content-center pb-s" style={{ borderBottom: '0.5px solid rgba(255,255,255,0.5)' }}>
        <div className="col-12 col-lg-9 text-center">
          {children}
          {buttonHref
            ? <Link href={buttonHref} className={`btn btn-lg ${buttonClass}`}>{buttonContent}</Link>
            : <ScrollLink smooth to="top" className={`btn btn-lg ${buttonClass}`}>{buttonContent}</ScrollLink>
          }
        </div>
      </div>
    </div>
  </section>
);
