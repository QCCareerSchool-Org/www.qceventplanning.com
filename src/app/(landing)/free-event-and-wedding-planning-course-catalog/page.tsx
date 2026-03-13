import type { Metadata } from 'next';

import { FreeEventAndWeddingPlanningCatalog } from '.';
import type { PageComponent } from '@/serverComponent';

export const metadata: Metadata = {
  title: 'Free Event & Wedding Planning Course Catalog',
  alternates: {
    canonical: '/free-event-and-wedding-planning-course-catalog',
  },
};

const FreeEventAndWeddingPlanningCatalogPage: PageComponent = props => (
  <FreeEventAndWeddingPlanningCatalog {...props} telephone={false} />
);

export default FreeEventAndWeddingPlanningCatalogPage;
