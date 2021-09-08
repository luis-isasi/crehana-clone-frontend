import { fetcher } from '@Utils';
import { Course } from 'src/Types/course';

export const getCourses = () => {
  return fetcher<{ courses: Course[] }>({ endpoint: '/courses/' });
};

export const getCoursesByCategory = (categoryId: number) => {
  return fetcher<Course[]>({ endpoint: `/categories/${categoryId}/courses/` });
};

const courses = {
  getAll: getCourses,
  getByCategory: getCoursesByCategory,
};

export default courses;
