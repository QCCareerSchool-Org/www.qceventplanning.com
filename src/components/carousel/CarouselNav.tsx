import { type FC, memo } from 'react';

import { CarouselNavCircle } from './CarouselNavCircle';
import ArrowImage from './images/nav-arrow-icon.svg';
import styles from './index.module.scss';

type Props = {
  numPages: number;
  currentPage: number;
  onNext: () => void;
  onPrev: () => void;
  onClick: (index: number) => void;
};

export const CarouselNav: FC<Props> = memo(props => (
  <div style={{ scale: '0.8' }}>
    <span className={styles.carouselNavItem}>
      <ArrowImage onClick={props.onPrev} alt="Prev" />
    </span>
    {new Array(props.numPages).fill(undefined).map((_, i) => (
      <CarouselNavCircle key={i} current={i === props.currentPage} onClick={() => props.onClick(i)} />
    ))}
    <span className={styles.carouselNavItem}>
      <ArrowImage onClick={props.onNext} alt="Next" style={{ transform: 'scaleX(-1)' }} />
    </span>
  </div>
));

CarouselNav.displayName = 'CarouselNav';
