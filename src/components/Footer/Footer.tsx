import { useRouter } from 'next/router';

import useResponsive from '@Hooks/useResponsive';
import { MEDIAQUERY_LG } from '@Constans';
import Comunity from './sections/Comunity';
import Company from './sections/Company';
import DownloadApp from './sections/DownloadApp';
import HelpLinks from './sections/HelpLinks';
import SocialNetworks from './sections/SocialNetworks';
import CurrencyType from './components/CurrencyType';
import CopyrightCrehana from './components/CopyrightCrehana';

const Footer = () => {
  const isLaptop = useResponsive({
    minMediaQuery: MEDIAQUERY_LG,
  });

  const router = useRouter();
  const isLoginOrRegister =
    router.pathname === '/login' || router.pathname === '/register';

  if (isLoginOrRegister) return null;

  return (
    <footer className="bg-white dark:bg-base-dark min-h-60 w-full text-gray-800">
      <div className="dark:bg-base-main-80 w-full h-auto lg:pb-8 xl:pb-10 2xl:pb-12 flex flex-col items-center ">
        <div className=" w-5/6 lg:pt-3 lg:pb-8 xl:py-5">
          <div className="md:flex md:flex-row md:justify-between ">
            <Company />
            <Comunity />
            <HelpLinks />
            {isLaptop && <DownloadApp />}
          </div>
          <div className="md:flex md:flex-col lg:flex-row-reverse lg:justify-between lg:items-center xl:pt-10">
            <div className="flex flex-col md:flex-row justify-between md:items-center">
              {!isLaptop && <DownloadApp />}
              <div className="xl:min-w-98 xl:w-98 flex flex-col xl:flex-row items-center">
                <SocialNetworks />
                <CurrencyType />
              </div>
            </div>
            <CopyrightCrehana />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
