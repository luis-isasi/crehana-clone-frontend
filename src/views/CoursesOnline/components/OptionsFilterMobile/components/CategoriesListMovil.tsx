import * as React from 'react';

import SettingsIcon from '@Components/Icons/SettingsIcon';
import { Category } from '@Types/course';

import ModalCategoriesMovil from '../ModalCategoriesMobile';

interface Props {
  categories: Category[];
}

const CategoriesListMovil: React.FC<Props> = ({ categories }) => {
  const [isOpenModal, setIsOpenModal] = React.useState<boolean>(false);

  const handleOpenModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <>
      <button
        onClick={handleOpenModal}
        className="flex-grow h-full min-w-1/2 flex justify-center items-center font-semibold box-border border-r-1 border-gray-300 focus:outline-none"
      >
        <SettingsIcon className="mr-2 text-primary-main" />
        Tus filtros
      </button>
      {isOpenModal && (
        <ModalCategoriesMovil
          closeModal={handleOpenModal}
          categories={categories}
        />
      )}
    </>
  );
};

export default CategoriesListMovil;
