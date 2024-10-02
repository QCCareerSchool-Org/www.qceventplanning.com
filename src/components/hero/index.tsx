import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { CSSProperties, FC, PropsWithChildren } from 'react';

import styles from './index.module.css';
import { BackgroundImage } from '../backgroundImage';

type Props = {
  src: StaticImageData;
  priority?: boolean;
  objectPosition?: CSSProperties['objectPosition'];
};

export const Hero: FC<PropsWithChildren<Props>> = ({ src, priority, objectPosition, children }) => (
  <div className={styles.wrapper}>
    <Image src={src} priority={priority} placeholder="blur" className={`${styles.image} d-none d-md-block`} alt="" sizes="100vw" />
    <div className={styles.mobileImageWrapper}>
      <BackgroundImage src={src} />
    </div>
    <div className={styles.overlay} />
    <div className={styles.content}>
      {children}
    </div>
  </div>
);
