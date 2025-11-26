import type { DispatchWithoutAction } from 'react';
import { useReducer } from 'react';

export const useToggle = (initialState?: boolean): Readonly<[ value: boolean, toggle: DispatchWithoutAction ]> => {
  const [ state, dispatch ] = useReducer(s => !s, initialState ?? false);

  return [ state, dispatch ] as const;
};
