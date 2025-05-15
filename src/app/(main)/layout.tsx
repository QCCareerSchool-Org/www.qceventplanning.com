import type { LayoutComponent } from '@/app/serverComponent';
import { Layout } from '@/components/layout';

const MainLayout: LayoutComponent = ({ children }) => <Layout>{children}</Layout>;

export default MainLayout;
