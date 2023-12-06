'use client';

import type { FC } from 'react';

import ICPP from './corporate-event-planning/icpp.svg';
import DWS from './destination-wedding-planning/dws.svg';
import IEWP from './event-and-wedding-planning/iewp.svg';
import IEDP from './event-decor/iedp.svg';
import IFDP from './floral-design/ifdp.svg';
import LWES from './luxury-wedding-and-event-planning/lwes.svg';
import IWPP from './wedding-planning/iwpp.svg';
import type { CourseCode } from '@/domain/courseCode';
import { useScreenWidth } from '@/hooks/useScreenWidth';

type Props = {
  courseCode: CourseCode;
};

export const CourseCardCertifcation: FC<Props> = ({ courseCode }) => {
  const screenWidth = useScreenWidth();
  if (screenWidth === 0) {
    return;
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const Certification = getCertification(courseCode);
  if (Certification) {
    return <Certification height={screenWidth > 1200 ? 160 : screenWidth > 768 ? 140 : 100} />;
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getCertification = (courseCode: CourseCode): any => {
  switch (courseCode) {
    case 'ep':
      return IEWP;
    case 'wp':
      return IWPP;
    case 'cp':
      return ICPP;
    case 'ed':
      return IEDP;
    case 'fd':
      return IFDP;
    case 'dw':
      return DWS;
    case 'lw':
      return LWES;
  }
};
