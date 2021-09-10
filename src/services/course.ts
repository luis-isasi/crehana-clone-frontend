import { fetcher } from '@Utils';
import { Course } from 'src/Types/course';

interface ResponseCourses {
  courses: Course[];
  total: number;
}

export const getCourses = () => {
  return fetcher<ResponseCourses>({ endpoint: '/courses/' });
};

export const getCoursesByCategoryID = (categoryId: number) => {
  return fetcher<Course[]>({
    endpoint: `/categories/${categoryId}/courses/`,
  });
};

export const getCoursesBySubCategoryID = (subCategoryId: number) => {
  return fetcher<Course[]>({
    endpoint: `/sub-categories/${subCategoryId}/courses/`,
  });
};

const courses = {
  getAll: getCourses,
  getByCategoryID: getCoursesByCategoryID,
  getBySubCategoryID: getCoursesBySubCategoryID,
};

export default courses;
