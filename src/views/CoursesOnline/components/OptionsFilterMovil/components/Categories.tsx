import * as React from 'react';

import SettingsIcon from '@Components/Icons/SettingsIcon';
import ModalCategoriesMovil from './modals/ModalCategoriesMovil';

const Categories = () => {
  const [isOpenModal, setIsOpenModal] = React.useState<boolean>(false);

  const handleClick = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="flex-grow h-full min-w-1/2 flex justify-center items-center font-semibold box-border border-r-1 border-gray-300 focus:outline-none"
      >
        <SettingsIcon className="mr-2 text-primary-main" />
        Tus filtros
      </button>
      {isOpenModal && <ModalCategoriesMovil />}
    </>
  );
};

export default Categories;
