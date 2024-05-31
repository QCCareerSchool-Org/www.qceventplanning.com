import type { Metadata } from 'next';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';

import CatalogImage from '../cover-book.jpg';
import { Processing } from './processing';
import type { PageComponent } from '@/app/serverComponent';
import DownloadIcon from '@/components/download.svg';
import { Logo } from '@/components/logo';
import { getParam } from '@/lib/getParam';

export const metadata: Metadata = {
  title: 'Your Course Catalog - QC Event School',
};

const ThankYouCourseCatalogPage: PageComponent = ({ searchParams }) => {
  const headerList = headers();
  const firstName = getParam(searchParams.firstName);
  const emailAddress = getParam(searchParams.emailAddress);
  const ipAddress = headerList.get('x-real-ip') ?? undefined;
  const leadId = getParam(searchParams.leadId);

  return (
    <>
      <Processing emailAddress={emailAddress} firstName={firstName} ipAddress={ipAddress} leadId={leadId} />
      <section className="p-0" />
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-6 mb-s mb-lg-0">
              <div className="mb-2">
                <Logo height={16} />
              </div>
              <h1 className="mb-4">Your Course Catalog</h1>
              <p className="lead mb-3">Thank You For Your Interest in QC Event School!</p>
              <p className="mb-5">You can download your course catalog below. We've also sent a link to your email so you can download the catalog at any time. If you have any questions about QC's courses, please don't hesitate to contact us.</p>
              <div className="d-flex">
                <Link href="/catalog.pdf" download className="btn btn-navy me-3"><DownloadIcon height={16} style={{ position: 'relative', top: -1 }} className="me-2" />Download Catalog</Link>
                <Link href="/online-event-courses" className="btn btn-outline-navy">View Courses</Link>
              </div>
            </div>
            <div className="col-10 col-md-8 col-lg-6 text-center">
              <Link href="/catalog.pdf" download><Image src={CatalogImage} placeholder="blur" priority alt="QC Event School course catalog" style={{ marginLeft: '-11.2%', marginRight: '-21.9%', marginTop: '-11.7%', marginBottom: '-11.7%' }} className="img-fluid" /></Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-navy text-white">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-7">
              <h2 className="mb-4">Get Personalized Guidance</h2>
              <p className="lead mb-4">Need help with payment plans or course details? Our Student Support Advisors are ready to assist you. Ask us anything!</p>
              <Link href="/contact-us" className="btn btn-lg btn-primary">Talk to an Advisor Now</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThankYouCourseCatalogPage;
