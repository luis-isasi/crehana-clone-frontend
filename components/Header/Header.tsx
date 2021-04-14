import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-500 shadow-lg h-18">
      <div className="bg-primary container h-full mx-auto lg:max-w-screen-xl flex items-center ">
        <Link href="/">
          <a>
            <h1 className="font-bold text-3xl text-white hover:cursor-pointer">
              crehana
            </h1>
          </a>
        </Link>

        {' | '}
        <div></div>
      </div>
    </header>
  );
};

export default Header;
