import { useState } from 'react';
import Link from 'next/link';

import BtnSignout from './components/BtnSignout';

const Avatar: React.FC = () => {
  const [isClick, setIsClick] = useState<boolean>(false);

  return (
    <div className="bg-transparent  min-w-min relative">
      <button
        onClick={() => {
          setIsClick(!isClick);
        }}
        className="bg-gray-700 mx-5 lg:mx-3 xl:mx-5 rounded-circle w-8 h-8 outline-none focus:outline-none"
      ></button>
      {isClick && (
        <div className=" bg-white h-58 w-56 absolute rounded-md z-50  lg:-bottom-62 lg:-left-42 xl:-bottom-62 xl:-left-40 ">
          <div
            style={{
              borderLeft: '12px solid transparent',
              borderRight: '12px solid transparent',
            }}
            className="bg-transparent h-0 w-0 border-0 border-b-12 border-white  relative -top-3 left-46"
          ></div>
          <div>
            <div className="flex flex-col items-start w-full box-border p-6">
              <Link href="/">
                <a className="text-sm font-medium text-gray-700 hover:text-secondary-main mb-3">
                  Ver perfil
                </a>
              </Link>
              <Link href="/">
                <a className="text-sm font-medium text-gray-700 hover:text-secondary-main mb-3">
                  Configuracion
                </a>
              </Link>
              <Link href="/">
                <a className="text-sm font-medium text-gray-700 hover:text-secondary-main mb-3">
                  Mentores
                </a>
              </Link>
              <BtnSignout />
              <div className="border-t border-gray-200 w-full box-border px-4" />
              <button className="bg-green-400 hover:bg-green-300 self-center my-3 rounded-md py-2 px-5 font-bold text-sm">
                Vuélvete Premium
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Avatar;
