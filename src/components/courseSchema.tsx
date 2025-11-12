import type { FC } from 'react';
import type { Course, WithContext } from 'schema-dts';

import type { CourseCode } from '@/domain/courseCode';
import { getCourseCertificate, getCourseDescription, getCourseName, getCourseSubjects, getCourseUrl } from '@/domain/courseCode';
import type { PriceQuery } from '@/lib/fetch';
import { fetchPrice } from '@/lib/fetch';
import { qcEventSchoolEducationalOrganization } from '@/qcEventSchoolEducationalOrganization';

type Props = {
  courseCode: CourseCode;
  id?: string;
  providerId?: string;
};

export const CourseSchema: FC<Props> = async ({ courseCode, id = '#course', providerId }) => {
  const priceQuery: PriceQuery = { countryCode: 'US', provinceCode: 'MD', courses: [ courseCode ] };
  const price = await fetchPrice(priceQuery);
  if (!price) {
    return null;
  }

  const courseJsonLD: WithContext<Course> = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    '@id': id,
    courseCode,
    'url': getCourseUrl(courseCode),
    'name': getCourseName(courseCode),
    'description': getCourseDescription(courseCode),
    'educationalCredentialAwarded': getCourseCertificate(courseCode),
    'availableLanguage': 'en',
    'teaches': getCourseSubjects(courseCode),
    'hasCourseInstance': {
      '@type': 'CourseInstance',
      'courseMode': 'Online',
      'courseWorkload': 'PT40H',
      'offers': {
        '@type': 'Offer',
        'category': 'Course',
        'priceCurrency': price.currency.code,
        'price': price.discountedCost.toFixed(2),
      },
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

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLD) }} />;
};
