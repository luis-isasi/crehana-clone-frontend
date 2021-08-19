import { useState } from 'react';

import Link from '@Components/Links/Link';

import ExpandMoreIcon from '@Components/Icons/ExpandMoreIcon';
import { SubCategory } from '@Types';

interface Props {
  categorySlug: string;
  categoryName: string;
  subCategories: SubCategory[];
}

const CategoryOption: React.FC<Props> = ({
  categoryName,
  categorySlug,
  subCategories,
}) => {
  const [isSubCategories, setIsSubCategories] = useState<boolean>(false);

  const renderSubCategories = (subCategories: SubCategory[]) => {
    return subCategories.map(({ name, slug: subCategorySLug }, index) => (
      <Link
        key={`${name}-${index}`}
        href={`/courses-online/${categorySlug}/${subCategorySLug}`}
        className="text-left text-sm font-normal w-full box-border px-4 py-1 mb-1 hover:bg-blue-100 hover:text-primary-light transition-all duration-200"
      >
        {name}
      </Link>
    ));
  };

  const showSubCategories = () => {
    setIsSubCategories(!isSubCategories);
  };

  return (
    <div
      onClick={showSubCategories}
      className="h-auto w-full font-bold text-gray-600 text-sm text-left box-border px-4 py-3 my-1 hover:cursor-pointer"
    >
      <div className="w-full flex justify-between items-center">
        <h6>{categoryName}</h6>
        <ExpandMoreIcon
          className={`transform ${
            isSubCategories ? '-rotate-90' : 'rotate-90'
          } text-gray-900`}
        />
      </div>
      {isSubCategories && (
        <div className="flex flex-col my-2  max-h-72 overflow-y-auto scrool-none scroolbar">
          <Link
            href={`/courses-online/${categorySlug}`}
            className="text-left text-sm font-normal w-full box-border px-4 py-1 mb-1 hover:bg-blue-100 hover:text-primary-light transition-all duration-200"
          >
            Todos los cursos
          </Link>
          {renderSubCategories(subCategories)}
        </div>
      )}
    </div>
  );
};

export default CategoryOption;
