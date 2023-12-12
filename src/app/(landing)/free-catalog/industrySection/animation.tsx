'use client';

import type { FC, PropsWithChildren } from 'react';
import { Fade } from 'react-awesome-reveal';

export const Animation: FC<PropsWithChildren> = ({ children }) => (
  <Fade direction="up" triggerOnce cascade>
    {children}
  </Fade>
);
