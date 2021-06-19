import { fetcher } from '@Utils';
import { User } from '@Types';

import { endpoints } from './constants';

export type UserAuthData = {
  email: string;
  password: string;
};

export type AuthResponse = {
  refreshToken: string;
  statusCode: number;
  token: string;
  user: User;
  error?: string;
};

const auth = {
  loginUser: async (data: UserAuthData) => {
    return fetcher<AuthResponse>({
      endpoint: endpoints.LOGIN,
      method: 'POST',
      body: data,
    });
  },
  registerUser: async (data: UserAuthData) => {
    return fetcher<AuthResponse>({
      endpoint: endpoints.REGISTER,
      method: 'POST',
      body: data,
    });
  },
};

export default auth;
