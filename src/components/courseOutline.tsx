import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC, PropsWithChildren } from 'react';

import { Accordion } from './accordion';

type Props = {
  title: string;
  src: StaticImageData;
  open?: boolean;
  className?: string;
};

export const CourseOutline: FC<PropsWithChildren<Props>> = ({ title, src, children, open, className }) => (
  <Accordion title={title} open={open} className={className}>
    <div className="row">
      <div className="col-12 col-lg-6">
        {children}
      </div>
      <div className="col-6 d-none d-lg-block">
        <Image src={src} alt="" className="img-fluid align-self-end rounded" />
      </div>
    </div>
  </Accordion>
);
