import type { Metadata } from 'next';

import type { PageComponent } from '@/app/serverComponent';
import { BrochureForm } from '@/components/brochureForm';
import { getData } from '@/lib/getData';

export const metadata: Metadata = {
  title: 'Free Catalog - QC Event School',
};

const FreeCatalogPage: PageComponent = () => {
  const { testGroup, countryCode, provinceCode } = getData();
  return (
    <>
      <section>
        <div className="container">
          <div className="row justify-content-center g-s">
            <div className="col-12 col-lg-6 col-xl-5">
              <h1 className="h2 mb-3">Get a Free Event &amp; Wedding Planning Course Catalog</h1>
              <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus lacus et neque consectetur posuere et in ex. Suspendisse ullamcorper blandit metus in sagittis. Nulla tempus erat sapien, eu hendrerit enim dictum a.</p>
            </div>
            <div className="col-12 col-sm-11 col-md-8 col-lg-6 col-xl-5 order-lg-first">
              <div className="card bg-light">
                <div className="card-body">
                  <h2 className="h5 mb-3">Download the Free Catalog</h2>
                  <BrochureForm
                    action="https://go.qceventplanning.com/l/947642/2022-02-15/8n8h7"
                    testGroup={testGroup}
                    countryCode={countryCode}
                    provinceCode={provinceCode}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FreeCatalogPage;
