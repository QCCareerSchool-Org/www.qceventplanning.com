'use client';

import type { FC } from 'react';

import { GoogleCarousel } from './googleCarousel';
import GoogleLogo from './googleLogo.svg';
import type { CourseCode } from '@/domain/courseCode';
import { useScreenWidth } from '@/hooks/useScreenWidth';

type Props = {
  courseCode?: CourseCode;
  className?: string;
};

export const GoogleReviewSection: FC<Props> = ({ courseCode, className }) => {
  const screenWidth = useScreenWidth();

  return (
    <section className={className}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <GoogleLogo width="50" height="50" className="mb-3" />
            <GoogleCarousel courseCode={courseCode} mobile={screenWidth < 992} />
          </div>
        </div>
      </div>
    </section>
  );
};
