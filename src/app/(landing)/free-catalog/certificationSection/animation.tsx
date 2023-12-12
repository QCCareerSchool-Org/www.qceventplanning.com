'use client';

import type { FC, PropsWithChildren } from 'react';
import { Zoom } from 'react-awesome-reveal';

export const Animation: FC<PropsWithChildren> = ({ children }) => (
  <Zoom>{children}</Zoom>
);
