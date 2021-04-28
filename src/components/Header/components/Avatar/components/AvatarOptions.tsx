import { useRef, useEffect } from 'react';
import Link from '@Components/Link';

import BtnSignout from './BtnSignout';

interface Props {
  isOpen: boolean;
  setIsOpenCard: (isOpen: boolean) => void;
}

const AvatarCard: React.FC<Props> = ({ isOpen, setIsOpenCard }) => {
  const cardRef = useRef<HTMLDivElement>();

  const rootClassName = isOpen ? 'opacity-1' : 'opacity-0 pointer-events-none';

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!cardRef.current.contains(e.target)) {
        setIsOpenCard(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      ref={cardRef}
      className={`bg-white ${rootClassName} transition-all duration-100 ease-linear h-58 w-56 absolute rounded-md z-50 lg:-bottom-62 lg:-left-42 xl:-bottom-62 xl:-left-40`}
    >
      <div
        style={{
          borderLeft: '12px solid transparent',
          borderRight: '12px solid transparent',
        }}
        className="bg-transparent h-0 w-0 border-0 border-b-12 border-white  relative -top-3 left-46"
      ></div>
      <div>
        <div className="flex flex-col items-start w-full box-border p-6">
          <Link
            text="Ver perfil"
            href="/"
            className="text-sm font-medium text-gray-700 hover:text-secondary-main mb-3"
          />
          <Link
            text="Configuración"
            href="/"
            className="text-sm font-medium text-gray-700 hover:text-secondary-main mb-3"
          />
          <Link
            text="Mentores"
            href="/"
            className="text-sm font-medium text-gray-700 hover:text-secondary-main mb-3"
          />
          <BtnSignout />
          <div className="border-t border-gray-200 w-full box-border px-4" />
          <button className="bg-green-400 hover:bg-green-300 self-center my-3 rounded-md py-2 px-5 font-bold text-sm">
            Vuélvete Premium
          </button>
        </div>
      </div>
    </div>
  );
};

export default AvatarCard;
