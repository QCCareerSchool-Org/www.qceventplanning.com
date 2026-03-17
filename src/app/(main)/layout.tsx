import { SiteLayout } from '@/components/siteLayout';
import { getServerData } from '@/lib/getServerData';
import type { LayoutComponent } from '@/serverComponent';

const MainLayout: LayoutComponent = async ({ children }) => {
  // eslint-disable-next-line react-hooks/purity
  const date = Date.now(); // best we can do in a layout
  const { countryCode } = await getServerData();

  return <SiteLayout countryCode={countryCode} date={date}>{children}</SiteLayout>;
};

export default MainLayout;
