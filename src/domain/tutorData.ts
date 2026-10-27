import { courseCodes } from './courseCode';
import type { Tutor } from './tutor';
import AlyssaPernaImage from '@/components/tutorImages/images/alyssa-perna.jpg';
import AnitaDiPaoloImage from '@/components/tutorImages/images/anita-dipaolo.jpg';
import DarcieGarciaImage from '@/components/tutorImages/images/darcie-garcia.jpg';
import HeatherHawesImage from '@/components/tutorImages/images/heather-hawes.jpg';
import KimberlyJerkinsImage from '@/components/tutorImages/images/kimberly-jerkins.jpg';
import MarkCheplowitzImage from '@/components/tutorImages/images/mark-cheplowitz.jpg';
import ReneeTucciImage from '@/components/tutorImages/images/renee-tucci.jpg';

export const tutors: Tutor[] = [
  {
    name: 'Alyssa Perna',
    subHeading: 'Principal and Managing Director of Experience Marketing and Events',
    text: 'Alyssa has over a decade of event operations experience ranging from leading multinational business-to-business conferences, festivals and tradeshows, press conferences, large-scale fundraisers, complex social events and more.',
    src: AlyssaPernaImage,
    courses: [ 'cp', 'fl', 'pe' ],
  },
  {
    name: 'Heather Hawes',
    subHeading: 'Event Operations Leader and Founder, Hawes Power LLC',
    text: 'Heather is an award-winning event operations leader with more than two decades of experience, spanning weddings to large-scale events with budgets exceeding $10 million. She has hosted former First Lady Michelle Obama at Spelman College’s Commencement and been recognized as a Meeting Pro to Watch. Through Hawes Power LLC, she provides event strategy, operational consulting, and fundraising services. Heather tutors Event & Wedding Planning and Travel and Tourism.',
    src: HeatherHawesImage,
    courses: [ 'ep', 'wp', 'ce', 'tt', 'aa' ],
  },
  {
    name: 'Anita DiPaolo',
    subHeading: 'Event and Wedding Planner; Founder of Grazie Gifts',
    text: 'Anita is a certified event and wedding planner who specializes in creating proposals within budget, and coordinating entire themed events starting from the simplest spark of inspiration.  She is also the founder of Grazie Gifts, a wedding favour and bomboniere company based in Ottawa, ON.  Anita tutors Event & Wedding Planning, Event Decor, Luxury Wedding & Event Planning, and Destination Wedding Planning.',
    src: AnitaDiPaoloImage,
    courses: [ 'ep', 'ce', 'wp', 'ed', 'lw', 'dw', 've', 'aa' ],
  },
  {
    name: 'Kimberly Jerkins',
    subHeading: 'Co-Owner and Lead Planner of Perfectly You Events',
    text: 'Kimberly is a QC Event School graduate and holds QC\'s International Event and Wedding Planning (IEWPTM) certification. She brings more than two decades of experience managing events and trade shows for corporate, retail, and nonprofit clients. Alongside her daughter, Hallye, she runs Perfectly You Events, a mother-daughter business specializing in planning, coordinating, and decorating weddings and special events throughout North Texas. Kimberly tutors Event & Wedding Planning, Event Decor, Luxury Wedding & Event Planning, Destination Wedding Planning, Festivals & Live Events, and Promotional Event Planning.',
    src: KimberlyJerkinsImage,
    courses: [ 'ep', 'cp', 'ed', 'lw', 'dw', 'fl', 'eb', 've', 'pe', 'aa' ],
  },
  {
    name: 'Darcie Garcia',
    subHeading: 'Founder of the Florapist Floral Artistry & Experiences',
    text: 'Darcie has more than three decades of experience in floral design, including managing large flower shops, and teaching floral design nationally. She is an accredited member and educator of the American Institute of Floral Designers (AIFD), an AIFD Certified Evaluating Judge (CEJ), and a Certified Floral Designer (CFD). Through The Florapist, Darcie designs wedding florals and leads floral design workshops throughout the Raleigh–Durham–Chapel Hill area. Darcie tutors QC’s Floral Design course.',
    src: DarcieGarciaImage,
    courses: [ 'fd' ],
  },
  {
    name: 'Renee Tucci',
    subHeading: 'Floral Educator & Author',
    text: 'Renee is an international floral educator, author, and designer based in Chalfont, Pennsylvania, and the author of Framing Floral Techniques (2021). She has exhibited at the Philadelphia Flower Show for more than 16 years, including producing the Princess Grace Rose Garden exhibit for the Embassy of Monaco in 2020. She teaches floral design at Bucks County Community College and serves on Teleflora’s national education team. Renee holds designations from the American Institute of Floral Designers, Professional Floral Communicators International, and the American Academy of Floriculture. She is a content expert and video instructor for QC\'s Floral Design course.',
    src: ReneeTucciImage,
    courses: [ 'fd' ],
  },
  {
    name: 'Mark Cheplowitz',
    subHeading: 'President and Executive Produce, Wizard of Ahs',
    text: 'Mark Cheplowitz is an award-winning event planner and President of Wizard of Ahs, a New York City-based event production company. His work has taken him around the world, with career highlights including producing the Super Bowl and the grand opening of the Rock & Roll Hall of Fame. He is a published author and internationally recognized speaker. Mark is an on-camera course expert for QC’s Corporate Event Planning and Festivals & Live Events courses.',
    src: MarkCheplowitzImage,
    courses: [ 'cp', 'fl' ],
  },
];

for (const courseCode of courseCodes) {
  if (!tutors.find(t => t.courses.includes(courseCode))) {
    throw Error(`No tutors found for course ${courseCode}`);
  }
}
