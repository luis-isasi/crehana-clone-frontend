import { fetcher } from '@Utils';
import { Banner, Course, Categorie } from '@Types';

export const getBannersByDefault = () => {
  return fetcher<Banner[]>({ endpoint: '/banners/' });
};

export const getCourses = () => {
  return fetcher({ endpoint: '/courses/' });
};

export const getCoursesByCategorie = (categoryId: number) => {
  return fetcher<Course[]>({ endpoint: `/categories/${categoryId}/courses/` });
};

export const getCategories = () =>
  fetcher<Categorie[]>({ endpoint: '/categories/' });

export const getCategoryByID = async (categoryId: string) => {
  return fetcher<Categorie>({ endpoint: `/categories/${categoryId}` });
};
