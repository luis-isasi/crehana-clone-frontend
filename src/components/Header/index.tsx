import { useRouter } from 'next/router';

import HeaderDesktop from './HeaderDesktop';
import HeaderMovil from './HeaderMovil';
import useResponsive from '@Hooks/useResponsive';
import { MEDIAQUERY_LG } from '@Constans';

const Index: React.FC = () => {
  const isDesktop = useResponsive({
    minMediaQuery: MEDIAQUERY_LG,
  });
  const router = useRouter();

  const isLoginOrRegister =
    router.pathname === '/login' || router.pathname === '/register';

  return (
    <header
      className={`bg-primary-primary text-white font-semibold ${
        isLoginOrRegister
          ? 'h-25'
          : isDesktop
          ? 'h-18 min-h-18'
          : 'h-13 min-h-13'
      }`}
    >
      {isDesktop === true && <HeaderDesktop />}
      {isDesktop === false && <HeaderMovil />}
    </header>
  );
};

export default Index;
