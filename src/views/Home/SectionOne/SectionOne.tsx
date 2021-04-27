import Image from 'next/image';

import Switch from './components/Switch';
import HelloUser from './components/HelloUser';

interface Props {
  firstName?: string;
}

const SectionOne: React.FC<Props> = ({ firstName }) => {
  return (
    <section className="bg-base-lighter-16  h-auto w-full box-border p-4 md:p-6 pb-0 md:pb-6">
      <div className="text-xl font-light box-border px-1 md:px-2  mb-5 flex justify-between">
        <HelloUser firstName={firstName} />
        <Switch />
      </div>
      <div className="bg-base-dark box-border p-2 flex flex-col items-center md:flex-row-reverse md:justify-center">
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
            Te hemos dejado unas recomendaciones según tus intereses para que
            puedas empezar a aprender hoy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;