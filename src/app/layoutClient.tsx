'use client';

import type { FC } from 'react';

import { useRouteChange } from '@/hooks/useRouteChange';

export const LayoutClient: FC = () => {
  useRouteChange();

  return null;
};
