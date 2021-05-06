import Head from 'next/head';

import { useUser } from '@Context/contextUser';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import HelpUser from './HelpUser/HelpUser';

const Home: React.FC = () => {
  const { user } = useUser();

  return (
    <>
      <Head>
        <title>Home | Crehana</title>
      </Head>
      <div className="bg-transparent h-auto w-full text-white ">
        <SectionOne firstName={user?.firstname} />
        <SectionTwo />
        <HelpUser />
      </div>
      <style global jsx>{`
        body {
          //bg-base-dark
          background-color: rgba(7, 14, 39, 1);
        }
      `}</style>
    </>
  );
};

export default Home;
