import type { FC } from 'react';

import SarahWebbImage from './images/sarah-webb.jpg';
import { ImageCircle } from '@/components/imageCircle';

interface Props {
  size?: number;
}

export const SarahWebb: FC<Props> = ({ size = 96 }) => <ImageCircle src={SarahWebbImage} alt="Sarah Webb" size={size} />;
