import type { FC } from 'react';

import MwaiYeboahImage from './images/mwai-yeboah.jpg';
import { ImageCircle } from '@/components/imageCircle';

interface Props {
  size?: number;
}

export const MwaiYeboah: FC<Props> = ({ size = 96 }) => <ImageCircle src={MwaiYeboahImage} alt="Mwai Yeboah" size={size} />;
