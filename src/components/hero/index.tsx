import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { CSSProperties, FC, PropsWithChildren } from 'react';

import styles from './index.module.css';

type Props = {
  src: StaticImageData;
  priority?: boolean;
  objectPosition?: CSSProperties['objectPosition'];
};

export const Hero: FC<PropsWithChildren<Props>> = ({ src, priority, objectPosition, children }) => (
  <div className={styles.wrapper}>
    <Image src={src} priority={priority} placeholder="blur" className={`${styles.image} d-none d-md-block`} alt="" sizes="100vw" />
    <div className={styles.mobileImageWrapper}>
      <Image src={src} priority={priority} placeholder="blur" className={styles.image} alt="" sizes="100vw" fill style={{ objectFit: 'cover', objectPosition }} />
    </div>
    <div className={styles.overlay} />
    <div className={styles.content}>
      {children}
    </div>
  </div>
);
