import type { Metadata } from 'next';

import type { PageComponent } from '@/app/serverComponent';

export const metadata: Metadata = {
  title: 'QC Event School',
};

const HomePage: PageComponent = () => {
  return (
    <>
      <section>
        <div className="container">
          <h1>QC Event School</h1>
        </div>
      </section>
    </>
  );
};

export default HomePage;
