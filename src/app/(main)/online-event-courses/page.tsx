import type { Metadata } from 'next';

import type { Course, EducationalOrganization, ItemList, WithContext } from 'schema-dts';
import { OnlineCourseSection } from './onlineCourseSection';
import type { PageComponent } from '@/app/serverComponent';
import { GetStartedSection } from '@/components/getStartedSection';
import { GoogleReviewSection } from '@/components/googleReviewSection';
import { ILEASection } from '@/components/ileaSection';
import type { CourseCode } from '@/domain/courseCode';
import { courseCodes, getCourseCertificate, getCourseDescription, getCourseName, getCourseUrl } from '@/domain/courseCode';

export const metadata: Metadata = {
  title: 'Online Event Courses',
  alternates: {
    canonical: '/online-event-courses',
  },
};

const providerJsonLD: WithContext<EducationalOrganization> = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  '@id': '#provider',
  'name': 'QC Event School',
  'sameAs': [
    'https://www.linkedin.com/company/qc-career-school',
    'https://www.facebook.com/QCEventPlanning',
    'https://www.instagram.com/qceventschool',
    'https://www.youtube.com/@QCEvent',
  ],
};

const getCourseSchema = (c: CourseCode): Course => {
  const courseCertificate = getCourseCertificate(c);
  return {
    '@type': 'Course',
    'url': getCourseUrl(c),
    'name': getCourseName(c),
    'description': getCourseDescription(c),
    'educationalCredentialAwarded': courseCertificate ? {
      '@type': 'EducationalOccupationalCredential',
      'name': courseCertificate,
    } : undefined,
  };
};

const itemListjsonLD: WithContext<ItemList> = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  'itemListElement': courseCodes.map((c, i) => ({
    '@type': 'ListItem',
    'position': i + 1,
    'item': getCourseSchema(c),
  })),
};

const CoursesPage: PageComponent = () => (
  <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(providerJsonLD) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListjsonLD) }} />
    <section className="p-0" />
    <ILEASection />
    <OnlineCourseSection />
    <GoogleReviewSection className="bg-light" />
    <GetStartedSection title="Get Started Today" text="Enroll Online and Start on Your Path to Becoming a Certified Event Planner" />
  </>
);

export default CoursesPage;
