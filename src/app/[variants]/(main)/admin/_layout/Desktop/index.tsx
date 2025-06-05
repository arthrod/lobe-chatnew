'use client';

import { memo } from 'react';

import { LayoutProps } from '../type';

const Layout = memo<LayoutProps>(({ children }) => children);

Layout.displayName = 'DesktopAdminLayout';

export default Layout;
