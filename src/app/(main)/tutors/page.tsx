import type { Metadata } from 'next';
import Link from 'next/link';

import { Blurb } from './blurb';
import { ILEASection } from '@/components/ileaSection';
import { TestimonialSection } from '@/components/testimonialSection';
import AlyssaPernaImage from '@/components/tutorImages/images/alyssa-perna.jpg';
import AnitaDiPaoloImage from '@/components/tutorImages/images/anita-dipaolo.jpg';
import HeatherHawesImage from '@/components/tutorImages/images/heather-hawes.jpg';
import KimberlyJerkinsImage from '@/components/tutorImages/images/kimberly-jerkins.jpg';
import DarcieGarciaImage from '@/components/tutorImages/images/darcie-garcia.jpg';
import ReneeTucciImage from '@/components/tutorImages/images/renee-tucci.jpg';
import MarkCheplowitzImage from '@/components/tutorImages/images/mark-cheplowitz.jpg';
import type { PageComponent } from '@/serverComponent';

export const metadata: Metadata = {
  title: 'Tutors',
  alternates: {
    canonical: '/tutors',
  },
};

const TutorsPage: PageComponent = () => (
  <>
    <section>
      <div className="container">
        <div className="row justify-content-center g-s">
          <div className="col-12 col-xl-10 col-xxl-8 text-xl-center">
            <h1 className="mb-3">QC Event School Tutors and Content Experts</h1>
            <p className="lead mb-0">Every QC Event School course is developed with leading event professionals. Two groups of experts shape your training. Your tutor is a working event or wedding planner who grades your assignments and guides you toward professional-level skills through personalized, audio feedback. Course experts are industry leaders who contribute their specialized knowledge and experience to developing QC’s course content, helping you learn practical skills and techniques you can apply when planning events for clients.</p>
          </div>
          {tutors.map((t, i) => (
            <div key={i} className="col-12">
              <Blurb name={t.name} subHeading={t.subHeading} text={t.text} src={t.src} priority={i <= 1} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <ILEASection />
    <section>
      <div className="container">
        <div className="row justify-content-center g-s">
          <div className="col-12 col-xl-10 col-xxl-8 text-xl-center">
            <h1 className="mb-3">How Does Tutoring Work?</h1>
            <p className="lead mb-0">Once you enroll in your QC Event School course, you’ll be paired with a working event or wedding planner who grades your assignments, gives personalized feedback, and helps you develop professional planning skills. Here's how it works:</p>
            <ol className="mt-3">
  <li className="mb-3">
    <strong>Get matched with your tutor.</strong> Your first assignment introduces you to your tutor and shares your goals and the types of events you want to plan.
  </li>
  <li className="mb-3">
    <strong>Complete practical assignments.</strong> Each unit includes assignments based on realistic client scenarios, such as creating an event budget, selecting a venue, or building a wedding timeline. You submit your work online through the Online Student Center.
  </li>
  <li className="mb-3">
    <strong>Receive personalized feedback.</strong> Your tutor grades your assignments and provides detailed audio feedback within four business days. This helps you understand your strengths and identify areas to improve. The Event and Wedding Planning course includes seven one-on-one tutor reviews.
  </li>
  <li className="mb-3">
    <strong>Get support throughout your studies.</strong> Between tutor reviews, QC's Student Support Team is available by phone, email, or live chat to answer questions and help you stay on track.
  </li>
  <li className="mb-3">
    <strong>Earn recognition for your work.</strong> Earn an Award of Excellence for each unit you complete with a grade of A or higher. Your tutor may also award an Award of Merit to recognize exceptional work.
  </li>
</ol>   
          </div>
        </div>
      </div>
    </section>
    <TestimonialSection id="TE-0013" />
    <section className="bg-navy text-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-10 col-xxl-8 text-center">
            <h2 className="mb-3">Unlock Your Event Planning Potential with Expert Insights!</h2>
            <p className="lead mb-3">Dive into learning with individualized guidance from experts in event and wedding planning</p>
            <div className="d-flex justify-content-center">
              <Link className="btn btn-primary me-3" href="https://enroll.qceventplanning.com">Enroll Now</Link>
              <Link className="btn btn-outline-light" href="/online-event-courses">View Courses</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default TutorsPage;

const tutors = [
  {
    name: 'Alyssa Perna',
    subHeading: 'Principal and Managing Director of Experience Marketing and Events',
    text: 'Alyssa has over a decade of event operations experience ranging from leading multinational business-to-business conferences, festivals and tradeshows, press conferences, large-scale fundraisers, complex social events and more.',
    src: AlyssaPernaImage,
  },
  {
    name: 'Heather Hawes',
    subHeading: 'Event Operations Leader and Founder, Hawes Power LLC',
    text: 'Heather is an award-winning event operations leader with more than two decades of experience, spanning weddings to large-scale events with budgets exceeding $10 million. She has hosted former First Lady Michelle Obama at Spelman College’s Commencement and been recognized as a Meeting Pro to Watch. Through Hawes Power LLC, she provides event strategy, operational consulting, and fundraising services. Heather tutors Event & Wedding Planning and Travel and Tourism.',
    src: HeatherHawesImage,
  },
  {
    name: 'Anita DiPaolo',
    subHeading: 'Event and Wedding Planner; Founder of Grazie Gifts',
    text: 'Anita is a certified event and wedding planner who specializes in creating proposals within budget, and coordinating entire themed events starting from the simplest spark of inspiration.  She is also the founder of Grazie Gifts, a wedding favour and bomboniere company based in Ottawa, ON.  Anita tutors Event & Wedding Planning, Event Decor, Luxury Wedding & Event Planning, and Destination Wedding Planning.', 
    src: AnitaDiPaoloImage,
  },
  {
    name: 'Kimberly Jerkins',
    subHeading: 'Co-Owner and Lead Planner of Perfectly You Events',
    text: 'Kimberly is a QC Event School graduate and holds QC’s International Event and Wedding Planning (IEWPTM) certification. She brings more than two decades of experience managing events and trade shows for corporate, retail, and nonprofit clients. Alongside her daughter, Hallye, she runs Perfectly You Events, a mother-daughter business specializing in planning, coordinating, and decorating weddings and special events throughout North Texas. Kimberly tutors Event & Wedding Planning, Event Decor, Luxury Wedding & Event Planning, Destination Wedding Planning, Festivals & Live Events, and Promotional Event Planning.',
    src: KimberlyJerkinsImage,
  },
  {
    name: 'Darcie Garcia',
    subHeading: Founder of the Florapist Floral Artistry & Experiences',
    text: 'Darcie has more than three decades of experience in floral design, including managing large flower shops, and teaching floral design nationally. She is an accredited member and educator of the American Institute of Floral Designers (AIFD), an AIFD Certified Evaluating Judge (CEJ), and a Certified Floral Designer (CFD). Through The Florapist, Darcie designs wedding florals and leads floral design workshops throughout the Raleigh–Durham–Chapel Hill area. Darcie tutors QC’s Floral Design course.',
    src: DarcieGarciaImage,
  },
  {
    name: 'Renee Tucci',
    subHeading: 'Floral Educator & Author',
    text: 'Renee is an international floral educator, author, and designer based in Chalfont, Pennsylvania, and the author of Framing Floral Techniques (2021). She has exhibited at the Philadelphia Flower Show for more than 16 years, including producing the Princess Grace Rose Garden exhibit for the Embassy of Monaco in 2020. She teaches floral design at Bucks County Community College and serves on Teleflora’s national education team. Renee holds designations from the American Institute of Floral Designers, Professional Floral Communicators International, and the American Academy of Floriculture. She is a content expert and video instructor for QC's Floral Design course.',
    src: ReneeTucciImage,
  },
{
  name: 'Mark Cheplowitz',
  subHeading: 'President and Executive Produce, Wizard of Ahs',
  text: 'Mark Cheplowitz is an award-winning event planner and President of Wizard of Ahs, a New York City-based event production company. His work has taken him around the world, with career highlights including producing the Super Bowl and the grand opening of the Rock & Roll Hall of Fame. He is a published author and internationally recognized speaker. Mark is an on-camera course expert for QC’s Corporate Event Planning and Festivals & Live Events courses.',
  src: MarkCheplowitzImage,
}

    
    
      
    
      

];
