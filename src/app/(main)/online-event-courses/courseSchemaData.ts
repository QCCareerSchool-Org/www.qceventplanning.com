import type { CourseCode } from '@/domain/courseCode';
import { getCourseCertificate, getCourseDescription, getCourseName, getCourseUrl } from '@/domain/courseCode';

export type Course = {
  name: string;
  position?: number;
  url: string;
  description: string;
  certificate?: string | undefined;
  courseCode: CourseCode;
};

export const courses: Record<string, Course> = {
  'event-wedding-planning': {
    name: getCourseName('ep'),
    url: getCourseUrl('ep'),
    description: getCourseDescription('ep'),
    certificate: getCourseCertificate('ep') ?? undefined,
    courseCode: 'ep',
  },
  'event-planning': {
    name: getCourseName('ce'),
    url: getCourseUrl('ce'),
    description: getCourseDescription('ce'),
    certificate: getCourseCertificate('ce') ?? undefined,
    courseCode: 'ce',
  },
  'wedding-planning': {
    name: getCourseName('wp'),
    url: getCourseUrl('wp'),
    description: getCourseDescription('wp'),
    certificate: getCourseCertificate('wp') ?? undefined,
    courseCode: 'wp',
  },
  'corporate-event-planning': {
    name: getCourseName('cp'),
    url: getCourseUrl('cp'),
    description: getCourseDescription('cp'),
    certificate: getCourseCertificate('cp') ?? undefined,
    courseCode: 'cp',
  },
  'event-decor': {
    name: getCourseName('ed'),
    url: getCourseUrl('ed'),
    description: getCourseDescription('ed'),
    certificate: getCourseCertificate('ed') ?? undefined,
    courseCode: 'ed',
  },
  'luxury-wedding-planning': {
    name: getCourseName('lw'),
    url: getCourseUrl('lw'),
    description: getCourseDescription('lw'),
    certificate: getCourseCertificate('lw') ?? undefined,
    courseCode: 'lw',
  },
  'destination-wedding-planning': {
    name: getCourseName('dw'),
    url: getCourseUrl('dw'),
    description: getCourseDescription('dw'),
    certificate: getCourseCertificate('dw') ?? undefined,
    courseCode: 'dw',
  },
  'floral-design': {
    name: getCourseName('fd'),
    url: getCourseUrl('fd'),
    description: getCourseDescription('fd'),
    certificate: getCourseCertificate('fd') ?? undefined,
    courseCode: 'fd',
  },
  'virtual-event-planning': {
    name: getCourseName('ve'),
    url: getCourseUrl('ve'),
    description: getCourseDescription('ve'),
    certificate: getCourseCertificate('ve') ?? undefined,
    courseCode: 've',
  },
  'accelerate-your-business': {
    name: getCourseName('eb'),
    url: getCourseUrl('eb'),
    description: getCourseDescription('eb'),
    certificate: getCourseCertificate('eb') ?? undefined,
    courseCode: 'eb',
  },
  'festivals-and-live-events': {
    name: getCourseName('fl'),
    url: getCourseUrl('fl'),
    description: getCourseDescription('fl'),
    certificate: getCourseCertificate('fl') ?? undefined,
    courseCode: 'fl',
  },
  'promotional-events': {
    name: getCourseName('pe'),
    url: getCourseUrl('pe'),
    description: getCourseDescription('pe'),
    certificate: getCourseCertificate('pe') ?? undefined,
    courseCode: 'pe',
  },
};
