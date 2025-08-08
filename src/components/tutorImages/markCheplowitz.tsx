import type { FC } from 'react';

import MarkCheplowitzImage from './images/mark-cheplowitz.jpg';
import { ImageCircle } from '@/components/imageCircle';

type Props = {
  size?: number;
};

export const MarkCheplowitz: FC<Props> = ({ size = 96 }) => <ImageCircle src={MarkCheplowitzImage} alt="Mark Cheplowitz" size={size} />;
