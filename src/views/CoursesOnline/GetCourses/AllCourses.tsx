import { useQuery } from 'react-query';

import coursesService from '@Services/course';
import { renderCourses } from '@Views/CoursesOnline/utils';

const AllCourses: React.FC<{}> = () => {
  const { data, isLoading } = useQuery('allCourses', () =>
    coursesService.getAll()
  );

  return <>{!isLoading && data.courses && renderCourses(data.courses)}</>;
};

export default AllCourses;
