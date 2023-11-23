import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';

import styles from './imageCircle.module.css';

type Props = {
  src: StaticImageData;
  alt: string;
  imagePositionX?: number;
  imagePositionY?: number;
};

export const ImageCircle: FC<Props> = ({ src, alt, imagePositionX, imagePositionY }) => (
  <div className={styles.wrapper}>
    <Image
      src={src}
      alt={alt}
      fill
      sizes="112px"
      className={styles.image}
      style={{ objectFit: 'cover', objectPosition: `${typeof imagePositionX === 'undefined' ? '50%' : `${imagePositionX}%`} ${typeof imagePositionY === 'undefined' ? '50%' : `${imagePositionY}%`}` }}
    />
  </div>
);
