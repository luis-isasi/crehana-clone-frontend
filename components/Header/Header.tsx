import Link from 'next/link';
import SearchIcon from '@material-ui/icons/Search';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-500 text-white shadow-lg h-18 ">
      <div className="bg-primary container h-full mx-auto lg:max-w-screen-xl flex items-center">
        <div className="flex items-center">
          <Link href="/">
            <a>
              <h1 className="font-bold text-3xl hover:cursor-pointer">
                crehana
              </h1>
            </a>
          </Link>
          <div>
            <button>Categorias</button>
          </div>
          <span> | </span>
        </div>
        <div className="flex items-center">
          <button>
            <SearchIcon />
          </button>
        </div>
        <div className="flex items-center">
          <Link href="/login">
            <a className="bg-gray-400 p-8">Para empresas</a>
          </Link>
          <Link href="/login">
            <a className="bg-gray-400 p-8 rounded-lg">Vuélvete Premium</a>
          </Link>
          <span> | </span>
          <Link href="/login">
            <a className="bg-gray-400 p-8">Ingresar</a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
