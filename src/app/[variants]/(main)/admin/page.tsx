import { metadataModule } from '@/server/metadata';
import { translation } from '@/server/translation';
import { DynamicLayoutProps } from '@/types/next';
import { RouteVariants } from '@/utils/server/routeVariants';

import Page from './index';

export const generateMetadata = async (props: DynamicLayoutProps) => {
  const locale = await RouteVariants.getLocale(props);
  const { t } = await translation('admin', locale);
  return metadataModule.generate({
    description: t('desc'),
    title: t('title'),
    url: '/admin',
  });
};

export default async () => {
  return <Page />;
};
