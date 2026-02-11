import type { FC } from 'react';
import type { Course, WithContext } from 'schema-dts';

import type { CourseCode } from '@/domain/courseCode';
import { getCourseCertification, getCourseDescription, getCourseName, getCourseSubjects, getCourseUrl, getCourseWorkload } from '@/domain/courseCode';
import type { PriceQuery } from '@/lib/fetch';
import { fetchPrice } from '@/lib/fetch';
import { qcEventSchoolEducationalOrganization } from '@/qcEventSchoolEducationalOrganization';
import { withSuspense } from '@/withSuspense';

interface Props {
  courseCode: CourseCode;
  id?: string;
  providerId?: string;
  showPrice?: boolean;
}

const CourseJsonLdBase: FC<Props> = async ({ courseCode, id = '#course', providerId, showPrice }) => {
  const jsonLd = await getCourse(courseCode, id, providerId, showPrice);

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
};

export const CourseJsonLd = withSuspense(CourseJsonLdBase);

export const getCourse = async (courseCode: CourseCode, id?: string, providerId?: string, showPrice?: boolean): Promise<Course> => {
  const certification = getCourseCertification(courseCode);

  const course: WithContext<Course> = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    '@id': id,
    courseCode,
    'url': getCourseUrl(courseCode),
    'name': getCourseName(courseCode),
    'description': getCourseDescription(courseCode),
    'educationalCredentialAwarded': certification ? {
      '@type': 'EducationalOccupationalCredential',
      'name': certification,
    } : undefined,
    'availableLanguage': 'en',
    'teaches': getCourseSubjects(courseCode),
    'hasCourseInstance': {
      '@type': 'CourseInstance',
      'courseMode': 'online',
      'courseWorkload': getCourseWorkload(courseCode),
    },
    'provider': providerId
      ? { '@id': providerId }
      : {
        '@type': 'EducationalOrganization',
        '@id': 'https://www.qceventplanning.com/#school',
        'url': 'https://www.qceventplanning.com',
        'name': 'QC Event School',
        'sameAs': 'sameAs' in qcEventSchoolEducationalOrganization ? qcEventSchoolEducationalOrganization.sameAs : undefined,
      },
  };

  if (showPrice) {
    const priceQuery: PriceQuery = { countryCode: 'US', provinceCode: 'MD', courses: [ courseCode ] };
    const price = await fetchPrice(priceQuery);

    if (price) {
      course.offers = {
        '@type': 'Offer',
        'priceCurrency': price.currency.code,
        'price': price.discountedCost.toFixed(2),
        'url': 'https://enroll.qceventplanning.com',
        'availability': 'https://schema.org/InStock',
      };
    };

  }

  return course;
};
