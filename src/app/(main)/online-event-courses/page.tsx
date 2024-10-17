import type { Metadata } from 'next';

import { OnlineCourseSection } from './onlineCourseSection';
import type { PageComponent } from '@/app/serverComponent';
import { GetStartedSection } from '@/components/getStartedSection';
import { ILEASection } from '@/components/ileaSection';
import { TestimonialSection } from '@/components/testimonialSection';

export const metadata: Metadata = {
  title: 'Online Event Courses',
};

const CoursesPage: PageComponent = () => (
  <>
    <section className="p-0" />
    <ILEASection />
    <OnlineCourseSection />
    <TestimonialSection id="TE-0006" />
    <GetStartedSection title="Get Started Today" text="Enroll Online and Start on Your Path to Becoming a Certified Event Planner" />
  </>
);

export default CoursesPage;
