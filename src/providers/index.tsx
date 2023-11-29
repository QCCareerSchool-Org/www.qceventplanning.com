import type { FC, PropsWithChildren } from 'react';

import { ScreenWidthProvider } from './screenWidthProvider';
import { ScrollPositionProvider } from './scrollPositionProvider';

export const Provider: FC<PropsWithChildren> = ({ children }) => (
  <ScreenWidthProvider>
    <ScrollPositionProvider>
      {children}
    </ScrollPositionProvider>
  </ScreenWidthProvider>
);
