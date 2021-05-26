import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { USER_SESSION } from '@Constans';
import { EP_LOGIN, EP_REGISTER } from './constants';
import { fetcher } from '@Utils';
import { ParametersUserData, User } from '@Types';
import { LoginRegister } from './types';

//------------types----------
interface UserLocalStorage extends User {
  token: string;
}

interface TypeContextUser {
  user: UserLocalStorage;
  loginUser: ({ email, password }: ParametersUserData) => void;
  registerUser: ({ email, password }: ParametersUserData) => void;
  signoutUser: () => void;
  setDataUserLocalStorage: (dataUser: UserLocalStorage) => void;
}

//Context
const ContextUser = createContext<TypeContextUser | undefined>(undefined);

//Provider
export const ContextUserProvider = ({ children }) => {
  const [user, setUser] = useState<undefined | null | UserLocalStorage>(
    undefined
  );

  const router = useRouter();

  useEffect(() => {
    const dataUser = JSON.parse(localStorage.getItem(USER_SESSION));
    if (dataUser) {
      setUser({
        token: dataUser.token,
        email: dataUser.email,
        firstname: dataUser.firstname,
        lastname: dataUser.lastaname,
        username: dataUser.username,
      });
    } else {
      setUser(null);
    }
  }, []);

  const setDataUserLocalStorage = (dataUser: UserLocalStorage) => {
    localStorage.setItem(USER_SESSION, JSON.stringify(dataUser));
    setUser(dataUser);
  };

  const loginUser = ({ email, password }: ParametersUserData) => {
    return fetcher<LoginRegister>({
      endpoint: EP_LOGIN,
      method: 'POST',
      body: {
        email,
        password,
      },
    });
  };

  const registerUser = ({ email, password }: ParametersUserData) => {
    return fetcher<LoginRegister>({
      endpoint: EP_REGISTER,
      method: 'POST',
      body: {
        email,
        password,
      },
    });
  };

  const signoutUser = () => {
    localStorage.removeItem(USER_SESSION);
    setUser(null);
    router.push('/');
  };

  return (
    <ContextUser.Provider
      value={{
        user,
        loginUser,
        registerUser,
        signoutUser,
        setDataUserLocalStorage,
      }}
    >
      {children}
    </ContextUser.Provider>
  );
};

//Hook
export const useContextUser = () => {
  const dataUser = useContext(ContextUser);

  if (typeof dataUser === 'undefined') {
    throw new Error('useUser must be withing ContextUserProvider');
  }

  return dataUser;
};
