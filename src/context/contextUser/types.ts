//types for backend's data
export interface LoginRegister {
  refreshToken: string;
  statusCode: number;
  token: string;
  user: User;
}
