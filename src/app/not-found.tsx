import type { Metadata } from 'next';
import Link from 'next/link';

import styles from './not-found.module.scss';
import type { PageComponent } from './serverComponent';
import { Layout } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Page Not Found',
};

const NotFoundPage: PageComponent = () => {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <h1>Page Not Found</h1>
        <p>Sorry, we could not find the requested page</p>
        <div className="d-flex justify-content-center">
          <Link href="/" className="btn btn-primary me-3">Home Page</Link>
          <Link href="/online-event-courses" className="btn btn-outline-dark">Course List</Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
