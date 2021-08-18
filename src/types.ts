import {
  MEDIAQUERY_SM,
  MEDIAQUERY_MD,
  MEDIAQUERY_LG,
  MEDIAQUERY_XL,
  MEDIAQUERY_2X1,
  DARK,
  LIGHT,
} from '@Constans';

//Media Query
export type MediaQuery =
  | typeof MEDIAQUERY_SM
  | typeof MEDIAQUERY_MD
  | typeof MEDIAQUERY_LG
  | typeof MEDIAQUERY_XL
  | typeof MEDIAQUERY_2X1;

//Theme
export type Theme = typeof DARK | typeof LIGHT | null;

//User settings
export interface UserSettings {
  theme: Theme;
}

//User
export interface User {
  email: string;
  firstname: string;
  lastname: string;
  username: string;
}

//Banner
export interface Banner {
  backgroundImage: string;
  ctaLabel: string;
  ctaUrl: string;
  expiresAt: string;
  id: number;
  isActive: boolean;
  position: number;
  subtitle: string;
  title: string;
}

//Response Error
export interface MyResponseError {
  error: string;
  statusCode: number;
}

export interface SubCategory {
  categoryId: number;
  id: number;
  isActive: boolean;
  name: string;
  order: number;
  slug: string;
  url: string;
}

export interface Category {
  id: number;
  isActive: boolean;
  name: string;
  order: number;
  slug: string;
  subCategories: SubCategory[];
  url: string;
}

export interface Course {
  categories: Category[];
  coverImage: string;
  description: string;
  duration: number;
  isActive: true;
  id: number;
  price: number;
  prices: {
    currency: string;
    currencySymbol: string;
    discount: number;
    price: number;
    realPrice: number;
  };
  sections: [
    {
      content: string;
      courseId: number;
      id: number;
      items: [
        {
          content: string;
          id: number;
          title: string;
        }
      ];
      title: string;
      type: string;
    }
  ];
  shortDescription: string;
  subtitle: string;
  title: string;
  trailer: string;
}
