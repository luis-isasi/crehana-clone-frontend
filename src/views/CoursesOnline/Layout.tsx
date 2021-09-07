import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

import useResponsive from '@Hooks/useResponsive';
import { MEDIAQUERY_XL, MEDIAQUERY_MD } from '@Constans';

import category from '@Services/categories';
import BannerSlider from './components/BannerSlider';
import BannerToPremium from '@Components/banners/BannerToPremium';
import Routing from './components/Routing';
import OptionsFilterMovil from './components/OptionsFilterMovil';
import OptionsFilterDesktop from './components/OptionsFIlterDesktop';

const Layout = ({ children }) => {
  const { query } = useRouter();
  const { data: categories, isLoading, isError } = useQuery('categories', () =>
    category.getAll()
  );

  const untilLaptop = useResponsive({
    maxMediaQuery: MEDIAQUERY_XL,
  });

  const isDesktop = useResponsive({
    minMediaQuery: MEDIAQUERY_XL,
  });

  const fromTablet = useResponsive({
    minMediaQuery: MEDIAQUERY_MD,
  });

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
    <div className="h-auto w-full bg-red-500">
      <div className="w-full h-auto">
        <div className="w-full xl:max-w-screen-xl 2xl:max-w-9xl h-auto box-border px-5 mx-auto">
          {
            //Only desktop
            isDesktop && (
              <div>
                <BannerSlider />
                <div className="my-8">
                  <Routing
                    categoryName={selectedCategoryName}
                    subCategoryName={selectedSubCategoryName}
                    categorySlug={categorySlug}
                    subCategorySlug={subCategorySlug}
                  />
                </div>
              </div>
            )
          }
          <div className="w-full h-auto flex flex-row">
            {untilLaptop && <OptionsFilterMovil categories={categories} />}
            {isDesktop && (
              <OptionsFilterDesktop
                categories={categories}
                selectedCategorySlug={categorySlug}
                selectedSubCategorySlug={subCategorySlug}
              />
            )}
            {children}
          </div>
        </div>
      </div>
      {fromTablet && (
        <div className="fixed bottom-0 w-full h-auto z-10">
          <BannerToPremium
            text="Accede a todos estos cursos por un único pago anual"
            linkText="Hazte Premium hoy"
          />
        </div>
      )}
    </div>
  );
};

export default Layout;
