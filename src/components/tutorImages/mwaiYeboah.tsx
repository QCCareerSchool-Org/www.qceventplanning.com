import type { FC } from 'react';

import MwaiYeboahImage from './images/mwai-yeboah.jpg';
import { ImageCircle } from '@/components/imageCircle';

export const MwaiYeboah: FC = () => <ImageCircle src={MwaiYeboahImage} alt="Mwai Yeboah" size={96} />;
