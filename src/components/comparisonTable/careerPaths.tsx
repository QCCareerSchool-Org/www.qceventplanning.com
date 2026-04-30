import type { FC, PropsWithChildren } from 'react';
import { BiCheckCircle } from 'react-icons/bi';

import type { ComparisonTableColumn, ComparisonTableRow } from '.';
import { ComparisonTable } from '.';
import type { Price } from '@/domain/price';
import { formatPrice } from '@/lib/formatPrice';

interface Props {
  price: Price;
}

const columns = [
  {
    key: 'qc',
    eyebrow: 'QC Design School',
    mobileLabel: 'QC Design School IDDP Program',
    heading: <h3>IDDP&trade; Program</h3>,
  },
  {
    key: 'degree',
    mobileLabel: 'University or College Degree',
    navLabel: 'vs. University',
    heading: <><h3>University or College Degree</h3>E.g., RMCAD, Yorkville University</>,
  },
  {
    key: 'online',
    mobileLabel: 'Standard Online Certifications',
    navLabel: 'vs. Standard Certs',
    heading: <><h3>Standard Online Certifications</h3>E.g., NYIAD, Interior Design Institute</>,
  },
] as const satisfies readonly ComparisonTableColumn[];

type ColumnKey = typeof columns[number]['key'];

export const CareerPathComparisonTable: FC<Props> = ({ price }) => {

  const rows: ComparisonTableRow<ColumnKey>[] = [
    {
      feature: 'Career Outcomes',
      qc: 'Launch your own design business, establish professional credibility, or secure a lead role in a firm',
      degree: 'Entry-level junior designer or intern at an existing firm',
      online: 'Design associate or resident designer; additional training preferred for business ownership',
    },
    {
      feature: 'Time to Revenue',
      qc: <><Heading>3 to 6 Months:</Heading>* with up to a year to complete your course.</>,
      degree: <><Heading>4+ Years:</Heading>Degree completion in a physical location</>,
      online: <><Heading>3 to 6 Months:</Heading>Varies by program</>,
    },
    {
      feature: 'Course Format',
      qc: <>Total flexibility with interactive lessons, hands-on assignments, mentor feedback, and expert-led videos <strong>for every student</strong></>,
      degree: 'Set class schedules, rigid deadlines, and multi-year commitments',
      online: 'Self-guided format with online lessons and tutorials. Expert-led videos may be available at an extra cost',
    },
    {
      feature: 'Business Infrastructure',
      qc: <><Heading>Full Launch Kit:</Heading> Ready-to-use contracts, templates, and client onboarding suites + portfolio development and full business training</>,
      degree: <><Heading>Not Included:</Heading> Focuses on design history and theory rather than day-to-day business operations.</>,
      online: <><Heading>Limited Support:</Heading> Portfolio development with additional resources sometimes available for purchase</>,
    },
    {
      feature: 'Bonus Training',
      qc: <><Heading>Accelerate Your Business and Virtual Design Workshops Included</Heading> Access advanced training to maximize your earning potential</>,
      degree: <Heading>Not included</Heading>,
      online: <Heading>Not included</Heading>,
    },
    {
      feature: 'Mentorship & Support',
      qc: <><Heading>1-on-1 Professional Reviews Included:</Heading>7 feedback sessions from a practicing designer focused on career growth</>,
      degree: <><Heading>Limited Access:</Heading>Group settings with limited individual project feedback or career coaching</>,
      online: <><Heading>Varied</Heading>Automated grading and limited mentorship are included in some courses</>,
    },
    {
      feature: 'Design Software',
      qc: <><Heading>DesignFiles Pro Included:</Heading>4 months of access plus technical training on 3D floor planning</>,
      degree: <Heading>Not Included</Heading>,
      online: <Heading>Student Discounts May Be Available</Heading>,
    },
    {
      feature: 'Total Investment',
      qc: <div style={{ fontSize: '1.5rem' }} className="text-primary"><div className="d-flex gap-2"><BiCheckCircle style={{ position: 'relative', top: 4 }} /><div><div className="text-blue" style={{ lineHeight: 1, fontWeight: 700, fontSize: '2.25rem', margin: '0 0 0.25rem' }}>{price.currency.symbol}{formatPrice(price.plans.full.total, 2)}</div>(All-Inclusive)</div></div></div>,
      degree: <div style={{ fontSize: '1.5rem' }}>$10,000 to $50,000</div>,
      online: <div style={{ fontSize: '1.5rem' }}>$1,200 to $1,800</div>,
    },
  ];

  return <ComparisonTable columns={columns} rows={rows} />;
};

const Heading: FC<PropsWithChildren> = ({ children }) => <div className="fw-bold mb-1" style={{ color: 'oklch(0.21 0.034 264.665)' }}>{children}</div>;
