'use client';

import type { FC } from 'react';

import DWS from '@/components/certifications/dws.svg';
import ICPP from '@/components/certifications/icpp.svg';
import IEDP from '@/components/certifications/iedp.svg';
import IEWP from '@/components/certifications/iewp.svg';
import IFDP from '@/components/certifications/ifdp.svg';
import IWPP from '@/components/certifications/iwpp.svg';
import LWES from '@/components/certifications/lwes.svg';
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
