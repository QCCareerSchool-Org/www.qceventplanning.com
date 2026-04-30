import Link from 'next/link';
import type { FC, ReactNode } from 'react';
import { FaArrowRight } from 'react-icons/fa';

import { SectionHeader } from './sectionHeader';
import styles from '../page.module.scss';

interface ComparisonRow {
  feature: string;
  qc: ReactNode;
  university: ReactNode;
  certificate: ReactNode;
  emphasize?: boolean;
}

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

export const ComparisonSection: FC = () => (
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
);
