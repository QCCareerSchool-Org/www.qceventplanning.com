import type { FC, MouseEventHandler, PropsWithChildren } from 'react';

import styles from './greyOutlineButton.module.css';

type Props = {
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const GreyOutlineButtonButton: FC<PropsWithChildren<Props>> = props => (
  <button onClick={props.onClick} className={`btn ${styles.greyOutlineButton}`}>{props.children}</button>
);
