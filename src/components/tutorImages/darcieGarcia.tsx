import type { FC } from 'react';

import DarcieGarciaImage from './images/darcie-garcia.jpg';
import { ImageCircle } from '@/components/imageCircle';

type Props = {
  size?: number;
};

export const DarcieGarcia: FC<Props> = ({ size = 96 }) => <ImageCircle src={DarcieGarciaImage} alt="Darcie Garcia" size={size} />;
