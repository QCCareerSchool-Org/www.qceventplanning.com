export const courseCodes = [ 'ep', 'ce', 'wp', 'cp', 'ed', 'lw', 'dw', 'fd', 've', 'eb', 'fl', 'pe' ] as const;

export type CourseCode = typeof courseCodes[number];

const courseCodeSet = new Set<CourseCode>(courseCodes);

export const isCourseCode = (obj: unknown): obj is CourseCode => {
  return typeof obj === 'string' && courseCodeSet.has(obj as CourseCode);
};

const names = {
  ep: 'Event and Wedding Planning Course',
  ce: 'Event Planning Course',
  wp: 'Wedding Planning Course',
  cp: 'Corporate Event Planning Course',
  ed: 'Event Decor Course',
  lw: 'Luxury Wedding and Event Planning Course',
  dw: 'Destination Wedding Planning Course',
  fd: 'Floral Design Course',
  ve: 'Virtual Event Planning Course',
  eb: 'Accelerate Your Business Workshop',
  fl: 'Festivals and Live Events Course',
  pe: 'Promotional Event Planning',
} as const satisfies Readonly<Record<CourseCode, string>>;

const baseUrl = 'https://www.qceventplanning.com';

const urls = {
  ep: `${baseUrl}/online-event-courses/event-and-wedding-planning`,
  ce: `${baseUrl}/online-event-courses/event-planning`,
  wp: `${baseUrl}/online-event-courses/wedding-planning`,
  cp: `${baseUrl}/online-event-courses/corporate-event-planning`,
  ed: `${baseUrl}/online-event-courses/event-decor`,
  lw: `${baseUrl}/online-event-courses/luxury-wedding-and-event-planning`,
  dw: `${baseUrl}/online-event-courses/destination-wedding-planning.`,
  fd: `${baseUrl}/online-event-courses/floral-design.`,
  ve: `${baseUrl}/online-event-courses/virtual-event-planning.`,
  eb: `${baseUrl}/online-event-courses/accelerate-your-business`,
  fl: `${baseUrl}/online-event-courses/festivals-and-live-events`,
  pe: `${baseUrl}/online-event-courses/promotional-event-planning`,
} as const satisfies Readonly<Record<CourseCode, string>>;

const descriptions = {
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
} as const satisfies Readonly<Record<CourseCode, string | undefined>>;

const certifications = {
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
} as const satisfies Readonly<Record<CourseCode, string | undefined>>;

const subjects = {
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
} as const satisfies Readonly<Record<CourseCode, readonly string[] | undefined>>;

const workloads = {
  ep: '20 hours of reading, 6 hours of video, and 6 hours of assignments, usually completed over 4 to 6 months',
  wp: '3 hours of reading and assignments, and 4 hours of video, usually completed over 4 to 6 months',
  ce: '5 hours of reading and assignments, and 2 hours of video, usually completed over 4 to 6 months',
  cp: '23 hours of reading and 8 hours of assignments, usually completed over 4 to 6 months',
  lw: '10 hours of reading and assignments, usually completed over 4 to 6 months',
  dw: '8 hours of reading and assignments, usually completed over 4 to 6 months',
  ed: '9 hours of reading and assignments, usually completed over 4 to 6 months',
  eb: 'usually completed over 4 to 6 months',
  fd: '7 hours of reading, 5 hours of video, 8 hours of assignments, and 2 hours of quizzes, usually completed over 4 to 6 months',
  fl: '7 hours of reading and 5 hours of assignments, usually completed over 4 to 6 months',
  pe: 'usually completed over 4 to 6 months',
  ve: '91 minutes of reading, 51 minutes of assignments, and 39 minutes of quizzes, usually completed over 4 to 6 months',
} as const satisfies Readonly<Record<CourseCode, string | undefined>>;

export const getCourseName = (c: CourseCode): string => {
  return names[c];
};

export const getCourseUrl = (c: CourseCode): string => {
  return urls[c];
};

export const getCourseDescription = (c: CourseCode): string | undefined => {
  return descriptions[c];
};

export const getCourseCertification = (c: CourseCode): string | undefined => {
  return certifications[c];
};

export const getCourseSubjects = (c: CourseCode): readonly string[] | undefined => {
  return subjects[c];
};

export const getCourseWorkload = (c: CourseCode): string | undefined => {
  return workloads[c];
};
