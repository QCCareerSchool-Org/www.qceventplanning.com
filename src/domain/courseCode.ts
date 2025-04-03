export type CourseCode = 'ep' | 'ce' | 'wp' | 'cp' | 'ed' | 'lw' | 'dw' | 'fd' | 've' | 'eb' | 'fl' | 'pe';

export const isCourseCode = (obj: unknown): obj is CourseCode => {
  return typeof obj === 'string' && [ 'ep', 'ce', 'wp', 'cp', 'ed', 'lw', 'dw', 'fd', 've', 'eb', 'fl', 'pe' ].includes(obj);
};

const descriptions: Record<CourseCode, string> = {
  ep: '...',
  wp: '...',
  ce: '...',
  cp: '...',
  lw: '...',
  dw: '...',
  ed: '...',
  eb: 'QC\'s Accelerate Your Business course provides students with the most comprehensive training available to grow your event planning business.',
  fd: '...',
  fl: '...',
  pe: '...',
  ve: '...',
};

export const getCourseDescription = (courseCode: CourseCode): string => {
  return descriptions[courseCode];
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
    case 'fl':
      return 'Festivals and Live Events Course';
    case 'pe':
      return 'Promotional Event Planning';
  }
};

export const getCourseUrl = (courseCode: CourseCode): string => {
  switch (courseCode) {
    case 'ep':
      return 'https://www.qceventplanning.com/online-event-courses/event-and-wedding-planning';
    case 'ce':
      return 'https://www.qceventplanning.com/online-event-courses/wedding-planning';
    case 'wp':
      return 'https://www.qceventplanning.com/online-event-courses/event-planning';
    case 'cp':
      return 'https://www.qceventplanning.com/online-event-courses/corporate-event-planning';
    case 'ed':
      return 'https://www.qceventplanning.com/online-event-courses/event-decor';
    case 'lw':
      return 'https://www.qceventplanning.com/online-event-courses/luxury-wedding-planning';
    case 'dw':
      return 'https://www.qceventplanning.com/online-event-courses/destination-wedding-planning.';
    case 'fd':
      return 'https://www.qceventplanning.com/online-event-courses/floral-design.';
    case 've':
      return 'https://www.qceventplanning.com/online-event-courses/virtual-event-planning.';
    case 'eb':
      return 'https://www.qceventplanning.com/online-event-courses/accelerate-your-business';
    case 'fl':
      return 'https://www.qceventplanning.com/online-event-courses/festivals-and-live-events';
    case 'pe':
      return 'https://www.qceventplanning.com/online-event-courses/promotional-event-planning';
  }
};
