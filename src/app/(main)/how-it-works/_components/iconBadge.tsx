import type { FC } from 'react';
import type { IconType } from 'react-icons';

import styles from '../page.module.scss';

interface Props {
  icon: IconType;
}

export const IconBadge: FC<Props> = ({ icon: Icon }) => (
  <div className={styles.iconBadge}>
    <Icon aria-hidden="true" />
  </div>
);
