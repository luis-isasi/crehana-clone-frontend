import HeaderDesktop from './HeaderDesktop';
import HeaderMovil from './HeaderMovil';

import useResponsive from 'hooks/useResponsive';
import { MEDIAQUERY_LG } from 'Contants';

const Index: React.FC = () => {
  const [isDesktop] = useResponsive({ type: 'min', mediaquery: MEDIAQUERY_LG });

  if (isDesktop) {
    return <HeaderDesktop />;
  }

  if (!isDesktop) {
    return <HeaderMovil />;
  }
};

export default Index;
