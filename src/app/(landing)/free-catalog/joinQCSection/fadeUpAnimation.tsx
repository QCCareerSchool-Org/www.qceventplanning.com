'use client';

import type { FC, PropsWithChildren } from 'react';
import { Fade } from 'react-awesome-reveal';

export const FadeUpAnimation: FC<PropsWithChildren> = ({ children }) => (
  <Fade direction="up" triggerOnce>
    {children}
  </Fade>
);
