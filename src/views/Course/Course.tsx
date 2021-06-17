import { MEDIAQUERY_LG, MEDIAQUERY_XL } from '@Constans';
import useResponsive from '@Hooks/useResponsive';
import CourseAvatar from './components/CourseAvatar';

import BannerLeft from './sections/BannerLeft';
import MainCourseInformation from './sections/MainCourseInformation';
import WillLearn from './components/CourseContent/WillLearn';
import Descripcion from './components/CourseContent/Descripcion';
import Temary from './components/CourseContent/Temary';
import CourseDificult from './components/CourseContent/CourseDificult';

const Course = () => {
  const isMaxTablet = useResponsive({
    maxMediaQuery: MEDIAQUERY_LG,
  });
  const isDesktop = useResponsive({
    minMediaQuery: MEDIAQUERY_XL,
  });

  return (
    <div className="w-full h-auto text-base-light">
      {isMaxTablet && <CourseAvatar />}
      <div className="w-full h-auto  px-5 md:px-10 md:max-w-3xl  lg:max-w-4xl xl:max-w-7xl mx-auto py-8 flex ">
        <article className="w-full h-auto">
          <MainCourseInformation />
          <div className="w-full h-auto my-15">
            <WillLearn />
            <Descripcion />
            <Temary />
            <CourseDificult />
          </div>
        </article>
        {isDesktop && (
          <div className="ml-5">
            <BannerLeft />
          </div>
        )}
      </div>
    </div>
  );
};

export default Course;
