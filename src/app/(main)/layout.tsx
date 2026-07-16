import { cookies } from 'next/headers';

import { SiteLayout } from '@/components/siteLayout';
import { isUserValues } from '@/domain/userValues';
import { getServerData } from '@/lib/getServerData';
import { decodeJwt } from '@/lib/jwt';
import type { LayoutComponent } from '@/serverComponent';

const MainLayout: LayoutComponent = async ({ children }) => {
  // eslint-disable-next-line react-hooks/purity
  const date = Date.now(); // best we can do in a layout
  const { countryCode, provinceCode } = await getServerData();
  const jwt = (await cookies()).get('user')?.value;
  const result = jwt ? await decodeJwt(jwt) : undefined;
  const raw = result?.success ? result.value : undefined;
  const userValues = raw && isUserValues(raw) ? raw : undefined;

  return <SiteLayout countryCode={countryCode} provinceCode={provinceCode} date={date} userValues={userValues}>{children}</SiteLayout>;
};

export default MainLayout;
