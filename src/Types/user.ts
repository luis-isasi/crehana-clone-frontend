import { Theme } from './index';

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
