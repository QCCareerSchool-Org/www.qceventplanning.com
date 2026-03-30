import type { StaticImageData } from 'next/image';
import Link from 'next/link';
import type { CSSProperties, FC, ReactNode } from 'react';

import { Heading } from './heading';
import styles from './index.module.scss';
import { BackgroundImage } from '../backgroundImage';
import { Overlay } from '../overlay';

interface StageBoxProps {
  eyebrow?: string;
  heading?: string | ReactNode;
  text?: string | ReactNode;
  subText?: string | ReactNode;
  buttonHref: string;
  buttonText: string;
  footerItems?: [string, string, string];
  backgroundSrc?: StaticImageData;
  overlayBackground?: CSSProperties['backgroundColor'];
  textShadow?: boolean;
}

export const StageBox: FC<StageBoxProps> = props => (
  <div className={`${styles.stageBox} text-white rounded-5`}>
    {props.backgroundSrc && <BackgroundImage src={props.backgroundSrc} />}
    {props.overlayBackground && <Overlay backgroundColor={props.overlayBackground} />}
    <div className={`${styles.content} ${props.textShadow ? 'text-shadow' : ''}`}>
      {props.eyebrow && <div className="mb-3">{props.eyebrow}</div>}
      {props.heading && <Heading text={props.heading} />}
      {props.text && <p className="lead mb-4 mx-auto">{props.text}</p>}
      <p className="mb-5"><Link href={props.buttonHref} className="btn btn-primary btn-lg" style={{ textShadow: 'none' }}>{props.buttonText}</Link></p>
      {props.subText && <p className="small mb-0 mx-auto">{props.subText}</p>}
      {props.footerItems && (
        <div className={`${styles.footer} d-flex gap-3 flex-column flex-lg-row mx-auto justify-content-center`}>
          <strong>{props.footerItems[0]}</strong>
          <span className="d-none d-lg-inline">|</span>
          <strong>{props.footerItems[1]}</strong>
          <span className="d-none d-lg-inline">|</span>
          <strong>{props.footerItems[2]}</strong>
        </div>
      )}
    </div>
  </div>
);
