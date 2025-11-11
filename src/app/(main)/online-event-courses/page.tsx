import type { Metadata } from 'next';

import type { Course, ItemList, WithContext } from 'schema-dts';
import { OnlineCourseSection } from './onlineCourseSection';
import type { PageComponent } from '@/app/serverComponent';
import { GetStartedSection } from '@/components/getStartedSection';
import { GoogleReviewSection } from '@/components/googleReviewSection';
import { ILEASection } from '@/components/ileaSection';
import { courseCodes, getCourseCertificate, getCourseDescription, getCourseName, getCourseUrl } from '@/domain/courseCode';

export const metadata: Metadata = {
  title: 'Online Event Courses',
  alternates: {
    canonical: '/online-event-courses',
  },
};

const jsonLD: WithContext<ItemList> = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  'itemListElement': courseCodes.map((c, i) => {
    const courseCertificate = getCourseCertificate(c);
    return {
      '@type': 'ListItem',
      'position': i + 1,
      'item': {
        '@type': 'Course',
        'url': getCourseUrl(c),
        'name': getCourseName(c),
        'description': getCourseDescription(c),
        'educationalCredentialAwarded': courseCertificate ? {
          '@type': 'EducationalCredential',
          'name': courseCertificate,
        } : undefined,
        'provider': {
          '@type': 'EducationalOrganization',
          'name': 'QC Event School',
          'sameAs': [
            'https://www.linkedin.com/company/qc-career-school',
            'https://www.facebook.com/QCEventPlanning',
            'https://www.instagram.com/qceventschool',
            'https://www.youtube.com/@QCEvent',
          ],
        },
      } as Course,
    };
  }),
};

const CoursesPage: PageComponent = () => (
  <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }} />
    <section className="p-0" />
    <ILEASection />
    <OnlineCourseSection />
    <GoogleReviewSection className="bg-light" />
    <GetStartedSection title="Get Started Today" text="Enroll Online and Start on Your Path to Becoming a Certified Event Planner" />
  </>
);

export default CoursesPage;
