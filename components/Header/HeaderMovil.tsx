import Link from 'next/link';
import { useRouter } from 'next/router';

import { useUser } from 'context/contextUser';
import Search from './components/SearchIcon';
import MainIcon from './components/MainIcon';

const HeaderMovil = () => {
  const router = useRouter();
  const { user } = useUser();

  //sm:bg-red-500 md:bg-yellow-500
  return (
    <div className="w-full h-full mx-auto bg-primary-primary box-border px-5 flex items-center justify-between md:px-10">
      <div className="bg-transparent flex items-center w-18 min-h-0">
        {router.pathname === '/login' ||
        router.pathname === '/register' ? null : (
          <>
            <MainIcon />
            <Search />
          </>
        )}
      </div>
      <Link href="/">
        <a>
          <h1
            className={`font-bold ${
              router.pathname === '/login' || router.pathname === '/register'
                ? 'text-4xl'
                : 'text-3xl'
            } hover:cursor-pointer`}
          >
            crehana
          </h1>
        </a>
      </Link>
      <div className="bg-transparent w-18"></div>
    </div>
  );
};

export default HeaderMovil;
