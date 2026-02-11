import type { FC } from 'react';
import type { EducationalOrganization, Review, WithContext } from 'schema-dts';

import { getCourse } from './course';
import type { CourseCode } from '@/domain/courseCode';
import { withSuspense } from '@/withSuspense';

interface Props {
  name: string;
  rating: number;
  reviewText: string;
  courseCode?: CourseCode;
  courseId?: string;
}

const ReviewJsonLDBase: FC<Props> = async ({ name, rating, reviewText, courseCode, courseId }) => {
  const jsonLd = await getReview(name, rating, reviewText, courseCode, courseId);

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
};

export const ReviewJsonLD = withSuspense(ReviewJsonLDBase);

export const getReview = async (name: string, rating: number, reviewText: string, courseCode?: CourseCode, courseId?: string): Promise<Review> => {
  const itemReviewed = courseCode
    ? await getCourse(courseCode, courseId, undefined, true)
    : {
      '@type': 'EducationalOrganization',
      '@id': 'https://www.qceventplanning.com/#school',
      'name': 'QC Event School',
      'url': 'https://www.qceventplanning.com',
    } satisfies EducationalOrganization;

  const review: WithContext<Review> = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    'author': {
      '@type': 'Person',
      name,
    },
    'reviewBody': reviewText,
    'reviewRating': {
      '@type': 'Rating',
      'ratingValue': rating.toString(),
      'worstRating': '0',
      'bestRating': '5',
    },
    itemReviewed,
  };

  return review;
};
