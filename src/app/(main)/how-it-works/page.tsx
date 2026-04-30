import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import type { IconType } from 'react-icons';
import {
  FaArrowRight,
  FaAward,
  FaBriefcase,
  FaChartLine,
  FaCheckCircle,
  FaGlobe,
  FaGraduationCap,
  FaHandshake,
  FaRegStar,
  FaRocket,
  FaTicketAlt,
  FaWallet,
  FaWineGlassAlt,
} from 'react-icons/fa';

import DesignImage from './images/design.png';
import DetailImage from './images/detail.png';
import HeroImage from './images/hero.png';
import styles from './page.module.scss';
import { AccordionFAQ } from '@/components/accordionFAQ';
import { GetStartedSection } from '@/components/getStartedSection';
import { GoogleReviewSection } from '@/components/googleReviewSection';
import type { PageComponent } from '@/serverComponent';

export const metadata: Metadata = {
  title: 'How to Become an Event Planner',
  description: 'Learn how QC Event School helps aspiring event planners build practical skills, earn professional certification, and start a flexible career in event planning.',
  alternates: {
    canonical: '/how-it-works',
  },
};

interface IconItem {
  icon: IconType;
  title: string;
  text: ReactNode;
}

interface ComparisonRow {
  feature: string;
  qc: ReactNode;
  university: ReactNode;
  certificate: ReactNode;
  emphasize?: boolean;
}

const careerStats: IconItem[] = [
  {
    icon: FaGraduationCap,
    title: 'Entry Requirements',
    text: 'Professional certification, practical training, and a polished portfolio help establish client trust.',
  },
  {
    icon: FaChartLine,
    title: 'Earning Potential',
    text: 'Specialized planners can grow their income as their expertise, niche, and client list expand.',
  },
  {
    icon: FaRegStar,
    title: 'Top Skills',
    text: 'Budgeting, vendor negotiation, logistics, design thinking, and calm creative problem solving.',
  },
  {
    icon: FaWallet,
    title: 'Fastest Path',
    text: 'Online certification lets you learn career-ready skills without pausing the rest of your life.',
  },
];

const responsibilities = [
  {
    title: 'Creative Concepting',
    text: 'Design the visual story, guest experience, and overall atmosphere for each event.',
  },
  {
    title: 'Expert Curation',
    text: 'Source venues, vendors, rentals, and partners that match the client brief and budget.',
  },
  {
    title: 'Strategic Budgeting',
    text: 'Track costs, compare options, and help clients make confident planning decisions.',
  },
  {
    title: 'Detailed Timelines',
    text: 'Build production schedules that keep vendors, clients, and event-day teams aligned.',
  },
  {
    title: 'On-Site Leadership',
    text: 'Guide the event day with steady communication and quick solutions when plans shift.',
  },
];

const journeySteps = [
  {
    title: 'Obtain Professional Certification',
    text: 'Master event design, contracts, client management, and the professional standards clients expect from a planner.',
  },
  {
    title: 'Gain Real-World Skills',
    text: 'Complete practical assignments, receive tutor feedback, and learn how to make planning decisions with confidence.',
  },
  {
    title: 'Build a Digital Portfolio',
    text: 'Create a showcase of concepts, mood boards, timelines, and planning work that helps clients understand your style.',
  },
  {
    title: 'Establish Your Network',
    text: 'Connect with venues, vendors, peers, and professional associations so you can become a trusted local resource.',
  },
];

