import Link from 'next/link';
import type { ReactNode } from 'react';

import { Heading } from './heading';
import styles from './index.module.scss';

interface StageBoxProps {
  eyebrow?: string;
  heading?: string | ReactNode;
  text?: string | ReactNode;
  buttonHref: string;
  buttonText: string;
  footerItems: [ string, string, string ];
}

export const StageBox = ({ eyebrow, heading, text, buttonHref, buttonText, footerItems }: StageBoxProps) => (
  <div className={`${styles.stageBox} text-white rounded-5`}>
    {eyebrow && <div className="mb-3">{eyebrow}</div>}
    {heading && <Heading text={heading} />}
    {text && <p className="lead mb-4 mx-auto">{text}</p>}
    <p className="mb-5"><Link href={buttonHref} className="btn btn-primary btn-lg">{buttonText}</Link></p>
    <div className={`${styles.footer} d-flex gap-2 flex-column flex-lg-row justify-content-between`}>
      <strong>{footerItems[0]}</strong>
      <span className="d-none d-lg-inline">|</span>
      <strong>{footerItems[1]}</strong>
      <span className="d-none d-lg-inline">|</span>
      <strong>{footerItems[2]}</strong>
    </div>
  </div>
);
