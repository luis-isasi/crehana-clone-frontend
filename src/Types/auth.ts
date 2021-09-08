import { User } from './user';

export type AuthResponse = {
  refreshToken: string;
  statusCode: number;
  token: string;
  user: User;
  error?: string;
};

export type UserAuthData = {
  email: string;
  password: string;
};
