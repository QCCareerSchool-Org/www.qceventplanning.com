import type { FC } from 'react';

import { Full } from './full';
import { PaymentSectionGuarantee } from './guarantee';
import { Part } from './part';
import type { CourseCode } from '@/domain/courseCode';
import type { PriceQuery } from '@/lib/fetch';
import { fetchPrice } from '@/lib/fetch';

type Props = {
  countryCode: string;
  provinceCode: string | null;
  courseCodes: CourseCode[];
  className?: string;
};

export const PaymentPlanSection: FC<Props> = async ({ countryCode, provinceCode, courseCodes, className }) => {
  const priceQuery: PriceQuery = { countryCode, provinceCode: provinceCode ?? undefined, courses: courseCodes };
  const price = await fetchPrice(priceQuery);
  if (!price) {
    return null;
  }

  const href = 'https://enroll.qceventplanning.com/?' + courseCodes.map(c => `c[]=${encodeURIComponent(c)}`).join('&');

  return (
    <section className={className ?? 'bg-light'} id="paymentPlans">
      <div className="container">
        <div className="row g-s justify-content-center">
          <div className="col-12 text-center">
            <h2 className="mb-4">Tuition &amp; Payment Plans</h2>
            <p className="lead">Select the payment plan that best suits your budget. Prices are listed in {price.currency.name}.</p>
          </div>
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
            <Part price={price} href={href} />
          </div>
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
            <Full price={price} href={href} />
          </div>
          <div className="col-12 col-lg-8 col-xl-7 col-xxl-6">
            <PaymentSectionGuarantee />
          </div>
        </div>
      </div>
    </section>
  );
};
