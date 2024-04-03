import type { FC } from 'react';

import AngelaHodalImage from './images/angela-hodal.jpg';
import { ImageCircle } from '@/components/imageCircle';

export const AngelaHodal: FC = () => <ImageCircle src={AngelaHodalImage} alt="Angela Hodal" size={96} />;
