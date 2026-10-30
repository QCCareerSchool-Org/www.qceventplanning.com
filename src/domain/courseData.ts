import type { CourseCode } from './courseCode';

interface CourseData {
  name: string;
  url: string | undefined;
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
    description: 'Become a certified event and wedding planner with QC\'s online course. Learn to plan weddings and celebrations, then start your own business or get hired in the industry.',
    certification: 'International Event and Wedding Planning Professional™ (IEWP™)',
    subjects: [
     'The Foundations of Event Planning',
      'Celebrations and Milestone Parties',
      'Parties and Charity Events',
      'Essential Wedding Components',
      'The Wedding Party, Attire & Aesthetics',
      'Wedding Traditions and Planning Precautions',
      'Business Training',
    ],
    workload: 'About 35 hours of reading, video, and assignments. Students have 12 months to complete the course, and most finish in 3-6 months working part time.',
  },
  ce: {
    name: 'Event Planning Course',
    url: `${baseUrl}/online-event-courses/event-planning`,
    description: 'Become a certified event planner with QC\'s online course. Plan parties, milestones, and community events, then start your own business or join an event team.',
    certification: 'International Event Planning Professional™ (IEPP™)',
    subjects: [
      'The Fundamentals of Event Planning',
      'Event Venues and Vendors',
      'The Planning Process',
      'Risk Management and Contingency Planning'
      'Business Training',
    ],
    workload: 'About 10 hours of reading, assignments, and video tutorials. Students have 12 months to complete the course, and most finish in 3-6 months working part time.',
  },
  wp: {
    name: 'Wedding Planning Course',
    url: `${baseUrl}/online-event-courses/wedding-planning`,
    description: 'Become a certified wedding planner with QC\'s online course. Plan every detail of a wedding from the engagement part to day-of coordination, then launch your business or join a planning company.',
    certification: 'International Wedding Planning Professional™ (IWPP™)',
    subjects: [
      'The Ins and Outs of Wedding Planning',
      'Wedding Day Coordination',
      'Running Your Event Planning Business',
    ],
    workload: 'About 10 hours of reading, assignments, and video tutorials. Students have 12 months to complete the course, and most finish in 3-6 months working part time.',
  },
  cp: {
    name: 'Corporate Event Planning Course',
    url: `${baseUrl}/online-event-courses/corporate-event-planning`,
    description: 'Become a certified corporate event planner with QC\'s online course. Plan conferences, launches, and trade shows for your clients or join a company\'s event team.',
    certification: 'International Corporate Event Planning Professional™ (ICPP™)',
    subjects: [
      'Introduction to Corporate Event Planning',
      'Working with Venues and Technology',
      'Designing and Executing Corporate Events',
      'Event Types and Evaluation',
      'Hands-On Training',
      'Business Training',
    ],
    workload: 'About 35 hours of readings, assignments and video tutorials, with up to 12 months to complete the course. Most students finish in 3-6 months working part time.',
  },
  ed: {
    name: 'Event Decor Course',
    url: `${baseUrl}/online-event-courses/event-decor`,
    description: 'Become a certified event decorator with QC\'s online course. Design event themes, lighting, and tablescapes, and launch your own business or offer event styling services.',
    certification: 'International Event Decorating Professional™ (IEDP™)',
    subjects: [
      'Introduction to Event Decor',
      'Components of Event Decor',
      'Build Your Career in Event Decor',
    ],
    workload: 'About 10 hours of reading and assignments, with 12 months to complete the course. Most students finish in 3 -6 months.',
  },
  lw: {
    name: 'Luxury Wedding and Event Planning Course',
    url: `${baseUrl}/online-event-courses/luxury-wedding-and-event-planning`,
    description: 'Become a certified luxury wedding and event planner with QC\'s online specialty course for planners. Win high-end clients and charge premium fees for planning extravagant events.',
    certification: 'Luxury Wedding and Event Specialist (LWES)',
    subjects: [
      'The Fundamentals of Luxury Event Planning',
      'Marketing Strategies for Luxury Services',
      'Luxury Clients and Budgets',
      'High-End Vendors and Trends',
    ],
    workload: '10 hours of reading and assignments, usually completed over 3 to 6 months with up to 12 months to complete',
  },
  dw: {
    name: 'Destination Wedding Planning Course',
    url: `${baseUrl}/online-event-courses/destination-wedding-planning.`,
    description:'Become a certified destination wedding planner with QC\'s online specialty course for trained planners. Plan weddings abroad for couples anywhere in the world.',
    certification: 'Destination Wedding Specialist (DWS)',
    subjects: [
      'Introduction to Planning Destination Weddings',
      'The Planning Process',
      'Communication Strategies',
      'Running Your Business',
    ],
    workload: '8 hours of reading and assignments, usually completed over 4 to 6 months with up to 12 months to complete',
  },
  fd: {
    name: 'Floral Design Course',
    url: `${baseUrl}/online-event-courses/floral-design.`,
    description: 'Become a certified floral designer with QC\'s online course. Create wedding and event florals, vase arrangments and learn plant care to open your own floral business or work in a flower shop.',
    certification: 'International Floral Design Professional™ (IFDP™)',
    subjects: [
      'The Floral Design Industry',
      'The Fundamentals of Floral Design',
      'Running Your Floral Design Business',
      'Decorative Arrangements',
      'Flowers to Wear & Carry',
      'Advanced Floral Designs',
    ],
    workload: 'About 25 hours of reading, practical assignments, quizzes and video tutorials. Students have 12 months to complete the course, and most finish in 3-6 months working part time.',
  },
  ve: {
    name: 'Virtual Event Planning Course',
    url: `${baseUrl}/online-event-courses/virtual-event-planning.`,
    description: 'Speciality training for event planners to learn the logistics of planning engaging online events for any client or business.',
    certification: 'Certificate of Completion',
    subjects: [
      'Virtual Event Technology',
      'The Virtual Guest Experience',
      'The Basics of Virtual Event Planning',
    ],
    workload: 'About three hours of reading, practical assignments and quizzes, usually completed over 3 to 6 months.',
  },
  eb: {
    name: 'Accelerate Your Business Workshop',
    url: `${baseUrl}/online-event-courses/accelerate-your-business`,
    description: 'Grow your event planning business with QC\'s online specialty workshop. Build your brand, attract more clients, market online, and run a smoother business.',
    certification: 'Certificate of Completion',
    subjects: [
      'Branding and Promotions',
      'Your Online Presence',
      'Attract Your Target Clients',
      'Successful Project Management',
    ],
    workload: 'About 20 hours of reading, assignments, quizzes and video instruction, usually completed in 3-6 months. Students have up to 12 months to complete the course.',
  },
  fl: {
    name: 'Festivals and Live Events Course',
    url: `${baseUrl}/online-event-courses/festivals-and-live-events`,
    description: 'Become a certified festival and live event planner with QC\'s online specialty course for corporate planners. Plan festivals, concerts, and sporting events that impress corporate clients.',
    certification: 'International Festivals and Live Events Planning Professional™ (IFLP™)',
    subjects: [
      'The Fundamentals of Festivals and Live Events',
      'The Planning Process for Live Events',
      'Partnerships and Working with Vendors',
    ],
    workload: '7 hours of reading and 5 hours of assignments, usually completed over 3 to 6 months. Students have up to 12 months to complete the course.',
  },
  pe: {
    name: 'Promotional Event Planning',
    url: `${baseUrl}/online-event-courses/promotional-event-planning`,
    description: 'Become a certified promotional events specialist with QC\'s online specialty course for corporate planners. Plan launches and pop-ups that get brands noticed.',
    certification: 'Promotional Events Specialist (PES)',
    subjects: [
      'Introduction to Promotional Events',
      'Promotional Event Marketing and Execution',
      'Trends and Technology',
    ],
    workload: 'About 8 hours of reading, video instrucitona and practical assignments, usually completed over 3 to 6 months. Students have 12 months to complete the course.',
  },
  aa: {
    name: 'All Access Program',
    url: `${baseUrl}/online-event-courses/all-access-program`,
    description: 'Get all of QC\'s online event planning courses in one enrollment and earn the Master Planner Certificate, so you can offer full-service planning and decor for every type of event.',
    certification: 'Master Planner Certificate (MPC),
    subjects: undefined,
    workload: 'Students have a full year to complete the program with extensions available upon request.',
  },
  tt: {
    name: 'Travel and Tourism',
    url: undefined,
    description: '',
    certification: '',
    subjects: undefined,
    workload: undefined,
  },
};
