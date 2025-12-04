import type { FC } from 'react';

import HeatherHawesImage from './images/heather-hawes.jpg';
import { ImageCircle } from '@/components/imageCircle';

interface Props {
  size?: number;
}

export const HeatherHawes: FC<Props> = ({ size = 96 }) => <ImageCircle src={HeatherHawesImage} alt="Heather Hawes" size={size} />;
