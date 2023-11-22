import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC, PropsWithChildren } from 'react';

import styles from './hero.module.css';

type Props = {
  src: StaticImageData;
};

export const Hero: FC<PropsWithChildren<Props>> = ({ src, children }) => (
  <div className={styles.wrapper}>
    <Image src={src} className={styles.image} alt="" sizes="100vw" />
    <div className={styles.overlay} />
    <div className={styles.content}>
      {children}
    </div>
  </div>
);
