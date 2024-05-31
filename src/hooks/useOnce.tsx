import { useEffect, useRef } from 'react';

export const useOnce = (fn: () => void): void => {
  const alreadyCalled = useRef(false);

  useEffect(() => {
    if (alreadyCalled.current) {
      return;
    }

    alreadyCalled.current = true;

    fn();
  }, [ fn ]);
};
