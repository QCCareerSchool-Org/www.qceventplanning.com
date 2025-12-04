import type { FC } from 'react';

import AngelaHodalImage from './images/angela-hodal.jpg';
import { ImageCircle } from '@/components/imageCircle';

interface Props {
  size?: number;
}

export const AngelaHodal: FC<Props> = ({ size = 96 }) => <ImageCircle src={AngelaHodalImage} alt="Angela Hodal" size={size} />;
