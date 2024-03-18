import type { FC } from 'react';

import ElispseOver from './images/ellipse-over.svg';
import Elispse from './images/ellipse.svg';
import styles from './index.module.scss';

type Props = {
  current: boolean;
  onClick: () => void;
};

export const CarouselNavCircle: FC<Props> = props => {
  return (
    <span className={styles.carouselNavItem} onClick={props.onClick}>
      {props.current ? <ElispseOver /> : <Elispse />}
    </span>
  );
};
