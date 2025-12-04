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
import { getCourseCertification } from '@/domain/courseCode';
import { useScreenWidth } from '@/hooks/useScreenWidth';

interface Props {
  courseCode: CourseCode;
}

export const CourseCardCertifcation: FC<Props> = ({ courseCode }) => {
  const screenWidth = useScreenWidth();
  if (screenWidth === 0) {
    return;
  }

  return <Certification courseCode={courseCode} height={screenWidth > 1200 ? 120 : screenWidth > 992 ? 110 : screenWidth > 768 ? 100 : 90} />;
};

interface CertificationProps {
  courseCode: CourseCode;
  height: number;
}

export const Certification: FC<CertificationProps> = ({ courseCode, height }) => {
  switch (courseCode) {
    case 'ep':
      return <IEWP height={height} title={getCourseCertification(courseCode)} />;
    case 'wp':
      return <IWPP height={height} title={getCourseCertification(courseCode)} />;
    case 'cp':
      return <ICPP height={height} title={getCourseCertification(courseCode)} />;
    case 'ce':
      return <IEPP height={height} title={getCourseCertification(courseCode)} />;
    case 'ed':
      return <IEDP height={height} title={getCourseCertification(courseCode)} />;
    case 'fd':
      return <IFDP height={height} title={getCourseCertification(courseCode)} />;
    case 'dw':
      return <DWS height={height} title={getCourseCertification(courseCode)} />;
    case 'lw':
      return <LWES height={height} title={getCourseCertification(courseCode)} />;
    case 'pe':
      return <PES height={height} title={getCourseCertification(courseCode)} />;
    case 'fl':
      return <IFLP height={height} title={getCourseCertification(courseCode)} />;
    default:
      return null;
  }
};
