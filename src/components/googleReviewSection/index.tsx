import type { FC } from 'react';

import { GoogleReviewSectionClient } from './client';
import GoogleLogo from './googleLogo.svg';
import { GoogleReview } from './googleReview';
import { reviewData } from './reviewData';
import { getCompareFunction } from './sortReviewData';
import type { CourseCode } from '@/domain/courseCode';

type Props = {
  courseCode?: CourseCode;
  className?: string;
};

export const GoogleReviewSection: FC<Props> = ({ courseCode, className }) => {
  const sortedReviewData = reviewData.sort(getCompareFunction(courseCode));

  return (
    <section className={className}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <GoogleLogo width="50" height="50" className="mb-3" />
            <GoogleReviewSectionClient>
              {sortedReviewData.map((data, key) => <GoogleReview {...data} key={key} />)}
            </GoogleReviewSectionClient>
          </div>
        </div>
      </div>
    </section>
  );
};
