'use client';

import type { FC, PropsWithChildren } from 'react';
import { useEffect, useRef } from 'react';

import styles from './index.module.scss';

type Props = {
  show: boolean;
  index: number;
  onHeightChange: (index: number, height: number) => void;
};

export const SlideContainer: FC<PropsWithChildren<Props>> = ({ show, index, onHeightChange, children }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    //
  }, [ show ]);

  useEffect(() => {
    if (ref.current) {
      const element = ref.current;

      const handler = (): void => {
        onHeightChange(index, element.clientHeight);
      };

      element.addEventListener('resize', handler);
      handler();

      return () => element.removeEventListener('resize', handler);
    }
  }, [ onHeightChange ]);

  return (
    <div ref={ref} className={`${styles.slideContainer} ${show ? styles.show : undefined}`}>
      {children}
    </div>
  );
};
