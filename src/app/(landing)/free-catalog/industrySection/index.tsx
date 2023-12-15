import type { FC } from 'react';
import { Animation } from './animation';
import ChartIcon from './chart.svg';

export const IndustrySection: FC = () => (
  <section>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6 text-center">
          <Animation>
            <ChartIcon className="mb-4" />
            <h2 className="h3 mb-4">Join an industry that's expected to grow by 8% over the next 10 years*</h2>
            <p className="lead mb-4">That's much faster than the average growth rate across all occupations!</p>
            <p className="small mb-0">* US Bureau of Labor Statistics</p>
          </Animation>
        </div>
      </div>
    </div>
  </section>
);
