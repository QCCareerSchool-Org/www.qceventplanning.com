import type { Metadata } from 'next';
import type { FC } from 'react';

import { FreeEventAndWeddingPlanningCatalog } from '.';
import { getServerData } from '@/lib/getServerData';

export const metadata: Metadata = {
  title: 'Free Event & Wedding Planning Course Catalog',
  alternates: {
    canonical: '/free-event-and-wedding-planning-course-catalog',
  },
};

const FreeEventAndWeddingPlanningCatalogPage: FC<PageProps<'/free-event-and-wedding-planning-course-catalog'>> = async props => {
  const data = await getServerData(props.searchParams);
  return (
    <FreeEventAndWeddingPlanningCatalog searchParams={await props.searchParams} data={data} telephone={false} />
  );
};

export default FreeEventAndWeddingPlanningCatalogPage;
