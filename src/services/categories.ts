import { fetcher } from '@Utils';
import { Category } from '@Types/course';

export const getCategories = () =>
  fetcher<Category[]>({ endpoint: '/categories/' });

export const getCategoryByID = async (categoryId: string) => {
  return fetcher<Category>({ endpoint: `/categories/${categoryId}` });
};

const category = {
  getAll: getCategories,
  getByID: getCategoryByID,
};

export default category;
