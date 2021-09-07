import RecommendedCourses from './sections/RecommendedCourses';
import NewCourses from './sections/NewCourses';
import Specializations from './sections/Specializations';

const CoursesByDefault = () => {
  return (
    <div className="flex-grow flex flex-col bg-gray-600">
      <RecommendedCourses />
      <NewCourses />
      <Specializations />
    </div>
  );
};

export default CoursesByDefault;
