export type CourseCode = 'ep' | 'ce' | 'wp' | 'cp' | 'ed' | 'lw' | 'dw' | 'fd' | 've' | 'eb' | 'fl' | 'pe';

export const courseCodes: readonly CourseCode[] = [ 'ep', 'ce', 'wp', 'cp', 'ed', 'lw', 'dw', 'fd', 've', 'eb', 'fl', 'pe' ];

export const isCourseCode = (obj: unknown): obj is CourseCode => {
  return typeof obj === 'string' && (courseCodes as string[]).includes(obj);
};

const descriptions: Readonly<Record<CourseCode, string | undefined>> = {
  ep: 'Become a certified event and wedding planner with QC Event School\'s online course! Learn to plan any event, gain industry skills and launch a successful career. Start today!',
  wp: 'Master everything from the planning process to day-of wedding coordination with QC Event School\'s online course. Sign up today to become a certified wedding planner!',
  ce: 'Become a certified event planner with QC Event School! Learn to plan successful industry events, milestone parties and build a thriving career in the event industry. Start now! ',
  cp: 'Learn to plan successful product launches, trade shows and promotional events with QC Event School! Enroll today and earn a professional certification with QC\'s online course.',
  lw: 'Learn to plan extravagant events that leave a lasting impression and attract high-end clients with QC\'s online Luxury Wedding & Event Planning course. Enroll today!',
  dw: 'Master long-distance planning and seamless travel coordination to create stunning weddings worldwide with QC\'s online Destination Wedding Planning course. Enroll today!',
  ed: 'Learn to use florals, color theory, lighting and accessories to design breathtaking events with QC Event School\'s online Event Decor course. Start today!',
  eb: 'QC\'s Accelerate Your Business course provides students with comprehensive online training to grow your event planning business. Start today!',
  fd: 'QC\'s Floral Design certification course offers a comprehensive curriculum covering design principles, advanced techniques, and bouquet designs. Sign up today!',
  fl: 'Build a career in the exciting world of live events with QC Event School\'s online course. Learn to plan concerts, sports entertainment, festivals and more. Start today! ',
  pe: 'With QC Event School\'s online course, you\'ll learn to plan impactful promotional events that impress corporate clients, from product launches to sales campaigns. Start today!',
  ve: 'Expand your services, plan engaging online events and reach clients all over the world with QC\'s Virtual Event Planning training.',
};

const certifications: Readonly<Record<CourseCode, string | undefined>> = {
  ep: 'International Event and Wedding Planning Professional™',
  wp: 'International Wedding Planning Professional™',
  ce: 'International Event Planning Professional™',
  cp: 'International Corporate Event Planning Professional™',
  lw: 'Luxury Wedding and Event Specialist',
  dw: 'Destination Wedding Specialist',
  ed: 'International Event Decorating Professional™',
  eb: undefined,
  fd: 'International Floral Design Professional™',
  fl: 'International Festivals and Live Events Planning Professional™',
  pe: 'Promotional Events Specialist',
  ve: undefined,
};

const subjects: Readonly<Record<CourseCode, readonly string[] | undefined>> = {
  ep: [
    'The Fundamentals of Event Planning',
    'Event Venues and Vendors',
    'The Planning Process',
    'Risk Management and Contingency Planning',
  ],
  wp: [
    'The Ins and Outs of Wedding Planning',
    'Wedding Day Coordination',
    'Running Your Event Planning Business',
  ],
  ce: [
    'The Fundamentals of Event Planning',
    'Event Venues and Vendors',
    'The Planning Process',
    'Risk Management and Contingency Planning',
  ],
  cp: [
    'Introduction to Corporate Event Planning',
    'Working with Venues and Technology',
    'Designing and Executing Corporate Events',
    'Event Types and Evaluation',
    'Hands-On Training',
    'Business Training',
  ],
  lw: [
    'The Fundamentals of Luxury Event Planning',
    'Marketing Strategies for Luxury Services',
    'Luxury Clients and Budgets',
    'High-End Vendors and Trends',
  ],
  dw: [
    'Introduction to Planning Destination Weddings',
    'The Planning Process',
    'Communication Strategies',
    'Running Your Business',
  ],
  ed: [
    'Introduction to Event Decor',
    'Components of Event Decor',
    'Build Your Career in Event Decor',
  ],
  eb: [
    'Branding and Promotions',
    'Your Online Presence',
    'Attract Your Target Clients',
    'Successful Project Management',
  ],
  fd: [
    'The Floral Design Industry',
    'The Fundamentals of Floral Design',
    'Running Your Floral Design Business',
    'Decorative Arrangements',
    'Flowers to Wear & Carry',
    'Advanced Floral Designs',
  ],
  fl: [
    'The Fundamentals of Festivals and Live Events',
    'The Planning Process for Live Events',
    'Partnerships and Working with Vendors',
  ],
  pe: [
    'Introduction to Promotional Events',
    'Promotional Event Marketing and Execution',
    'Trends and Technology',
  ],
  ve: undefined,
};

const workloads: Readonly<Record<string, string | undefined>> = {
  ep: undefined,
  wp: undefined,
  ce: undefined,
  cp: undefined,
  lw: undefined,
  dw: undefined,
  ed: undefined,
  fd: undefined,
  fl: undefined,
  pe: undefined,
  vd: undefined,
};

export const getCourseDescription = (courseCode: CourseCode): string | undefined => {
  return descriptions[courseCode];
};

export const getCourseSubjects = (courseCode: CourseCode): readonly string[] | undefined => {
  return subjects[courseCode];
};

export const getCourseWorkload = (courseCode: CourseCode): string | undefined => {
  return workloads[courseCode];
};

export const getCourseCertificate = (courseCode: CourseCode): string | undefined => {
  return certifications[courseCode];
};

export const getCourseName = (courseCode: CourseCode): string => {
  switch (courseCode) {
    case 'ep':
      return 'Event and Wedding Planning Course';
    case 'ce':
      return 'Event Planning Course';
    case 'wp':
      return 'Wedding Planning Course';
    case 'cp':
      return 'Corporate Event Planning Course';
    case 'ed':
      return 'Event Decor Course';
    case 'lw':
      return 'Luxury Wedding and Event Planning Course';
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
  const baseUrl = 'https://www.qceventplanning.com';
  switch (courseCode) {
    case 'ep':
      return `${baseUrl}/online-event-courses/event-and-wedding-planning`;
    case 'ce':
      return `${baseUrl}/online-event-courses/wedding-planning`;
    case 'wp':
      return `${baseUrl}/online-event-courses/event-planning`;
    case 'cp':
      return `${baseUrl}/online-event-courses/corporate-event-planning`;
    case 'ed':
      return `${baseUrl}/online-event-courses/event-decor`;
    case 'lw':
      return `${baseUrl}/online-event-courses/luxury-wedding-and-event-planning`;
    case 'dw':
      return `${baseUrl}/online-event-courses/destination-wedding-planning.`;
    case 'fd':
      return `${baseUrl}/online-event-courses/floral-design.`;
    case 've':
      return `${baseUrl}/online-event-courses/virtual-event-planning.`;
    case 'eb':
      return `${baseUrl}/online-event-courses/accelerate-your-business`;
    case 'fl':
      return `${baseUrl}/online-event-courses/festivals-and-live-events`;
    case 'pe':
      return `${baseUrl}/online-event-courses/promotional-event-planning`;
  }
};
