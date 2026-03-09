import type { FC, PropsWithChildren } from 'react';

interface Props {
  size?: number;
};

export const IconCircle: FC<PropsWithChildren<Props>> = ({ size = 16, children }) => (
  <div style={{ fontSize: size, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', aspectRatio: 1, borderRadius: '20rem', backgroundColor: 'mintcream', width: size * 3, color: 'green' }}>
    {children}
  </div>
);
