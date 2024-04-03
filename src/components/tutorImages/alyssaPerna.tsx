import type { FC } from 'react';

import AlyssaPernaImage from './images/alyssa-perna.jpg';
import { ImageCircle } from '@/components/imageCircle';

export const AlyssaPerna: FC = () => <ImageCircle src={AlyssaPernaImage} alt="Alyssa Perna" size={96} />;
