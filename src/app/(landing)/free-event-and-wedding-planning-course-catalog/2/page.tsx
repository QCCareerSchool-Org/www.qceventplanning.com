import type { Metadata } from 'next';

import { FreeEventAndWeddingPlanningCatalog } from '..';
import type { PageComponent } from '@/app/serverComponent';

export const metadata: Metadata = {
  title: 'Free Event & Wedding Planning Course Catalog',
  alternates: {
    canonical: '/free-event-and-wedding-planning-course-catalog',
  },
};

const FreeEventAndWeddingPlanning2CatalogPage: PageComponent = props => (
  <FreeEventAndWeddingPlanningCatalog {...props} telephone={true} />
);

export default FreeEventAndWeddingPlanning2CatalogPage;
