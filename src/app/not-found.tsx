import type { Metadata } from 'next';
import Link from 'next/link';

import MainLayout from './(main)/layout';
import styles from './not-found.module.scss';
import type { PageComponent } from './serverComponent';

export const metadata: Metadata = {
  title: 'Page Not Found - QC Event School',
};

const NotFoundPage: PageComponent = () => {
  return (
    <MainLayout>
      <div className={styles.wrapper}>
        <h1>Page Not Found</h1>
        <p>Sorry, we could not find the requested resource</p>
        <p><Link href="/">Home Page</Link></p>
      </div>
    </MainLayout>
  );
};

export default NotFoundPage;