const comparisonRows: ComparisonRow[] = [
  {
    feature: 'School Specialization',
    qc: 'Focused event education and business training',
    university: 'Broad hospitality or event management study',
    certificate: 'General training across multiple industries',
  },
  {
    feature: 'Program Focus',
    qc: 'Professional planning skills, entrepreneurship, and career building',
    university: 'Academic theory and broader business concepts',
    certificate: 'General skills overview with some business basics',
  },
  {
    feature: 'Career Outcome',
    qc: <><strong>Direct entry:</strong> Launch your own business or become a lead planner for an existing company</>,
    university: <><strong>Hospitality route:</strong> Gain experience in entry-level positions</>,
    certificate: <><strong>Support roles:</strong> Foundational knowledge for assistant positions</>,
  },
  {
    feature: 'Course Format',
    qc: 'Flexible online lessons, expert-led videos, self-paced assignments, and mentor feedback',
    university: 'Set class schedules with in-person requirements',
    certificate: 'Often self-guided online lessons',
  },
  {
    feature: 'Mentorship',
    qc: 'Personalized one-on-one reviews from an industry expert',
    university: 'Limited individual interaction',
    certificate: 'Email or video support varies by provider',
  },
  {
    feature: 'Business Training',
    qc: 'Contract templates, business tools, pricing guidance, and planning software included',
    university: 'General business theory',
    certificate: 'Basic overview',
  },
  {
    feature: 'Credential',
    qc: 'Globally recognized professional certification',
    university: 'Degree or diploma',
    certificate: 'Career diploma or certificate',
  },
  {
    feature: 'Duration',
    qc: <><strong>3 to 6 months</strong><span>With up to a year to complete your course</span></>,
    university: '2 to 4 years',
    certificate: 'Varies by program',
  },
  {
    feature: 'Planning Software',
    qc: 'Aisle Planner access included with select courses',
    university: 'Not typically included',
    certificate: 'Not typically included',
  },
  {
    feature: 'Total Investment',
    qc: <><strong>High value:</strong> Flexible tuition and payment plans available</>,
    university: 'Higher cost and longer timeline',
    certificate: 'Lower cost, with less mentorship and business support',
    emphasize: true,
  },
];

const trustStats = [
  {
    value: '30K',
    label: 'Students and Graduates',
    text: 'Inspiring the next generation of event professionals',
  },
  {
    value: '40',
    label: 'Years in Business',
    text: 'Pioneering distance education since 1984',
  },
  {
    value: '15',
    label: 'Industry Experts',
    text: 'Sharing real-world insight and practical feedback',
  },
];

const whyQCPillars: IconItem[] = [
  {
    icon: FaHandshake,
    title: 'Personalized Mentorship',
    text: 'Every assignment is reviewed by a professional planner who provides targeted feedback.',
  },
  {
    icon: FaRocket,
    title: 'A Professional Launchpad',
    text: 'Graduate with templates, business guidance, and planning tools you can use with clients.',
  },
  {
    icon: FaAward,
    title: 'Specialization Mastery',
    text: 'Add skills in weddings, corporate events, luxury celebrations, floral design, decor, and more.',
  },
  {
    icon: FaGlobe,
    title: 'A Global Network',
    text: 'Connect with fellow planners and stay part of the QC community after graduation.',
  },
];

const specializations: IconItem[] = [
  {
    icon: FaBriefcase,
    title: 'Corporate and Business',
    text: 'Plan brand launches, conferences, company celebrations, and high-impact professional events.',
  },
  {
    icon: FaWineGlassAlt,
    title: 'Weddings and Social',
    text: 'Blend creative design, timeline management, and thoughtful client service for personal celebrations.',
  },
  {
    icon: FaTicketAlt,
    title: 'Public and Large-Scale',
    text: 'Coordinate festivals, public gatherings, and live events with complex logistics and vendor teams.',
  },
];

const plannerTraits = [
  {
    title: 'The Organized Dreamer',
    text: 'You love big ideas, and you also enjoy building the list that makes them real.',
  },
  {
    title: 'The Natural Connector',
    text: 'You enjoy working with people and building relationships with clients, venues, and vendors.',
  },
  {
    title: 'The Creative Problem-Solver',
    text: 'When plans change, you can think quickly and keep the experience moving forward.',
  },
  {
    title: 'The Detail Enthusiast',
    text: 'You notice lighting, timing, flow, and the small touches that create memorable events.',
  },
  {
    title: 'The Goal-Oriented Learner',
    text: 'You are ready to turn natural instincts into professional standards and a portfolio you can show proudly.',
  },
];

const faqItems = [
  {
    question: 'Do I need a university degree to become an event planner?',
    answer: 'No. Event planning clients and employers often value practical skills, confidence, certification, and a strong portfolio. QC focuses on career-ready training so you can understand both the creative and business sides of planning.',
  },
  {
    question: 'What is the best event planning school?',
    answer: 'The best program depends on your goals. If you want to start a business or move into professional planning quickly, look for flexible training, expert mentorship, practical assignments, and business support. QC Event School is built around those priorities.',
  },
  {
    question: 'How much do event planners make?',
    answer: 'Event planner income varies by location, niche, experience, and whether you work for an employer or run your own business. Specialized planners can increase their earning potential by developing advanced services and a strong professional network.',
  },
  {
    question: 'How long does it take to get certified?',
    answer: 'QC courses are self-paced. Many students complete their training in 3 to 6 months, and you have up to a full year to complete your course if you prefer a slower schedule.',
  },
];

