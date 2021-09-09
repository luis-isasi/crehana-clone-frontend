import { useRouter } from 'next/router';

import { Category } from '@Types/course';
import BannerSlider from '../../components/BannerSlider';
import Routing from '../../components/Routing';
import OptionsFilterDesktop from '../../components/OptionsFIlterDesktop/OptionsFilterDesktop';
import BannerToPremium from '@Components/banners/BannerToPremium';

const LayoutDesktop: React.FC<{ categories: Category[] }> = ({
  children,
  categories,
}) => {
  const { query } = useRouter();

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
    <div className="h-auto w-full">
      <div className="w-full flex flex-col xl:max-w-screen-xl 2xl:max-w-9xl h-auto box-border xl:px-5 2xl:px-0 mx-auto bg-red-500">
        <BannerSlider />
        <div className="my-8">
          <Routing
            categoryName={selectedCategoryName}
            subCategoryName={selectedSubCategoryName}
            categorySlug={categorySlug}
            subCategorySlug={subCategorySlug}
          />
        </div>
        <div className="flex flex-row">
          <OptionsFilterDesktop
            categories={categories}
            selectedCategorySlug={categorySlug}
            selectedSubCategorySlug={subCategorySlug}
          />
          {children}
        </div>
      </div>
      <div className="fixed bottom-0 w-full h-auto z-10">
        <BannerToPremium
          text="Accede a todos estos cursos por un único pago anual"
          linkText="Hazte Premium hoy"
        />
      </div>
    </div>
  );
};

export default LayoutDesktop;
