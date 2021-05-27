import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { USER_SESSION } from '@Constans';
import { User } from '@Types';
import LoadingScreen from '@Components/LoadingScreen';

//------------types----------
interface UserLocalStorage extends User {
  token: string;
}

interface TypeContextUser {
  user: UserLocalStorage;
  signoutUser: () => void;
  setDataUserLocalStorage: (dataUser: UserLocalStorage) => void;
}

//Context
const ContextAuth = createContext<TypeContextUser | undefined>(undefined);

//Provider
export const ContextAuthProvider = ({ children }) => {
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

  const signoutUser = () => {
    localStorage.removeItem(USER_SESSION);
    setUser(null);
    router.push('/');
  };

  return (
    <ContextAuth.Provider
      value={{
        user,
        signoutUser,
        setDataUserLocalStorage,
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

export const ProtecRouteAuth = ({ children }) => {
  const router = useRouter();
  const { user } = useContextAuth();

  //get the current path
  const to = router.pathname;

  if (user === undefined) return <LoadingScreen />;

  if (user === null) {
    //pass the current
    router.push(`/login/?nextPage=${to}`);
  }

  return <>{children}</>;
};
