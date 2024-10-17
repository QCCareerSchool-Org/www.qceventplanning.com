'use client';

import type { FC, PropsWithChildren } from 'react';
import { Zoom as RevealZoom } from 'react-awesome-reveal';

export const Zoom: FC<PropsWithChildren> = ({ children }) => (
  <RevealZoom>{children}</RevealZoom>
);
