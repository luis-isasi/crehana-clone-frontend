import SearchOptions from './components/SearchOptions';
import RecommendedCourses from './RecommendedCourses';
import NewCourses from './NewCourses';
import Specializations from './Specializations';
import CoursesSlider from './CoursesSlider';
import useResponsive from '@Hooks/useResponsive';
import { MEDIAQUERY_XL } from '@Constans';

const Courses = () => {
  const isDesktop = useResponsive({
    minMediaQuery: MEDIAQUERY_XL,
  });

  return (
    <div className="h-auto w-full">
      {!isDesktop && <SearchOptions />}
      <div className="w-full h-auto">
        <div className="w-full max-w-screen-xl h-auto box-border px-5 mx-auto">
          {isDesktop && (
            <div>
              <CoursesSlider />
              <div className="text-xs text-gray-400 my-5">{`inicio > cursos online`}</div>
            </div>
          )}
          <div className="w-full h-auto flex flex-row">
            {isDesktop && (
              // ESTO SERA UN IMPORT DYNAMIC
              <div className="h-full w-52 mr-8 bg-indigo-500 ">
                Mostrar todos los cursos online
              </div>
            )}
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
