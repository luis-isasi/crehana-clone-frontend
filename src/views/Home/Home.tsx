import Head from 'next/head';

import ProtectRouteAuth from '@Hoc/ProtectRouteAuth';

import { UserWelcome, InformationToUser, HelpUser } from './sections/';

const Home: React.FC & {
  enabledDark?: boolean;
} = () => {
  return (
    <ProtectRouteAuth>
      <Head>
        <title>Home | Crehana</title>
      </Head>
      <div className="bg-transparent dark:bg-base-dark h-auto w-full text-white dark:text-gray-800">
        <UserWelcome />
        <InformationToUser />
        <HelpUser />
      </div>
    </ProtectRouteAuth>
  );
};

Home.enabledDark = true;

export default Home;
