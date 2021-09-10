import { useQuery } from 'react-query';

import coursesService from '@Services/course';
import { renderCourses } from '@Views/CoursesOnline/utils';

const CoursesBySubCategoy: React.FC<{ subCategoryId: number }> = ({
  subCategoryId,
}) => {
  const {
    data: courses,
    isLoading,
  } = useQuery(`coursesBySubCategory-${subCategoryId}`, () =>
    coursesService.getBySubCategoryID(subCategoryId)
  );

  return <>{!isLoading && courses && renderCourses(courses)}</>;
};

export default CoursesBySubCategoy;
