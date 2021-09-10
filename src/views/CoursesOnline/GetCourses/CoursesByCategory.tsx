import { useQuery } from 'react-query';

import coursesService from '@Services/course';
import { renderCourses } from '@Views/CoursesOnline/utils';

const CoursesByCategory: React.FC<{ categoryId: number }> = ({
  categoryId,
}) => {
  const {
    data: courses,
    isLoading,
  } = useQuery(`coursesByCategory-${categoryId}`, () =>
    coursesService.getByCategoryID(categoryId)
  );

  return <>{!isLoading && courses && renderCourses(courses)}</>;
};

export default CoursesByCategory;
