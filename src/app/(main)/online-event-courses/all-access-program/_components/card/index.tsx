import type { FC, PropsWithChildren } from 'react';

import { CheckCircle } from './checkCircle';

export const Card: FC<PropsWithChildren> = ({ children }) => (
  <div className="card bg-light" style={{ borderColor: '#f0f0f0', borderRadius: '0.375rem' }}>
    <div className="card-body">
      <div className="mb-3">
        <CheckCircle />
      </div>
      {children}
    </div>
  </div>
);
