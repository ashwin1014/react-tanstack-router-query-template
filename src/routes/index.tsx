import { createFileRoute } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

import { INTL_NAMESPACE } from '../i18n/config';

const Home = () => {
  const { t } = useTranslation([INTL_NAMESPACE.COMMON]);
  return <div>{t('common:greet')}</div>;
};

const Route = createFileRoute('/')({
  component: Home,
});

export { Route };
export default Home;
