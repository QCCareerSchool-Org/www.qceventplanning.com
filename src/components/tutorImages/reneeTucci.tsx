import type { FC } from 'react';

import ReneeTucciImage from './images/renee-tucci.jpg';
import { ImageCircle } from '@/components/imageCircle';

export const ReneeTucci: FC = () => <ImageCircle src={ReneeTucciImage} alt="Renee Tucci" />;
