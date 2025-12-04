import Image from 'next/image';
import type { CSSProperties, FC } from 'react';

import CandiceImage from './candice.jpg';

interface Props {
  className?: string;
  style?: CSSProperties;
  alt?: string;
  sizes?: string;
}

export const Candice: FC<Props> = ({ className, style, alt = 'Candice Coppola', sizes }) => <Image src={CandiceImage} alt={alt} className={className} style={style} sizes={sizes} />;
