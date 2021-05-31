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
