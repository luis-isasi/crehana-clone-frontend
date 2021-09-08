import RecommendedCourses from './sections/RecommendedCourses';
import NewCourses from './sections/NewCourses';
import Specializations from './sections/Specializations';

const CoursesByDefault = () => {
  return (
    <div className="flex-grow flex flex-col">
      <RecommendedCourses />
      <NewCourses />
      <Specializations />
    </div>
  );
};

export default CoursesByDefault;
