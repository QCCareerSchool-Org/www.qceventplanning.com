import Link from 'next/link';

import styles from './not-found.module.css';
import type { PageComponent } from './serverComponent';

const NotFoundPage: PageComponent = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Not Found</h1>
      <p>Sorry, we could not find the requested resource</p>
      <p><Link href="/">Home Page</Link></p>
    </div>
  );
};

export default NotFoundPage;
