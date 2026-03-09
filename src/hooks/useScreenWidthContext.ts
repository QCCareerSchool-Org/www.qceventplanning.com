import { useContext } from 'react';

import { ScreenWidthContext } from '@/providers/screenWidthProvider';

export const useScreenWidthContext = (): number => {
  const context = useContext(ScreenWidthContext);
  if (context === undefined) {
    throw Error('useScreenWidthContext must be used within a ScreenWidthProvider');
  }
  return context;
};
