import { memo } from 'react';
import Link from '@Components/Links/Link';
import { useRouter } from 'next/router';

import Search from './components/SearchIcon';
import MainIcon from './components/MainIcon';

const HeaderMovil = () => {
  const router = useRouter();

  const isLoginOrRegister =
    router.pathname === '/login' || router.pathname === '/register';

  return (
    <div className="w-full h-full mx-auto bg-primary-primary box-border px-5 flex items-center justify-between md:px-10">
      <div className="bg-transparent flex items-center w-18 min-h-0">
        {isLoginOrRegister ? null : (
          <>
            <MainIcon />
            <Search />
          </>
        )}
      </div>
      <Link href="/">
        <h1
          className={`font-bold ${
            isLoginOrRegister ? 'text-4xl' : 'text-3xl'
          } hover:cursor-pointer`}
        >
          crehana
        </h1>
      </Link>
      <div className="bg-transparent w-18"></div>
    </div>
  );
};

export default memo(HeaderMovil);
