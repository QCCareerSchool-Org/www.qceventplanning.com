import type { FC, PropsWithChildren } from 'react';
import type { Product, WithContext } from 'schema-dts';

import type { ComparisonTableColumn, ComparisonTableRow } from '.';
import { ComparisonTable } from '.';

const Heading: FC<PropsWithChildren> = ({ children }) => <div className="fw-bold mb-1" style={{ color: 'oklch(0.21 0.034 264.665)' }}>{children}</div>;

const columns = [
  {
    key: 'qc',
    eyebrow: 'QC Event School',
    mobileLabel: 'QC Event School IEWP™ Certification',
    heading: <h3>IEWP&trade; Certification</h3>,
  },
  {
    key: 'university',
    mobileLabel: 'University or College Degree',
    navLabel: 'vs. University',
    heading: <><h3>University/College Degree</h3>(E.g., JWU, UCF)</>,
  },
  {
    key: 'certificate',
    mobileLabel: 'Career Diplomas & Certificates',
    navLabel: 'vs. Diplomas',
    heading: <><h3>Career Diplomas &amp; Certificates</h3>(E.g., Penn Foster, IAP, Stratford Career Institute)</>,
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
    qc: <><Heading>Direct Entry:</Heading> Launch your own business or become a lead planner for an existing company</>,
    university: <><Heading>Hospitality route:</Heading> Gain experience in entry-level positions</>,
    certificate: <><Heading>Support Roles:</Heading> Foundational knowledge for assistant positions; additional training preferred for business ownership</>,
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
    university: 'Bachelor\'s Degree',
    certificate: 'Career Diploma / Certificate',
  },
  {
    feature: 'Duration',
    qc: '3 to 6 Months (*with up to a year to complete your course)',
    university: '2 to 4 Years',
    certificate: 'Varies by program (2 weeks to 6 months)',
  },
  {
    feature: 'Planning Software',
    qc: 'AisplePlanner Included: 6 months free access',
    university: 'Not included',
    certificate: 'Not included; student discounts may be available',
  },
  {
    feature: 'Total Investment',
    qc: <><Heading>High Value:</Heading> $789 to $2,998 (Flexible Payment Plans Available)</>,
    university: <><Heading>High Cost:</Heading> $20,000 to $80,000+</>,
    certificate: <><Heading>Low Cost:</Heading> $149 to $1,500 (Varies by School, Limited Payment Plans)</>,
  },
];

const qc: WithContext<Product> = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  'name': 'QC Event School Event Planning Course',
  'offers': [
    {
      '@type': 'Offer',
      'priceSpecification': {
        '@type': 'PriceSpecification',
        'minPrice': 789,
        'maxPrice': 2998,
        'price': 2998,
        'priceCurrency': 'USD',
      },
    },
  ],
  'brand': {
    '@type': 'Brand',
    '@id': 'https://www.qceventplanning.com/#school',
    'url': 'https://www.qceventplanning.com',
    'name': 'QC Event School',
    'logo': 'https://www.qceventplanning.com/logo.svg',
  },
};
const degree: WithContext<Product> = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  'name': 'University or College Programs',
  'offers': [
    {
      '@type': 'Offer',
      'priceSpecification': {
        '@type': 'PriceSpecification',
        'minPrice': 20000,
        'maxPrice': 80000,
        'price': 80000,
        'priceCurrency': 'USD',
      },
    },
  ],
};
const online: WithContext<Product> = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  'name': 'Career Diplomas',
  'offers': [
    {
      '@type': 'Offer',
      'priceSpecification': {
        '@type': 'PriceSpecification',
        'minPrice': 149,
        'maxPrice': 1500,
        'price': 1500,
        'priceCurrency': 'USD',
      },
    },
  ],
};

export const EventPlanningEducationComparisonTable: FC = () => (
  <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(qc) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(degree) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(online) }} />
    <ComparisonTable columns={columns} rows={rows} caption="Comparison of Event Planning Education Paths: QC Event School vs. Universities vs. Career Diplomas" />
  </>
);
