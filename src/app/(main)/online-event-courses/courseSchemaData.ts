import type { CourseCode } from '@/domain/courseCode';

export type Course = {
  name: string;
  position?: number;
  url: string;
  description: string;
  certificate?: string | undefined;
  courseCode: CourseCode;
};
