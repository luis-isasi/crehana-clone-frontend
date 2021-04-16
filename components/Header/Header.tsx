import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Categories from './components/Categories';
import Search from './components/Search';
import LinkToBusiness from './components/buttons/LinkToBusiness';
import LinkToLogin from './components/buttons/LinkToLogin';
import LinkToPremium from './components/buttons/LinkToPremium';
import LinkToRegister from './components/buttons/LinkToRegister';
import MyCourses from './components/MyCourses';
import Avatar from './components/Avatar';
import DesiredCourses from './components/DesiredCourses';
import ShoppingCar from './components/ShoppingCar';
import Community from './components/Community';
import Notification from './components/Notification';

import { useUser } from 'context/contextUser';

const Header: React.FC = () => {
  const router = useRouter();
  const { user } = useUser();

  return (
    <header className="bg-primary text-white font-semibold shadow-lg h-18 ">
      <div className="bg-primary box-border sm:bg-red-500 md:bg-yellow-500 lg:bg-primary lg:px-16 xl:bg-primary xl:px-6 container h-full mx-auto lg:max-w-screen-xl 2xl:max-w-9xl flex items-center ">
        <div className="flex items-center">
          <Link href="/">
            <a>
              <h1 className="font-bold text-3xl hover:cursor-pointer ">
                crehana
              </h1>
            </a>
          </Link>
          {router.pathname === ('/login' || '/register') ? null : (
            <>
              <Categories />
              <div className="border-l border-gray-600 h-9"></div>
            </>
          )}
        </div>
        {router.pathname === ('/login' || '/register') ? null : (
          <>
            <Search />
            {user && <Community />}
            <div className="flex items-center text-sm ">
              <LinkToBusiness />
              <LinkToPremium />
              <div className="border-l border-gray-600 h-9 mx-3 lg:mx-1 xl:mx-3"></div>
              {user !== undefined &&
                (user === null ? (
                  <>
                    <LinkToLogin />
                    <LinkToRegister />
                  </>
                ) : (
                  <>
                    <MyCourses />
                    <DesiredCourses />
                    <ShoppingCar />
                    <Notification />
                    <Avatar />
                  </>
                ))}
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
