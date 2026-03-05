import type { FC } from 'react';
import { FaCheck } from 'react-icons/fa';

interface Props {
  size?: number;
};

export const CheckCircle: FC<Props> = ({ size = 16 }) => (
  <div style={{ fontSize: size, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', aspectRatio: 1, borderRadius: '20rem', backgroundColor: 'mintcream', width: size * 3 }}>
    <FaCheck size={size} color="green" style={{ position: 'relative', top: 2 }} />
  </div>
);
