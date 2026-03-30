'use client';

import type { FC, MouseEventHandler, PropsWithChildren } from 'react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import styles from './index.module.scss';
import { Overlay } from '@/components/overlay';

interface Props extends PropsWithChildren {
  onClose: () => void;
  open: boolean;
}

export const Modal: FC<Props> = ({ children, onClose: handleClose, open }) => {
  const [ mounted, setMounted ] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const { overflow, paddingRight } = document.body.style;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [ handleClose, open ]);

  const handleClick: MouseEventHandler = e => e.stopPropagation();

  if (!mounted || !open) {
    return null;
  }

  return createPortal(
    <div className={styles.root} role="presentation">
      <Overlay backgroundColor="rgba(0, 0, 0, 0.7)" className={styles.overlay} style={{ position: 'fixed' }} onClick={handleClose} />
      <div aria-modal="true" className={styles.dialog} role="dialog" onClick={handleClick}>
        <button aria-label="Close modal" className={styles.closeButton} type="button" onClick={handleClose}>X</button>
        {children}
      </div>
    </div>,
    document.body,
  );
};
