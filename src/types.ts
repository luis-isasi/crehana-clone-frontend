import {
  MEDIAQUERY_SM,
  MEDIAQUERY_MD,
  MEDIAQUERY_LG,
  MEDIAQUERY_XL,
  MEDIAQUERY_2X1,
  DARK,
  LIGHT,
} from '@Constans';

export type MediaQuery =
  | typeof MEDIAQUERY_SM
  | typeof MEDIAQUERY_MD
  | typeof MEDIAQUERY_LG
  | typeof MEDIAQUERY_XL
  | typeof MEDIAQUERY_2X1;

export type Theme = typeof DARK | typeof LIGHT | null;

//User settings
export interface UserSettings {
  theme: Theme;
}

export interface ParametersUserData {
  email: string;
  password: string;
}

export interface User {
  email: string;
  firstname: string;
  lastname: string;
  username: string;
}
