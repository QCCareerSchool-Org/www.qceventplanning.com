import type { Metadata } from 'next';

import type { PageComponent } from '@/app/serverComponent';

export const metadata: Metadata = {
  title: 'Student Success - QC Event School',
};

const StudentSuccessPage: PageComponent = () => {
  return (
    <>
      <section>
        <div className="container">
          <h1>Student Success</h1>
        </div>
      </section>
      <section className="bg-navy text-white">
        <div className="container">
          <h2>Lorem Ipsum</h2>
        </div>
      </section>
    </>
  );
};

export default StudentSuccessPage;