const SectionHeader = ({ eyebrow, title, text }: { eyebrow?: string; title: string; text?: string }) => (
  <div className="row justify-content-center mb-5">
    <div className="col-12 col-lg-9 col-xl-8 text-center">
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="mb-3">{title}</h2>
      {text && <p className="lead mb-0">{text}</p>}
    </div>
  </div>
);

const IconBadge = ({ icon: Icon }: { icon: IconType }) => (
  <div className={styles.iconBadge}>
    <Icon aria-hidden="true" />
  </div>
);

const HowItWorksPage: PageComponent = () => (
  <div className={styles.page}>
    <section className={styles.hero}>
      <Image src={HeroImage} alt="" fill priority placeholder="blur" sizes="100vw" className={styles.heroImage} />
      <div className={styles.heroOverlay} />
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8 col-xl-7">
            <p className="eyebrow mb-3">Career Guide</p>
            <h1 className="mb-4">How to Become an Event Planner</h1>
            <p className="lead mb-5">Launch your career with flexible online training, professional certification, and the practical standards you need to plan memorable events with confidence.</p>
            <div className="d-flex flex-column flex-sm-row gap-3">
              <Link href="/online-event-courses" className="btn btn-lg btn-primary">Explore Courses</Link>
              <Link href="#career-pathways" className="btn btn-lg btn-outline-light">See the Path</Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className={styles.statsSection}>
      <div className="container">
        <SectionHeader title="Your Career at a Glance" />
        <div className="row g-4">
          {careerStats.map(item => (
            <div className="col-12 col-md-6 col-xl-3 d-flex" key={item.title}>
              <div className={styles.statCard}>
                <IconBadge icon={item.icon} />
                <h2 className="h5 mb-3">{item.title}</h2>
                <p className="mb-0">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-light">
      <div className="container">
        <div className="row align-items-center g-s">
          <div className="col-12 col-lg-6">
            <h2 className="mb-4">What Does a Professional Event Planner Do?</h2>
            <p className="lead mb-5">As a planner, you are the creative strategist behind each celebration. You coordinate logistics, vendors, budgets, timelines, and the details that bring an event to life.</p>
            <div className={styles.featureList}>
              <h3 className="h6 text-uppercase mb-0">Core responsibilities and professional impact</h3>
              {responsibilities.map(item => (
                <div className={styles.featureItem} key={item.title}>
                  <FaCheckCircle aria-hidden="true" className={styles.checkIcon} />
                  <div>
                    <h4 className="h6 mb-1">{item.title}</h4>
                    <p className="mb-0">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className={styles.imageFrame}>
              <Image src={DetailImage} alt="" fill placeholder="blur" sizes="(min-width: 992px) 50vw, 100vw" className={styles.coverImage} />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="career-pathways" className={styles.journeySection}>
      <div className="container">
        <SectionHeader
          eyebrow="Your Journey to Success"
          title="4 Steps to Becoming an Event Planner"
          text="You do not need years of university to start your career. Follow a practical path that turns your passion into a professional brand."
        />
        <div className={styles.stepsGrid}>
          {journeySteps.map((step, index) => (
            <div className={styles.stepCard} key={step.title}>
              <div className={styles.stepNumber}>{index + 1}</div>
              <p className="eyebrow mb-2">Step {index + 1}</p>
              <h3 className="h5 mb-3">{step.title}</h3>
              <p className="mb-0">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className={styles.comparisonSection}>
      <div className="container">
        <SectionHeader
          eyebrow="Choosing Your Path"
          title="The Right Education for Your Goals"
          text="Whether you want to work in corporate event management or start your own business, the right training should fit your life, timeline, and ambitions."
        />
        <div className={styles.comparisonDesktop}>
          <table className={styles.comparisonTable}>
            <thead>
              <tr>
                <th>Feature</th>
                <th>
                  <span>QC Event School</span>
                  <small>Professional certification</small>
                </th>
                <th>
                  <span>University or College</span>
                  <small>Traditional degree route</small>
                </th>
                <th>
                  <span>Career Diplomas</span>
                  <small>General certificate route</small>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map(row => (
                <tr key={row.feature}>
                  <th scope="row">{row.feature}</th>
                  <td className={row.emphasize ? styles.emphasizedCell : undefined}>{row.qc}</td>
                  <td>{row.university}</td>
                  <td>{row.certificate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.comparisonMobile}>
          {comparisonRows.map(row => (
            <div className={styles.compareCard} key={row.feature}>
              <h3 className="h6 mb-3">{row.feature}</h3>
              <div className={styles.compareValue}>
                <strong>QC Event School</strong>
                <p className="mb-0">{row.qc}</p>
              </div>
              <div className={styles.compareValue}>
                <strong>University or College</strong>
                <p className="mb-0">{row.university}</p>
              </div>
              <div className={styles.compareValue}>
                <strong>Career Diplomas</strong>
                <p className="mb-0">{row.certificate}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.advisorCta}>
          <div>
            <h3 className="h4 mb-2">Have Questions? Speak with a Career Advisor.</h3>
            <p className="mb-0">Our team can help you choose the training path that fits your goals and schedule.</p>
          </div>
          <div className={styles.advisorButtons}>
            <Link href="/contact-us" className="btn btn-outline-grey">Contact Us</Link>
            <Link href="/online-event-courses" className="btn btn-primary">Explore Courses <FaArrowRight aria-hidden="true" /></Link>
          </div>
        </div>
      </div>
    </section>

    <section className={styles.trustSection}>
      <div className="container">
        <div className="row g-4">
          {trustStats.map(stat => (
            <div className="col-12 col-md-4 text-center" key={stat.label}>
              <div className={styles.trustNumber}>{stat.value}<span>+</span></div>
              <h2 className="h5 mb-2">{stat.label}</h2>
              <p className="mb-0">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="row align-items-center g-s">
          <div className="col-12 col-lg-5">
            <p className="eyebrow mb-3">The QC Advantage</p>
            <h2 className="mb-4">Why Aspiring Professionals Choose QC</h2>
            <p className="lead mb-0">QC does more than explain event planning theory. Our online courses are designed to help you build professional judgment, business confidence, and the practical skills to serve real clients.</p>
          </div>
          <div className="col-12 col-lg-7">
            <div className="row g-4">
              {whyQCPillars.map(item => (
                <div className="col-12 col-md-6 d-flex" key={item.title}>
                  <div className={styles.pillarCard}>
                    <IconBadge icon={item.icon} />
                    <h3 className="h5 mb-3">{item.title}</h3>
                    <p className="mb-0">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-light">
      <div className="container">
        <SectionHeader
          eyebrow="Expand Your Skills"
          title="Event Planning Specializations"
          text="The most successful planners build signature services by developing advanced skills in the areas their clients value most."
        />
        <div className="row g-4">
          {specializations.map(item => (
            <div className="col-12 col-md-6 col-lg-4 d-flex" key={item.title}>
              <div className={styles.specializationCard}>
                <IconBadge icon={item.icon} />
                <h3 className="h5 mb-3">{item.title}</h3>
                <p className="mb-0">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="row align-items-center g-s">
          <div className="col-12 col-lg-6">
            <h2 className="mb-4">Is Event Planning Right for You?</h2>
            <p className="lead mb-5">You do not need a specific background to succeed in this industry. If you recognize yourself in these traits, you already have the foundation of a great event planner.</p>
            <div className={styles.imageFrame}>
              <Image src={DesignImage} alt="" fill placeholder="blur" sizes="(min-width: 992px) 50vw, 100vw" className={styles.coverImage} />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className={styles.traitsList}>
              {plannerTraits.map(trait => (
                <div className={styles.traitItem} key={trait.title}>
                  <FaCheckCircle aria-hidden="true" className={styles.checkIcon} />
                  <div>
                    <h3 className="h6 mb-1">{trait.title}</h3>
                    <p className="mb-0">{trait.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.traitCallout}>
              <h3 className="h5 mb-2">Does this sound like you?</h3>
              <p className="mb-0">If you have the passion, QC has the professional roadmap to help you turn it into a career.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <GoogleReviewSection className="bg-light" />

    <section>
      <div itemScope itemType="https://schema.org/FAQPage">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <h2 className="mb-5 text-center">Frequently Asked Questions</h2>
              {faqItems.map(item => (
                <AccordionFAQ heading={item.question} className="mb-3" key={item.question}>
                  <p>{item.answer}</p>
                </AccordionFAQ>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <GetStartedSection
      title="Ready to Launch Your Event Planning Career?"
      text="Gain professional certification through QC's mentored online courses and start building the skills, portfolio, and confidence to plan real events."
      buttonText="Explore Certification Programs"
      buttonHref="/online-event-courses"
    />
  </div>
);

export default HowItWorksPage;
