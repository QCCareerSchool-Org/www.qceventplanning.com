import Image from 'next/image';
import type { FC } from 'react';

import styles from './blurb.module.css';
import { TutorJsonLd } from '@/components/jsonLd/tutor';
import type { Tutor } from '@/domain/tutor';
import { slugify } from '@/lib/slugify';

interface Props {
  tutor: Tutor;
  priority?: boolean;
}

export const Blurb: FC<Props> = ({ tutor, priority }) => (
  <div className={styles.blurb}>
    <div className={styles.content}>
      <h2 className="h3 mb-2 mb-xl-3">{tutor.name}</h2>
      {tutor.subHeading && <p className="small mb-2 mb-xl-3">{tutor.subHeading}</p>}
      <p className={styles.text}>{tutor.text}</p>
    </div>
    <Image src={tutor.src} alt={tutor.name} className={styles.image} priority={priority} sizes="(max-width: 991px) 250px, (max-width: 1199px) 400px, (max-width: 1399px) 425px, 450px" />
    <TutorJsonLd tutor={tutor} id={`#tutor-${slugify(tutor.name)}`} />
  </div>
);
