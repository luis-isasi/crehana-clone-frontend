import { createContext, useContext, useState, useEffect } from 'react';

import Axios from 'axiosConfig';
import { USER_SESSION_KEY } from 'Contants';

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
  setDataUserLocalStorage: (dataUser: User) => void;
}

const ContextUser = createContext<TypeContextUser | undefined>(undefined);

export const ContextUserProvider = ({ children }) => {
  const [user, setUser] = useState<undefined | null | User>(undefined);

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

  const loginUser = (email: string, password: string) => () => {
    return Axios.post('/auth/login-user/', {
      email: email,
      password: password,
    }).then((data) => {
      return data.data.data;
    });
  };

  const registerUser = (email: string, password: string) => () => {
    return Axios.post('/auth/create-account/', {
      email: email,
      password: password,
    }).then((data) => data);
  };

  return (
    <ContextUser.Provider
      value={{ user, loginUser, registerUser, setDataUserLocalStorage }}
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
