import type { StaticImageData } from 'next/image';
import type { CSSProperties, FC, PropsWithChildren } from 'react';

import { BackgroundImage } from '../backgroundImage';

type Props = {
  src: StaticImageData;
  priority?: boolean;
  objectPosition?: CSSProperties['objectPosition'];
};

export const Hero: FC<PropsWithChildren<Props>> = ({ src, priority, objectPosition, children }) => (
  <div>
    <BackgroundImage src={src} priority={priority} objectPosition={objectPosition} />
    <div>
      {children}
    </div>
  </div>
);
