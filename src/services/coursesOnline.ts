import { fetcher } from '@Utils';
import { Banner, Course } from '@Types';

export const getBannersByDefault = () => {
  return fetcher<Banner[]>({ endpoint: '/banners/' });
};

export const getCourses = () => {
  return fetcher({ endpoint: '/courses/' });
};

export const getCoursesByCategorie = (categoryId: number) => {
  return fetcher<Course[]>({ endpoint: `/categories/${categoryId}/courses/` });
};
