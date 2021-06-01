import { fetcher } from '@Utils';
import { Banner } from '@Types';

export const getBannersByDefault = () => {
  return fetcher<Banner[]>({ endpoint: '/banners/' });
};
