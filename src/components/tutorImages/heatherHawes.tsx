import type { FC } from 'react';

import HeatherHawesImage from './images/heather-hawes.jpg';
import { ImageCircle } from '@/components/imageCircle';

export const HeatherHawes: FC = () => <ImageCircle src={HeatherHawesImage} alt="Heather Hawes" />;
