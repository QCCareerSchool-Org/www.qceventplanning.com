import type { CourseCode } from './courseCode';

interface CourseData {
  name: string;
  url: string;
  description: string;
  certification: string | undefined;
  subjects: string[] | undefined;
  workload: string | undefined;
}

const baseUrl = 'https://www.qceventplanning.com';

export const dataMap: Readonly<Record<CourseCode, CourseData>> = {
  ep: {
    name: 'Event and Wedding Planning Course',
    url: `${baseUrl}/online-event-courses/event-and-wedding-planning`,
    description: 'Become a certified event and wedding planner with QC Event School\'s online course! Learn to plan any event, gain industry skills and launch a successful career. Start today!',
    certification: 'International Event and Wedding Planning Professional™',
    subjects: [
      'The Fundamentals of Event Planning',
      'Event Venues and Vendors',
      'The Planning Process',
      'Risk Management and Contingency Planning',
    ],
    workload: '20 hours of reading, 6 hours of video, and 6 hours of assignments, usually completed over 4 to 6 months',
  },
  ce: {
    name: 'Event Planning Course',
    url: `${baseUrl}/online-event-courses/event-planning`,
    description: 'Master everything from the planning process to day-of wedding coordination with QC Event School\'s online course. Sign up today to become a certified wedding planner!',
    certification: 'International Event Planning Professional™',
    subjects: [
      'The Fundamentals of Event Planning',
      'Event Venues and Vendors',
      'The Planning Process',
      'Risk Management and Contingency Planning',
    ],
    workload: '5 hours of reading and assignments, and 2 hours of video, usually completed over 4 to 6 months',
  },
  wp: {
    name: 'Wedding Planning Course',
    url: `${baseUrl}/online-event-courses/wedding-planning`,
    description: 'Become a certified event planner with QC Event School! Learn to plan successful industry events, milestone parties and build a thriving career in the event industry. Start now! ',
    certification: 'International Wedding Planning Professional™',
    subjects: [
      'The Ins and Outs of Wedding Planning',
      'Wedding Day Coordination',
      'Running Your Event Planning Business',
    ],
    workload: '3 hours of reading and assignments, and 4 hours of video, usually completed over 4 to 6 months',
  },
  cp: {
    name: 'Corporate Event Planning Course',
    url: `${baseUrl}/online-event-courses/corporate-event-planning`,
    description: 'Learn to plan successful product launches, trade shows and promotional events with QC Event School! Enroll today and earn a professional certification with QC\'s online course.',
    certification: 'International Corporate Event Planning Professional™',
    subjects: [
      'Introduction to Corporate Event Planning',
      'Working with Venues and Technology',
      'Designing and Executing Corporate Events',
      'Event Types and Evaluation',
      'Hands-On Training',
      'Business Training',
    ],
    workload: '23 hours of reading and 8 hours of assignments, usually completed over 4 to 6 months',
  },
  ed: {
    name: 'Event Decor Course',
    url: `${baseUrl}/online-event-courses/event-decor`,
    description: 'Learn to plan extravagant events that leave a lasting impression and attract high-end clients with QC\'s online Luxury Wedding & Event Planning course. Enroll today!',
    certification: 'International Event Decorating Professional™',
    subjects: [
      'Introduction to Event Decor',
      'Components of Event Decor',
      'Build Your Career in Event Decor',
    ],
    workload: '9 hours of reading and assignments, usually completed over 4 to 6 months',
  },
  lw: {
    name: 'Luxury Wedding and Event Planning Course',
    url: `${baseUrl}/online-event-courses/luxury-wedding-and-event-planning`,
    description: 'Master long-distance planning and seamless travel coordination to create stunning weddings worldwide with QC\'s online Destination Wedding Planning course. Enroll today!',
    certification: 'Luxury Wedding and Event Specialist',
    subjects: [
      'The Fundamentals of Luxury Event Planning',
      'Marketing Strategies for Luxury Services',
      'Luxury Clients and Budgets',
      'High-End Vendors and Trends',
    ],
    workload: '10 hours of reading and assignments, usually completed over 4 to 6 months',
  },
  dw: {
    name: 'Destination Wedding Planning Course',
    url: `${baseUrl}/online-event-courses/destination-wedding-planning.`,
    description: 'Learn to use florals, color theory, lighting and accessories to design breathtaking events with QC Event School\'s online Event Decor course. Start today!',
    certification: 'Destination Wedding Specialist',
    subjects: [
      'Introduction to Planning Destination Weddings',
      'The Planning Process',
      'Communication Strategies',
      'Running Your Business',
    ],
    workload: '8 hours of reading and assignments, usually completed over 4 to 6 months',
  },
  fd: {
    name: 'Floral Design Course',
    url: `${baseUrl}/online-event-courses/floral-design.`,
    description: 'QC\'s Accelerate Your Business course provides students with comprehensive online training to grow your event planning business. Start today!',
    certification: 'International Floral Design Professional™',
    subjects: [
      'The Floral Design Industry',
      'The Fundamentals of Floral Design',
      'Running Your Floral Design Business',
      'Decorative Arrangements',
      'Flowers to Wear & Carry',
      'Advanced Floral Designs',
    ],
    workload: '7 hours of reading, 5 hours of video, 8 hours of assignments, and 2 hours of quizzes, usually completed over 4 to 6 months',
  },
  ve: {
    name: 'Virtual Event Planning Course',
    url: `${baseUrl}/online-event-courses/virtual-event-planning.`,
    description: 'QC\'s Floral Design certification course offers a comprehensive curriculum covering design principles, advanced techniques, and bouquet designs. Sign up today!',
    certification: undefined,
    subjects: undefined,
    workload: '91 minutes of reading, 51 minutes of assignments, and 39 minutes of quizzes, usually completed over 4 to 6 months',
  },
  eb: {
    name: 'Accelerate Your Business Workshop',
    url: `${baseUrl}/online-event-courses/accelerate-your-business`,
    description: 'Build a career in the exciting world of live events with QC Event School\'s online course. Learn to plan concerts, sports entertainment, festivals and more. Start today!',
    certification: undefined,
    subjects: [
      'Branding and Promotions',
      'Your Online Presence',
      'Attract Your Target Clients',
      'Successful Project Management',
    ],
    workload: 'usually completed over 4 to 6 months',
  },
  fl: {
    name: 'Festivals and Live Events Course',
    url: `${baseUrl}/online-event-courses/festivals-and-live-events`,
    description: 'With QC Event School\'s online course, you\'ll learn to plan impactful promotional events that impress corporate clients, from product launches to sales campaigns. Start today!',
    certification: 'International Festivals and Live Events Planning Professional™',
    subjects: [
      'The Fundamentals of Festivals and Live Events',
      'The Planning Process for Live Events',
      'Partnerships and Working with Vendors',
    ],
    workload: '7 hours of reading and 5 hours of assignments, usually completed over 4 to 6 months',
  },
  pe: {
    name: 'Promotional Event Planning',
    url: `${baseUrl}/online-event-courses/promotional-event-planning`,
    description: 'Expand your services, plan engaging online events and reach clients all over the world with QC\'s Virtual Event Planning training.',
    certification: 'Promotional Events Specialist',
    subjects: [
      'Introduction to Promotional Events',
      'Promotional Event Marketing and Execution',
      'Trends and Technology',
    ],
    workload: 'usually completed over 4 to 6 months',
  },
  aa: {
    name: 'All Access Program',
    url: `${baseUrl}/online-event-courses/all-access-program`,
    description: '',
    certification: undefined,
    subjects: undefined,
    workload: undefined,
  },
};
