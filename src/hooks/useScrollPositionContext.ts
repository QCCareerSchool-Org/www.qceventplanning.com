import { useContext } from 'react';

import { ScrollPositionContext } from '@/providers/scrollPositionProvider';

export const useScrollPositionContext = (): number => {
  const context = useContext(ScrollPositionContext);
  if (context === undefined) {
    throw Error('useScrollPositionContext must be used within a ScrollPositionProvider');
  }
  return context;
};
