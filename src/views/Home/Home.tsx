import Head from 'next/head';

import { useUser } from '@Context/contextUser';
import LoadingScreen from '@Components/LoadingScreen';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';

const Home: React.FC = () => {
  const { user } = useUser();

  return (
    <>
      <Head>
        <title>Home | Crehana</title>
      </Head>
      <div className="bg-base-dark h-auto w-full text-white ">
        <SectionOne firstName={user?.firstname} />
        <SectionTwo />
      </div>
    </>
  );
};

export default Home;