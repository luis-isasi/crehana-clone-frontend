import { useQuery } from 'react-query';

import useResponsive from '@Hooks/useResponsive';
import { MEDIAQUERY_XL } from '@Constans';
import LayoutDesktop from './components/LayoutDesktop';
import LayoutMobile from './components/LayoutMobile';

import category from '@Services/categories';

const Layout = ({ children }) => {
  const { data: categories, isLoading } = useQuery('categories', () =>
    category.getAll()
  );

  const untilLaptop = useResponsive({
    maxMediaQuery: MEDIAQUERY_XL,
  });

  const isDesktop = useResponsive({
    minMediaQuery: MEDIAQUERY_XL,
  });

  //TODO: ADD PLACEHOLDER
  if (isLoading || !categories) {
    return <div>loading</div>;
  }

  return (
    <div className="w-full h-auto">
      {untilLaptop && categories && (
        <LayoutMobile categories={categories}>{children}</LayoutMobile>
      )}
      {isDesktop && categories && (
        <LayoutDesktop categories={categories}>{children}</LayoutDesktop>
      )}
    </div>
  );
};

export default Layout;
