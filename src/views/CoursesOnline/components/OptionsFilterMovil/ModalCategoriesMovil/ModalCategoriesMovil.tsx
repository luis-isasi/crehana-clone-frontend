import * as React from 'react';

import ModalBase from '@Modals/ModalBase';
import ArrowIcon from '@Components/Icons/ArrowIcon';
import CategoryMovil from './CategoryMovil';
import { Category } from '@Types/course';

interface Props {
  closeModal: () => void;
  categories: Category[];
}
const ModalCategoriesMovil: React.FC<Props> = ({ closeModal, categories }) => {
  const renderCategories = () => {
    return categories.map(({ name, subCategories, slug }, i) => {
      return (
        <CategoryMovil
          key={`${name}-${i}`}
          categorySlug={slug}
          categoryName={name}
          subCategories={subCategories}
          closeModalCategories={closeModal}
        />
      );
    });
  };

  return (
    <ModalBase className="bg-white animate-fade-in-fast">
      <button
        onClick={closeModal}
        className="w-full h-14 flex items-center border-b-1 border-gray-200 text-secondary-light font-bold text-base focus:outline-none"
      >
        <ArrowIcon className="ml-4 mr-2" />
        Regresar
      </button>
      <div className="w-full h-full max-h-full overflow-y-auto">
        <div className="max-h mx-7 flex flex-col justify-center">
          {renderCategories()}
        </div>
      </div>
    </ModalBase>
  );
};

export default ModalCategoriesMovil;
