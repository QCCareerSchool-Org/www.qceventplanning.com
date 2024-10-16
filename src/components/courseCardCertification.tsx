'use client';

import type { FC, ReactNode } from 'react';
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
  return getCertification(courseCode, screenWidth > 1200 ? 120 : screenWidth > 992 ? 110 : screenWidth > 768 ? 100 : 90);
};

export const getCertification = (courseCode: CourseCode, height: number): ReactNode => {

  switch (courseCode) {
    case 'ep':
      return <IEWP height={height} />;
    case 'wp':
      return <IWPP height={height} />;
    case 'cp':
      return <ICPP height={height} />;
    case 'ce':
      return <IEPP height={height} />;
    case 'ed':
      return <IEDP height={height} />;
    case 'fd':
      return <IFDP height={height} />;
    case 'dw':
      return <DWS height={height} />;
    case 'lw':
      return <LWES height={height} />;
    case 'pe':
      return <PES height={height} />;
    case 'fl':
      return <IFLP height={height} />;
    default:
      return null;
  }
};
