import { useRouter } from 'next/router';

import useResponsive from '@Hooks/useResponsive';
import { MEDIAQUERY_LG } from '@Constans';
import Comunity from './sections/Comunity';
import Company from './sections/Company';
import DowlandApp from './sections/DowlandApp';
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
    <footer className="bg-white min-h-60 w-full text-gray-800 flex flex-col items-center">
      <div className="w-5/6 lg:pt-3 lg:pb-8 xl:pb-12 xl:py-5">
        <div className="md:flex md:flex-row md:justify-between ">
          <Company />
          <Comunity />
          <HelpLinks />
          {isLaptop && <DowlandApp />}
        </div>
        <div className="">
          <div className="md:flex  md:justify-between">
            {!isLaptop && (
              <>
                <DowlandApp />
                <div className="flex flex-col items-center">
                  <SocialNetworks />
                  <CurrencyType />
                </div>
              </>
            )}
          </div>
        </div>
        <div className="lg:flex lg:justify-between lg:items-end">
          <CopyrightCrehana />
          {isLaptop && (
            <div className="flex flex-col items-center">
              <SocialNetworks />
              <CurrencyType />
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
