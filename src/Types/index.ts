import { DARK, LIGHT } from '@Constans';

//Theme
export type Theme = typeof DARK | typeof LIGHT | null;

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
