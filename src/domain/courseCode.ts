import { dataMap } from './courseData';

export const courseCodes = [ 'ep', 'ce', 'wp', 'cp', 'ed', 'lw', 'dw', 'fd', 've', 'eb', 'fl', 'pe', 'aa' ] as const;

/** The courses included in the All-Access Program */
export const aapCourseCodes: CourseCode[] = [ 'ep', 'cp', 'ed', 'lw', 'dw', 'fl', 'eb', 've' ] as const;

export type CourseCode = typeof courseCodes[number];

const courseCodeSet = new Set<CourseCode>(courseCodes);

export const isCourseCode = (obj: unknown): obj is CourseCode => {
  return typeof obj === 'string' && courseCodeSet.has(obj as CourseCode);
};

export const getCourseName = (c: CourseCode): string => {
  return dataMap[c].name;
};

export const getCourseUrl = (c: CourseCode): string => {
  return dataMap[c].url;
};

export const getCourseDescription = (c: CourseCode): string | undefined => {
  return dataMap[c].description;
};

export const getCourseCertification = (c: CourseCode): string | undefined => {
  return dataMap[c].certification;
};

export const getCourseSubjects = (c: CourseCode): readonly string[] | undefined => {
  return dataMap[c].subjects;
};

export const getCourseWorkload = (c: CourseCode): string | undefined => {
  return dataMap[c].workload;
};
