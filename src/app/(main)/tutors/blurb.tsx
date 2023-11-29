import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';

import styles from './blurb.module.css';

type Props = {
  name: string;
  subHeading?: string;
  text: string;
  src: StaticImageData;
  priority?: boolean;
};

export const Blurb: FC<Props> = ({ name, subHeading, text, src, priority }) => (
  <div className={styles.blurb}>
    <div className={styles.content}>
      <h2 className="h3 mb-2 mb-xl-3">{name}</h2>
      {subHeading && <p className="small mb-2 mb-xl-3">{subHeading}</p>}
      <p className={styles.text}>{text}</p>
    </div>
    <Image src={src} alt={name} className={styles.image} priority={priority} sizes="(max-width: 991px) 250px, (max-width: 1199px) 400px, (max-width: 1399px) 425px, 450px" />
  </div>
);
