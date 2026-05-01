import { testimonials } from '../testimonial/data';
import type { CourseCode } from '@/domain/courseCode';
import { getCourseDescription, getCourseName, getCourseUrl } from '@/domain/courseCode';

interface EventTestimonial {
  courseName: string;
  courseDescription: string;
  courseUrl: string;
  rating: 0 | 1 | 2 | 3 | 4 | 5;
  quote: string;
  studentName: string;
  imageUrl: string;
}

const eventCourseCodes = new Set<CourseCode>([ 'ep', 'ce', 'wp', 'cp', 'ed', 'lw', 'dw', 've', 'eb', 'fl', 'pe', 'aa' ]);

const fallbackCourseCode: CourseCode = 'aa';

const getPrimaryCourseCode = (courseCodes: CourseCode[]): CourseCode | undefined => {
  if (courseCodes.length === 0) {
    return fallbackCourseCode;
  }

  return courseCodes.find(courseCode => eventCourseCodes.has(courseCode));
};

export const eventTestimonials: EventTestimonial[] = Object.values(testimonials).flatMap(testimonial => {
  if (!testimonial) {
    return [];
  }

  const courseCode = getPrimaryCourseCode(testimonial.courses);
  if (!courseCode) {
    return [];
  }

  return [
    {
      courseName: getCourseName(courseCode),
      courseDescription: getCourseDescription(courseCode) ?? '',
      courseUrl: getCourseUrl(courseCode),
      rating: testimonial.stars,
      quote: testimonial.short.join(' '),
      studentName: testimonial.name,
      imageUrl: testimonial.image.src,
    },
  ];
});
