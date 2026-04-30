import type { FC, PropsWithChildren } from 'react';

import type { ComparisonTableColumn, ComparisonTableRow } from '.';
import { ComparisonTable } from '.';

const columns = [
  {
    key: 'qc',
    eyebrow: 'QC Event School',
    mobileLabel: 'QC Event School',
    heading: <h3>Professional Certification</h3>,
  },
  {
    key: 'university',
    mobileLabel: 'University or College',
    navLabel: 'vs. University',
    heading: <><h3>University or College</h3>Traditional degree route</>,
  },
  {
    key: 'certificate',
    mobileLabel: 'Career Diplomas',
    navLabel: 'vs. Diplomas',
    heading: <><h3>Career Diplomas</h3>General certificate route</>,
  },
] as const satisfies readonly ComparisonTableColumn[];

type ColumnKey = typeof columns[number]['key'];

const Heading: FC<PropsWithChildren> = ({ children }) => <div className="fw-bold mb-1">{children}</div>;

const rows: ComparisonTableRow<ColumnKey>[] = [
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
    qc: <><Heading>Direct entry</Heading>Launch your own business or become a lead planner for an existing company</>,
    university: <><Heading>Hospitality route</Heading>Gain experience in entry-level positions</>,
    certificate: <><Heading>Support roles</Heading>Foundational knowledge for assistant positions</>,
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
    qc: <><Heading>3 to 6 months</Heading>With up to a year to complete your course</>,
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
    qc: <><Heading>High value</Heading>Flexible tuition and payment plans available</>,
    university: 'Higher cost and longer timeline',
    certificate: 'Lower cost, with less mentorship and business support',
  },
];

export const EventPlanningEducationComparisonTable: FC = () => <ComparisonTable columns={columns} rows={rows} />;
