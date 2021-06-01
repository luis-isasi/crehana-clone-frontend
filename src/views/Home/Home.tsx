import Head from 'next/head';

import UserWelcome from './sections/UserWelcome';
import InformationToUser from './sections/InformationToUser';
import HelpUser from './sections/HelpUser';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Home | Crehana</title>
      </Head>
      <div className="bg-transparent dark:bg-base-dark h-auto w-full text-white dark:text-gray-800">
        <UserWelcome />
        <InformationToUser />
        <HelpUser />
      </div>
    </>
  );
};

export const getStaticPros = () => {
  return {
    props: {
      isPrivate: true,
    },
  };
};

// Home.requireAuth = true;
export default Home;
