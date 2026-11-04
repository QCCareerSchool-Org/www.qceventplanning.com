import type { Metadata } from 'next';
import type { FC } from 'react';

import { FreeEventAndWeddingPlanningCatalog } from '..';
import { getServerData } from '@/lib/getServerData';

export const metadata: Metadata = {
  title: 'Free Event & Wedding Planning Course Catalog',
  alternates: {
    canonical: '/free-event-and-wedding-planning-course-catalog',
  },
};

const FreeEventAndWeddingPlanning2CatalogPage: FC<PageProps<'/free-event-and-wedding-planning-course-catalog/2'>> = async props => {
  const data = await getServerData(props.searchParams);
  return (
    <FreeEventAndWeddingPlanningCatalog searchParams={await props.searchParams} data={data} telephone={true} />
  );
};

export default FreeEventAndWeddingPlanning2CatalogPage;
