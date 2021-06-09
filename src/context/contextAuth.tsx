import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { USER_SESSION, USER_SETTINGS } from '@Constans';
import { User } from '@Types';

//------------types----------
interface UserLocalStorage extends User {
  token: string;
}

interface TypeContextUser {
  user: UserLocalStorage;
  signoutUser: () => void;
  setDataUserLocalStorage: (dataUser: UserLocalStorage) => void;
  isLoading: boolean;
}

//Context
const ContextAuth = createContext<TypeContextUser | undefined>(undefined);

//Provider
export const ContextAuthProvider = ({ children }) => {
  const [user, setUser] = useState<undefined | null | UserLocalStorage>(
    undefined
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const dataUser: UserLocalStorage = JSON.parse(
      localStorage.getItem(USER_SESSION)
    );
    if (dataUser) {
      setUser({
        token: dataUser.token,
        email: dataUser.email,
        firstname: dataUser.firstname,
        lastname: dataUser.lastname,
        username: dataUser.username,
      });
    } else {
      setUser(null);
    }
    //change isLoading
    setIsLoading(false);
  }, []);

  const setDataUserLocalStorage = (dataUser: UserLocalStorage) => {
    localStorage.setItem(USER_SESSION, JSON.stringify(dataUser));
    setUser(dataUser);
  };

  const signoutUser = () => {
    localStorage.removeItem(USER_SESSION);
    localStorage.removeItem(USER_SETTINGS);
    setUser(null);
    router.push('/');
  };

  return (
    <ContextAuth.Provider
      value={{
        user,
        signoutUser,
        setDataUserLocalStorage,
        isLoading,
      }}
    >
      {children}
    </ContextAuth.Provider>
  );
};

//Hook
export const useContextAuth = () => {
  const dataUser = useContext(ContextAuth);

  if (typeof dataUser === 'undefined') {
    throw new Error('useUser must be withing ContextUserProvider');
  }

  return dataUser;
};
