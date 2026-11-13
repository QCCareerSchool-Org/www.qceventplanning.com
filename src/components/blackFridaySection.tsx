import Link from 'next/link';
import type { FC } from 'react';

export const BlackFridaySection: FC = () => (
  <section className="bg-danger py-4">
    <div className="container">
      <h2 className="h4 text-center mb-0 text-uppercase" style={{ letterSpacing: '0.125rem' }}>The Black Friday Offer is Live:&nbsp; <Link className="text-white" href="https://enroll.qceventplanning.com">View Details</Link></h2>
    </div>
  </section>
);
