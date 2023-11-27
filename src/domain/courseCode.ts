export type CourseCode = 'ep' | 'ce' | 'wp' | 'cp' | 'ed' | 'lw' | 'dw' | 'fd' | 've' | 'eb';

export const isCourseCode = (obj: unknown): obj is CourseCode => {
  return typeof obj === 'string' && [ 'ep', 'ce', 'wp', 'cp', 'ed', 'lw', 'dw', 'fd', 've', 'eb' ].includes(obj);
};

export const getCourseName = (courseCode: CourseCode): string => {
  switch (courseCode) {
    case 'ep':
      return 'Event & Wedding Planning Course';
    case 'ce':
      return 'Event Planning Course';
    case 'wp':
      return 'Wedding Planning Course';
    case 'cp':
      return 'Corporate Event Planning Course';
    case 'ed':
      return 'Event Decor Course';
    case 'lw':
      return 'Luxury Wedding Planning Course';
    case 'dw':
      return 'Destination Wedding Planning Course';
    case 'fd':
      return 'Floral Design Course';
    case 've':
      return 'Virtual Event Planning Course';
    case 'eb':
      return 'Accelerate Your Business Workshop';
  }
};
