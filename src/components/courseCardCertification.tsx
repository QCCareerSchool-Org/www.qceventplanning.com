'use client';

import type { FC } from 'react';

import DWS from '@/components/certifications/dws.svg';
import ICPP from '@/components/certifications/icpp.svg';
import IEDP from '@/components/certifications/iedp.svg';
import IEPP from '@/components/certifications/iepp.svg';
import IEWP from '@/components/certifications/iewp.svg';
import IFDP from '@/components/certifications/ifdp.svg';
import IFLP from '@/components/certifications/iflp.svg';
import IWPP from '@/components/certifications/iwpp.svg';
import LWES from '@/components/certifications/lwes.svg';
import PES from '@/components/certifications/pes.svg';
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
    return <Certification height={screenWidth > 1200 ? 120 : screenWidth > 992 ? 110 : screenWidth > 768 ? 100 : 90} />;
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
    case 'ce':
      return IEPP;
    case 'ed':
      return IEDP;
    case 'fd':
      return IFDP;
    case 'dw':
      return DWS;
    case 'lw':
      return LWES;
    case 'pe':
      return PES;
    case 'fl':
      return IFLP;
  }
};
