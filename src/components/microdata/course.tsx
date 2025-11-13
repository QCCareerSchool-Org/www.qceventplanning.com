import type { FC } from 'react';

import type { CourseCode } from '@/domain/courseCode';
import { getCourseCertification, getCourseDescription, getCourseName, getCourseSubjects, getCourseUrl, getCourseWorkload } from '@/domain/courseCode';
import type { Price } from '@/domain/price';
import type { PriceQuery } from '@/lib/fetch';
import { fetchPrice } from '@/lib/fetch';

type Props = {
  courseCode: CourseCode;
  itemProp?: string;
  showPrice?: boolean;
  itemID?: string;
};

export const CourseMicrodata: FC<Props> = async ({ courseCode, itemProp, showPrice, itemID = '#course' }) => {
  let price: Price | undefined;
  if (showPrice) {
    const priceQuery: PriceQuery = { countryCode: 'US', provinceCode: 'MD', courses: [ courseCode ] };
    price = await fetchPrice(priceQuery);
    if (!price) {
      return null;
    }
  }

  const certification = getCourseCertification(courseCode);

  const subjects = getCourseSubjects(courseCode);

  const workload = getCourseWorkload(courseCode);

  return (
    <span itemProp={itemProp} itemScope itemType="https://schema.org/Course" itemID={itemID}>
      <link itemProp="url" href={getCourseUrl(courseCode)} />
      <meta itemProp="name" content={getCourseName(courseCode)} />
      <meta itemProp="description" content={getCourseDescription(courseCode)} />
      {certification && (
        <span itemProp="educationalCredentialAwarded" itemScope itemType="https://schema.org/EducationalOccupationalCredential">
          <meta itemProp="name" content={certification} />
        </span>
      )}
      <meta itemProp="availableLanguage" content="en" />
      {subjects?.map((s, i) => (<span key={i} itemProp="teaches" content={s} />))}
      <span itemProp="provider" itemScope itemType="https://schema.org/EducationalOrganization" itemID="https://www.qceventplanning.com/#school">
        <link itemProp="url" href="https://www.qceventplanning.com" />
        <meta itemProp="name" content="QC Event School" />
      </span>
      {price && (
        <span itemProp="offers" itemScope itemType="https://schema.org/Offer">
          <meta itemProp="priceCurrency" content="USD" />
          <meta itemProp="price" content={price.cost.toFixed(2)} />
          <link itemProp="url" href="https://enroll.qceventplanning.com" />
          <meta itemProp="availability" content="https://schema.org/InStock" />
        </span>
      )}
      <span itemProp="hasCourseInstance" itemScope itemType="https://schema.org/CourseInstance">
        <meta itemProp="courseMode" content="online" />
        {workload && <meta itemProp="courseWorkload" content={workload} />}
      </span>
    </span>
  );
};
