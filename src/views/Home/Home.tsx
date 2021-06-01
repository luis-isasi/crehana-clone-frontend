import Head from 'next/head';

import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import HelpUser from './HelpUser/HelpUser';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Home | Crehana</title>
      </Head>
      <div className="bg-transparent dark:bg-base-dark h-auto w-full text-white dark:text-gray-800">
        <SectionOne />
        <SectionTwo />
        <HelpUser />
      </div>
    </>
  );
};

Home.requireAuth = true;
export default Home;
