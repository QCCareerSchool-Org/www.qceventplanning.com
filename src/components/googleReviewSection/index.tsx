import type { FC } from 'react';

import { GoogleReviewSectionClient } from './client';
import GoogleLogo from './googleLogo.svg';
import { GoogleReview } from './googleReview';
import { reviewData } from './reviewData';
import { getCompareFunction } from './sortReviewData';
import type { CourseCode } from '@/domain/courseCode';

interface Props {
  courseCode?: CourseCode;
  className?: string;
  /** a structured data \@id to pass through to the Course's provider */
  schemaCourseId?: string;
}

export const GoogleReviewSection: FC<Props> = ({ courseCode, className, schemaCourseId }) => {
  const sortedReviewData = reviewData.sort(getCompareFunction(courseCode));

  return (
    <section className={className}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <GoogleLogo width="50" height="50" className="mb-3" />
            <GoogleReviewSectionClient>
              {sortedReviewData.map((data, key) => <GoogleReview {...data} key={key} schemaCourseId={schemaCourseId} />)}
            </GoogleReviewSectionClient>
          </div>
        </div>
      </div>
    </section>
  );
};
