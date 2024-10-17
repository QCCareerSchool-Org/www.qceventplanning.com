import type { FC } from 'react';

import KimberlyJerkinsImage from './images/kimberly-jerkins.jpg';
import { ImageCircle } from '@/components/imageCircle';

export const KimberlyJerkins: FC = () => <ImageCircle src={KimberlyJerkinsImage} alt="KimberlyJerkins" size={96} />;
