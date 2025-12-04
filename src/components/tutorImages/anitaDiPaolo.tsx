import type { FC } from 'react';

import AnitaDiPaoloImage from './images/anita-dipaolo.jpg';
import { ImageCircle } from '@/components/imageCircle';

interface Props {
  size?: number;
}

export const AnitaDiPaolo: FC<Props> = ({ size = 96 }) => <ImageCircle src={AnitaDiPaoloImage} alt="Anita DiPaolo" size={size} />;
