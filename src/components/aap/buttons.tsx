'use client';

import type { FC, MouseEventHandler } from 'react';

import styles from './buttons.module.scss';
import type { Plan } from './client';

interface Props {
  plan: Plan;
  onFullClick: MouseEventHandler;
  onPartClick: MouseEventHandler;
}

export const Buttons: FC<Props> = props => {
  return (
    <>
      {/* Pricing Stack with Toggle */}
      <div className={styles.wrapper}>
        {/* The Toggle - Apple Glass Style */}
        <div className={styles.glass}>

          {/* The Sliding Glass Background */}
          <div className={`${styles.slide} ${props.plan === 'full' ? styles.right : styles.left}`} />

          <button onClick={props.onFullClick} className={`${styles.button} ${props.plan === 'full' ? styles.selected : styles.deselected}`}>One-Time</button>

          <button onClick={props.onPartClick} className={`${styles.button} ${props.plan === 'part' ? styles.selected : styles.deselected}`}>Monthly</button>
        </div>
      </div>
    </>
  );
};
