import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC, PropsWithChildren } from 'react';

import styles from './index.module.css';

type Props = {
  src: StaticImageData;
  priority?: boolean;
};

export const Hero: FC<PropsWithChildren<Props>> = ({ src, priority, children }) => (
  <div className={styles.wrapper}>
    <Image src={src} priority={priority} placeholder="blur" className={styles.image} alt="" sizes="100vw" />
    <div className={styles.overlay} />
    <div className={styles.content}>
      {children}
    </div>
  </div>
);
