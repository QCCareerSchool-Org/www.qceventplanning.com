import type { FC } from 'react';

import AshleyFriesenImage from './images/ashley-friesen.jpg';
import { ImageCircle } from '@/components/imageCircle';

interface Props {
  size?: number;
}

export const AshleyFriesen: FC<Props> = ({ size = 96 }) => <ImageCircle src={AshleyFriesenImage} alt="Ashley Friesen" size={size} />;
