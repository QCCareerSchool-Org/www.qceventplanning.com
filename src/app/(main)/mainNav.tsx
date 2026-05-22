import type { FC } from 'react';

import { MainNavClient } from './mainNavClient';
import { getServerData } from '@/lib/getServerData';

export const MainNav: FC = async () => {
  const { countryCode } = await getServerData();
  return (
    <MainNavClient countryCode={countryCode} />
  );
};
