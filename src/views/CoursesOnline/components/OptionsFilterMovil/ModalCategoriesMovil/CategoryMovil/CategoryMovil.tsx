import * as React from 'react';

import ExpandMoreIcon from '@Components/Icons/ExpandMoreIcon';
import SubCategoriesList from './components/SubCategoriesList';

import { SubCategory } from '@Types';

interface Props {
  categorySlug: string;
  categoryName: string;
  subCategories: SubCategory[];
  closeModalCategories: () => void;
}

const CategoryMovil: React.FC<Props> = ({
  categoryName,
  subCategories,
  categorySlug,
  closeModalCategories,
}) => {
  const [isOpenSubCategories, setIsOpenSubCategories] = React.useState<boolean>(
    false
  );

  const handlerShowSubCategories = () => {
    setIsOpenSubCategories(!isOpenSubCategories);
  };

  return (
    <>
      <button
        onClick={handlerShowSubCategories}
        className="pl-1 w-full h-14 border-b-1 focus:outline-none border-gray-200 text-left font-light flex justify-between items-center"
      >
        <h4>{categoryName}</h4>
        <ExpandMoreIcon className="text-secondary-light" />
      </button>
      <div>
        {isOpenSubCategories && (
          <SubCategoriesList
            categoryName={categoryName}
            categorySlug={categorySlug}
            closeModalSubCategories={handlerShowSubCategories}
            closeModalCategories={closeModalCategories}
            subCategories={subCategories}
          />
        )}
      </div>
    </>
  );
};

export default CategoryMovil;
