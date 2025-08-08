import type { FC } from 'react';

import AlyssaPernaImage from './images/alyssa-perna.jpg';
import { ImageCircle } from '@/components/imageCircle';

type Props = {
  size?: number;
};

export const AlyssaPerna: FC<Props> = ({ size = 96 }) => <ImageCircle src={AlyssaPernaImage} alt="Alyssa Perna" size={size} />;
