import Image from 'next/image';
import Head from 'next/head';

import { useUser } from '@Context/contextUser';
import LoadingScreen from '@Components/LoadingScreen';
import Switch from './components/Switch';
import HelloUser from './components/HelloUser';

const Home: React.FC = () => {
  const { user } = useUser();

  return (
    <>
      <Head>
        <title>Home | Crehana</title>
      </Head>
      <div className="bg-primary-primary  h-auto w-full text-white">
        <section className="bg-base-lighter-16 h-auto w-full">
          <div className="text-xl font-light box-border p-5 flex justify-between">
            <HelloUser firstName={user?.firstname} />
            <Switch />
          </div>
          <div className="bg-base-dark box-border p-2 mx-5  flex flex-col items-center md:flex-row-reverse">
            <Image
              loader={({ src }) => `${src}`}
              src="https://source.unsplash.com/random"
              width={210}
              height={250}
            />
            <div className="box-border px-6 w-full max-w-102">
              <p className="font-extrabold text-xl my-7">
                Empieza a disfrutar de Premium gratis por 24 hrs.
              </p>
              <p className="text-base font-light mt-2 mb-3">
                Te hemos dejado unas recomendaciones según tus intereses para
                que puedas empezar a aprender hoy.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
