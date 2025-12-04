import type { FC } from 'react';

import KimberlyJerkinsImage from './images/kimberly-jerkins.jpg';
import { ImageCircle } from '@/components/imageCircle';

interface Props {
  size?: number;
}

export const KimberlyJerkins: FC<Props> = ({ size = 96 }) => <ImageCircle src={KimberlyJerkinsImage} alt="KimberlyJerkins" size={size} />;
