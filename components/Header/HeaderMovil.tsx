import Link from 'next/link';
import { useRouter } from 'next/router';
import { useUser } from 'context/contextUser';

const HeaderMovil = () => {
  const router = useRouter();
  const { user } = useUser();

  return (
    <header className="bg-primary text-white font-semibold shadow-lg h-18 ">
      <div className="bg-primary box-border sm:bg-red-500 md:bg-yellow-500 lg:bg-primary lg:px-16 xl:bg-primary xl:px-6 container h-full mx-auto lg:max-w-screen-xl 2xl:max-w-9xl flex items-center "></div>
    </header>
  );
};

export default HeaderMovil;
