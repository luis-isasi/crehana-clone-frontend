import { useState } from 'react';

import ExpandMoreIcon from '@Components/Icons/ExpandMoreIcon';

interface Props {
  category: string;
  subCategories: string[];
}

const FilterOption: React.FC<Props> = ({ category, subCategories }) => {
  const [isSubCategories, setIsSubCategories] = useState<boolean>(false);

  const renderSubCategories = (subCategories: string[]) => {
    return subCategories.map((subCategory, index) => (
      <button
        key={`${subCategory}-${index}`}
        className="text-left text-sm w-full box-border px-4 py-1 mb-1 hover:bg-blue-100 hover:text-primary-light transition-all duration-200"
      >
        {subCategory}
      </button>
    ));
  };

  const showSubCategories = () => {
    setIsSubCategories(!isSubCategories);
  };

  return (
    <div
      onClick={showSubCategories}
      className="h-auto w-full font-bold text-gray-600 text-sm text-left box-border px-4 py-2 my-3 hover:cursor-pointer"
    >
      <div className="w-full flex justify-between items-center">
        <h6>{category}</h6>
        <ExpandMoreIcon
          className={`transform ${
            isSubCategories ? '-rotate-90' : 'rotate-90'
          } text-gray-900`}
        />
      </div>
      {isSubCategories && (
        <div className="flex flex-col my-2  max-h-72 overflow-y-auto scrool-none scroolbar ">
          {renderSubCategories(subCategories)}
        </div>
      )}
    </div>
  );
};

export default FilterOption;
