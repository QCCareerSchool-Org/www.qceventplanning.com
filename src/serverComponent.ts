import type { Metadata, ResolvingMetadata } from 'next';

import type { AppRoutes } from '../.next/types/routes';

export type GenerateMetadata<R extends AppRoutes> = (props: PageProps<R>, parent: ResolvingMetadata) => Promise<Metadata>;
