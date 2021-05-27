import Head from 'next/head';

import { useContextAuth } from '@Context/contextAuth';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import HelpUser from './HelpUser/HelpUser';

const Home: React.FC = () => {
  const { user } = useContextAuth();

  return (
    <>
      <Head>
        <title>Home | Crehana</title>
      </Head>
      <div className="bg-transparent dark:bg-base-dark h-auto w-full text-white dark:text-gray-800">
        <SectionOne firstName={user?.firstname} />
        <SectionTwo />
        <HelpUser />
      </div>
    </>
  );
};

Home.requireAuth = true;
export default Home;
