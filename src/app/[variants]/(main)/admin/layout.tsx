import ServerLayout from '@/components/server/ServerLayout';

import Desktop from './_layout/Desktop';
import Mobile from './_layout/Mobile';
import { LayoutProps } from './_layout/type';

const AdminLayout = ServerLayout<LayoutProps>({ Desktop, Mobile });

AdminLayout.displayName = 'AdminLayout';

export default AdminLayout;
