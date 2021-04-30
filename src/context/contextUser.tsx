import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { USER_SESSION_KEY } from '@Constans';
import useFetch from '@Hooks/useFetch';

interface User {
  token: string;
  email: string;
  firstname: string;
  lastname: string;
  username: string;
}

interface TypeContextUser {
  user: User;
  loginUser: (email: string, password: string) => void;
  registerUser: (email: string, password: string) => void;
  signoutUser: () => void;
  setDataUserLocalStorage: (dataUser: User) => void;
}

const ContextUser = createContext<TypeContextUser | undefined>(undefined);

export const ContextUserProvider = ({ children }) => {
  const [user, setUser] = useState<undefined | null | User>(undefined);

  const router = useRouter();

  useEffect(() => {
    const dataUser = JSON.parse(localStorage.getItem(USER_SESSION_KEY));
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

  const setDataUserLocalStorage = (dataUser: User) => {
    localStorage.setItem(USER_SESSION_KEY, JSON.stringify(dataUser));
    setUser(dataUser);
  };

  const fetch = useFetch();

  const loginUser = (email: string, password: string) => async () => {
    let response: Response = await fetch('/auth/login-user/', 'POST', {
      email,
      password,
    });

    let data = await response.json();

    if (!response.ok) {
      throw new Error(data.data.error);
    }

    return data;
  };

  const registerUser = (email: string, password: string) => async () => {
    let response: Response = await fetch('/auth/create-account/', 'POST', {
      email,
      password,
    });

    let data = await response.json();

    if (!response.ok) {
      throw new Error(data.data.error);
    }

    return data;
  };

  const signoutUser = () => {
    localStorage.removeItem(USER_SESSION_KEY);
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

export const useUser = () => {
  const dataUser = useContext(ContextUser);

  if (typeof dataUser === 'undefined') {
    throw new Error('useUser must be withing ContextUserProvider');
  }

  return dataUser;
};
