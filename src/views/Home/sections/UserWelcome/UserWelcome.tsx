import Image from 'next/image';

import { useContextAuth } from '@Context/contextAuth';
import BtnDarkMode from '@Components/buttons/BtnDarkMode';
import HelloUser from './components/HelloUser';
import { CONTAINER_HOME } from '@Views/Home/contants';

const SectionOne: React.FC = () => {
  const { user } = useContextAuth();

  return (
    <section className="dark:bg-base-lighter-16 h-auto w-full">
      <div
        className={`${CONTAINER_HOME} box-border py-4 md:py-6 pb-0 md:pb-6 `}
      >
        <div className="text-xl font-light box-border px-1 md:px-2  mb-5 flex justify-between">
          <HelloUser firstName={user?.firstname} />
          <div className="flex items-center lg:justify-between w-auto  lg:w-42">
            <span className="text-gray-400 text-xs font-normal hidden lg:block">
              MODO NOCTURNO
            </span>
            <BtnDarkMode />
          </div>
        </div>
        <div className="bg-base-dark box-border rounded-md text-white p-2 lg:px-20 xl:px-24 2xl:px-28 flex flex-col items-center md:flex-row-reverse  md:justify-between ">
          <Image
            loader={({ src }) => `${src}`}
            src="https://source.unsplash.com/random"
            width={210}
            height={250}
          />
          <div className="box-border px-6 w-full max-w-102">
            <p className="font-extrabold text-xl md:text-3xl my-7 md:mt-0">
              Empieza a disfrutar de Premium gratis por 24 hrs.
            </p>
            <p className="text-base font-light mt-2 mb-3">
              Te hemos dejado unas recomendaciones según tus intereses para que
              puedas empezar a aprender hoy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
