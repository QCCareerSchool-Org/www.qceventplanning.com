import type { FC } from 'react';
import type { Course, WithContext } from 'schema-dts';

import type { CourseCode } from '@/domain/courseCode';
import { getCourseCertification, getCourseDescription, getCourseName, getCourseSubjects, getCourseUrl, getCourseWorkload } from '@/domain/courseCode';
import type { Price } from '@/domain/price';
import type { PriceQuery } from '@/lib/fetch';
import { fetchPrice } from '@/lib/fetch';
import { qcEventSchoolEducationalOrganization } from '@/qcEventSchoolEducationalOrganization';

type Props = {
  courseCode: CourseCode;
  id?: string;
  providerId?: string;
  showPrice?: boolean;
};

export const CourseSchema: FC<Props> = async ({ courseCode, id = '#course', providerId, showPrice }) => {
  let price: Price | undefined;
  if (showPrice) {
    const priceQuery: PriceQuery = { countryCode: 'US', provinceCode: 'MD', courses: [ courseCode ] };
    price = await fetchPrice(priceQuery);
    if (!price) {
      return null;
    }
  }

  const certification = getCourseCertification(courseCode);

  const courseJsonLD: WithContext<Course> = {
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

  if (price) {
    courseJsonLD.offers = {
      '@type': 'Offer',
      'priceCurrency': price.currency.code,
      'price': price.discountedCost.toFixed(2),
      'url': 'https://enroll.qceventplanning.com',
      'availability': 'https://schema.org/InStock',
    };
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLD) }} />;
};
