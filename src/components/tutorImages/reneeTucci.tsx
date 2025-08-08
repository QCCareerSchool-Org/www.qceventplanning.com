import type { FC } from 'react';

import ReneeTucciImage from './images/renee-tucci.jpg';
import { ImageCircle } from '@/components/imageCircle';

type Props = {
  size?: number;
};

export const ReneeTucci: FC<Props> = ({ size = 96 }) => <ImageCircle src={ReneeTucciImage} alt="Renee Tucci" size={size} />;
