import { fetcher } from '@Utils';
import { Banner } from '@Types';

export const getBannersByDefault = () => {
  return fetcher<Banner[]>({ endpoint: '/banners/' });
};

export const getCourses = () => {
  return fetcher({ endpoint: '/courses/' });
};
