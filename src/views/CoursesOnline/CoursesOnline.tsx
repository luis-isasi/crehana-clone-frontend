import dynamic from 'next/dynamic';
import { useQuery } from 'react-query';

import useResponsive from '@Hooks/useResponsive';
import { MEDIAQUERY_MD, MEDIAQUERY_XL } from '@Constans';
import BannerToPremium from '@Components/banners/BannerToPremium';
import BannerSlider from './components/BannerSlider';
import CoursesByDefault from './sections/CoursesByDefault';
import { getCourses } from '@Services/coursesOnline';
import { Category } from '@Types';

const OptionsFilterMovil = dynamic(
  () => import('./components/OptionsFilterMovil')
);

const OptionsFilterDesktop = dynamic(
  () => import('./components/OptionsFIlterDesktop')
);

interface Props {
  categorySlug?: string;
  subCategorySlug?: string;
  categories: Category[];
}

const CoursesOnline: React.FC<Props> = ({
  categorySlug,
  subCategorySlug,
  categories,
}) => {
  const isUntilLaptop = useResponsive({
    maxMediaQuery: MEDIAQUERY_XL,
  });
  const isTablet = useResponsive({
    minMediaQuery: MEDIAQUERY_MD,
  });
  const isDesktop = useResponsive({
    minMediaQuery: MEDIAQUERY_XL,
  });

  //Query for filters
  const { data, isLoading, isError } = useQuery('course', () => getCourses());

  return (
    <div className="h-auto w-full">
      {isUntilLaptop && <OptionsFilterMovil />}
      <div className="w-full h-auto">
        <div className="w-full xl:max-w-screen-xl 2xl:max-w-9xl h-auto box-border px-5 mx-auto">
          {
            //Only desktop
            isDesktop && (
              <div>
                <BannerSlider />
                <div className="text-xs text-gray-400 my-8">{`inicio > cursos online`}</div>
              </div>
            )
          }
          <div className="w-full h-auto flex flex-row">
            {isDesktop && (
              <OptionsFilterDesktop
                categories={categories}
                selectedCategorySlug={categorySlug}
                selectedSubCategorySlug={subCategorySlug}
              />
            )}
            <CoursesByDefault />
          </div>
        </div>
      </div>
      {isTablet && (
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

export default CoursesOnline;
