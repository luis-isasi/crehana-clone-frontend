import { fetcher } from '@Utils';
import { AuthResponse, UserAuthData } from '@Types/auth';

const endpoints = {
  LOGIN: '/auth/login-user/',
  REGISTER: '/auth/create-account/',
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
