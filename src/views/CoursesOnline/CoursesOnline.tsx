import dynamic from 'next/dynamic';

import RecommendedCourses from './RecommendedCourses';
import NewCourses from './NewCourses';
import Specializations from './Specializations';
import useResponsive from '@Hooks/useResponsive';
import { MEDIAQUERY_XL } from '@Constans';

const OptionsFilterMovil = dynamic(
  () => import('./components/OptionsFilterMovil')
);
const OptionsFilterDesktop = dynamic(
  () => import('./components/OptionsFIlterDesktop')
);
const CoursesSlider = dynamic(() => import('./components/CoursesSlider'));

const Courses = () => {
  const isMovilUntilLaptop = useResponsive({
    maxMediaQuery: MEDIAQUERY_XL,
  });

  const isDesktop = useResponsive({
    minMediaQuery: MEDIAQUERY_XL,
  });

  return (
    <div className="h-auto w-full">
      {isMovilUntilLaptop && <OptionsFilterMovil />}
      <div className="w-full h-auto">
        <div className="w-full max-w-screen-xl h-auto box-border px-5 mx-auto">
          {isDesktop && (
            <div>
              <CoursesSlider />
              <div className="text-xs text-gray-400 my-5">{`inicio > cursos online`}</div>
            </div>
          )}
          <div className="w-full h-auto flex flex-row">
            {isDesktop && <OptionsFilterDesktop />}
            <div className="flex-grow flex flex-col">
              <RecommendedCourses />
              <NewCourses />
              <Specializations />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
