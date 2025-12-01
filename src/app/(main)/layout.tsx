import type { LayoutComponent } from '@/app/serverComponent';
import { SiteLayout } from '@/components/siteLayout';

const MainLayout: LayoutComponent = ({ children }) => <SiteLayout>{children}</SiteLayout>;

export default MainLayout;
