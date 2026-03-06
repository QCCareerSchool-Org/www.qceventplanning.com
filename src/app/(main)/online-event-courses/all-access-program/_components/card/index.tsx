import type { FC, PropsWithChildren } from 'react';
import { FaCheck } from 'react-icons/fa';

import { IconCircle } from '../../iconCircle';

export const Card: FC<PropsWithChildren> = ({ children }) => (
  <div className="card bg-light" style={{ borderColor: '#f0f0f0', borderRadius: '0.375rem' }}>
    <div className="card-body">
      <div className="mb-3">
        <IconCircle><FaCheck /></IconCircle>
      </div>
      {children}
    </div>
  </div>
);
