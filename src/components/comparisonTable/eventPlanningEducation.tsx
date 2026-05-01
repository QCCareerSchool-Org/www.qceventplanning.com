import type { FC } from 'react';

import type { ComparisonTableColumn, ComparisonTableRow } from '.';
import { ComparisonTable } from '.';

const columns = [
  {
    key: 'qc',
    mobileLabel: 'QC Event School IEWP™ Certification',
    heading: <h3>QC Event School IEWP™ Certification</h3>,
  },
  {
    key: 'university',
    mobileLabel: 'University/College Degree (E.g. JWU, UCF)',
    navLabel: 'vs. University',
    heading: <h3>University/College Degree (E.g. JWU, UCF)</h3>,
  },
  {
    key: 'certificate',
    mobileLabel: 'Career Diplomas & Certificates (E.g. Penn Foster, IAP, Stratford Career Institute)',
    navLabel: 'vs. Diplomas',
    heading: <h3>Career Diplomas &amp; Certificates (E.g. Penn Foster, IAP, Stratford Career Institute)</h3>,
  },
] as const satisfies readonly ComparisonTableColumn[];

type ColumnKey = typeof columns[number]['key'];

const rows: ComparisonTableRow<ColumnKey>[] = [
  {
    feature: 'School Specialization',
    qc: 'Expertise in event education & business training',
    university: 'Broad focus in hospitality',
    certificate: 'Generalized training across multiple industries',
  },
  {
    feature: 'Program Focus',
    qc: 'Professional planning skills, entrepreneurship and career building',
    university: 'Academic theory',
    certificate: 'General skills overview with some business training',
  },
  {
    feature: 'Career Outcome',
    qc: 'Direct Entry: Launch your own business or become a lead planner for an existing company',
    university: 'Hospitality route: Gain experience in entry-level positions',
    certificate: 'Support Roles: Foundational knowledge for assistant positions; additional training preferred for business ownership',
  },
  {
    feature: 'Course Format',
    qc: 'Total flexibility with 100% online lessons, expert-led videos, self-paced practical assignments and mentor feedback',
    university: 'Primarily in-person with some online options; set class schedules & rigid schedules',
    certificate: 'Self-guided format with online lessons',
  },
  {
    feature: 'Mentorship',
    qc: '7 personalized 1-on-1 reviews from an industry expert',
    university: 'Limited Interaction',
    certificate: 'Self-Guided (Email / Video Support)',
  },
  {
    feature: 'Business Training',
    qc: 'Complete Business Training (Contract templates, business tools & planning software included)',
    university: 'General Business Theory',
    certificate: 'Basic Overview',
  },
  {
    feature: 'Credential',
    qc: 'Globally recognized professional certification',
    university: 'Bachelor’s Degree',
    certificate: 'Career Diploma / Certificate',
  },
  {
    feature: 'Duration',
    qc: '3–6 Months (*With up to a year to complete your course)',
    university: '2–4 Years',
    certificate: 'Varies by program (2 weeks - 6 months)',
  },
  {
    feature: 'Planning Software',
    qc: 'AisplePlanner Included: 6 months free access',
    university: 'Not included',
    certificate: 'Not included; student discounts may be available',
  },
  {
    feature: 'Total Investment',
    qc: 'High Value: $789–$2,998 (Flexible Payment Plans Available)',
    university: 'High Cost: $20,000–$80,000+',
    certificate: 'Low Cost: $149–$1,500 (Varies by School, Limited Payment Plans)',
  },
];

export const EventPlanningEducationComparisonTable: FC = () => <ComparisonTable columns={columns} rows={rows} />;
