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

  const Certification = getCertification(courseCode);
  if (Certification) {
    return <Certification height={screenWidth > 1200 ? 120 : screenWidth > 992 ? 110 : screenWidth > 768 ? 100 : 90} />;
  }
};

type ImageComponent = FC<{ height: number }>;

export const getCertification = (courseCode: CourseCode): ImageComponent | null => {
  switch (courseCode) {
    case 'ep':
      return IEWP as ImageComponent;
    case 'wp':
      return IWPP as ImageComponent;
    case 'cp':
      return ICPP as ImageComponent;
    case 'ce':
      return IEPP as ImageComponent;
    case 'ed':
      return IEDP as ImageComponent;
    case 'fd':
      return IFDP as ImageComponent;
    case 'dw':
      return DWS as ImageComponent;
    case 'lw':
      return LWES as ImageComponent;
    case 'pe':
      return PES as ImageComponent;
    case 'fl':
      return IFLP as ImageComponent;
    default:
      return null;
  }
};
