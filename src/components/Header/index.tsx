import { useRouter } from 'next/router';

import HeaderDesktop from './HeaderDesktop';
import HeaderMovil from './HeaderMovil';

import useResponsive from '@Hooks/useResponsive';
import { MEDIAQUERY_LG } from 'Contants';

const Index: React.FC = () => {
  const [isDesktop] = useResponsive({ type: 'min', mediaquery: MEDIAQUERY_LG });
  const router = useRouter();

  return (
    <header
      className={`bg-primary-primary text-white font-semibold shadow-lg ${
        router.pathname === '/login' || router.pathname === '/register'
          ? 'h-25'
          : isDesktop
          ? 'h-18'
          : 'h-13'
      }`}
    >
      {isDesktop ? <HeaderDesktop /> : <HeaderMovil />}
    </header>
  );
};

export default Index;
