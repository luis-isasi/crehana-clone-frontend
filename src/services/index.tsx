import { fetcher } from '@Utils';
import { Categorie } from '@Types';

export const getCategories = () =>
  fetcher<Categorie[]>({ endpoint: '/categories/' });
