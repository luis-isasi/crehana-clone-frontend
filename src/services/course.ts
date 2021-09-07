import { fetcher } from '@Utils';
import { Course } from '@Types';

export const getCourses = () => {
  return fetcher({ endpoint: '/courses/' });
};

export const getCoursesByCategory = (categoryId: number) => {
  return fetcher<Course[]>({ endpoint: `/categories/${categoryId}/courses/` });
};

const courseService = {
  getAll: getCourses,
  getByCategory: getCoursesByCategory,
};

export default courseService;
