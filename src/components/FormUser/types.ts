import { User } from '@Types';

import { UserAuthData, AuthResponse } from '../../services/auth';

export interface PropsFormUser {
  typeForm: 'login' | 'register';
  mutation: (data: UserAuthData) => Promise<AuthResponse>;
  isChecked?: boolean;
  onSuccess?: () => void;
  onError?: () => void;
}

export type StateForm =
  | 'INITIAL'
  | 'READYFORSUBMIT'
  | 'LOADING'
  | 'ERROR'
  | 'COMPLETED';

export interface InitialState {
  email: string;
  password: string;
  stateForm: StateForm;
  errors: {
    error: string;
    email: string;
    password: string;
  };
}

export type FormAction =
  | {
      type: 'SET_FIELD';
      name: string;
      value: string;
    }
  | {
      type: 'SET_ERROR';
      nameError: string;
      message: string;
    }
  | {
      type: 'CLEAN_ERROR';
      nameError: string;
    }
  | {
      type: 'SET_STATE_FORM';
      newState: StateForm;
    };

//types for backend's data
export interface LoginRegister {
  refreshToken: string;
  statusCode: number;
  token: string;
  user: User;
}
