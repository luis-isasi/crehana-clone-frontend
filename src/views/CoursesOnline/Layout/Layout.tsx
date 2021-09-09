import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

import useResponsive from '@Hooks/useResponsive';
import { MEDIAQUERY_XL } from '@Constans';
import LayoutDesktop from './components/LayoutDesktop';
import LayoutMobile from './components/LayoutMobile';

import category from '@Services/categories';

const Layout = ({ children }) => {
  const { query } = useRouter();
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

  const categorySlug = query.categorySlug as string;
  const subCategorySlug = query.subCategorySlug as string;

  let selectedCategoryName: string;
  let selectedSubCategoryName: string;

  //get the name of the selected category and sub category
  categories.forEach(({ slug, name, subCategories }) => {
    if (slug === categorySlug) {
      selectedCategoryName = name;
      subCategories.forEach(({ slug, name }) => {
        if (slug === subCategorySlug) {
          selectedSubCategoryName = name;
        }
      });
    }
  });

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
