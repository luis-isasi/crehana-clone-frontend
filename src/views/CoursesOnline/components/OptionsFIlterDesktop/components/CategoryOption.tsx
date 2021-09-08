import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Link from '@Components/Links/Link';

import ExpandMoreIcon from '@Components/Icons/ExpandMoreIcon';
import { SubCategory } from '@Types/course';

interface Props {
  categorySlug: string;
  categoryName: string;
  subCategories: SubCategory[];
  selectedCategorySlug: string | undefined;
  selectedSubCategorySlug: string | undefined;
}

const CategoryOption: React.FC<Props> = ({
  categoryName,
  categorySlug,
  subCategories,
  selectedCategorySlug,
  selectedSubCategorySlug,
}) => {
  const [isSubCategories, setIsSubCategories] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    categorySlug === selectedCategorySlug
      ? setIsSubCategories(true)
      : setIsSubCategories(false);
  }, [selectedCategorySlug]);

  const renderSubCategories = (subCategories: SubCategory[]) => {
    return subCategories.map(({ name, slug: subCategorySLug }, index) => (
      <Link
        key={`${name}-${index}`}
        href={`/courses-online/${categorySlug}/${subCategorySLug}`}
        className={`${
          subCategorySLug === selectedSubCategorySlug
            ? 'bg-primary-main text-white'
            : 'hover:bg-blue-100 hover:text-primary-light transition-all duration-200'
        } text-left text-sm font-normal w-full box-border px-4 py-1 mb-1`}
      >
        {name}
      </Link>
    ));
  };

  const showSubCategories = () => {
    isSubCategories
      ? router.push(`/courses-online`)
      : router.push(`/courses-online/${categorySlug}`);

    setIsSubCategories(false);
  };

  return (
    <div className="h-auto w-full font-bold text-gray-600 text-sm text-left box-border px-4 py-3 my-1 hover:cursor-pointer">
      <div
        onClick={showSubCategories}
        className="w-full flex justify-between items-center"
      >
        <h6>{categoryName}</h6>
        <ExpandMoreIcon
          className={`transform ${
            isSubCategories ? '-rotate-90' : 'rotate-90'
          } text-gray-900`}
        />
      </div>
      {isSubCategories && (
        <div className="flex flex-col mt-2 max-h-72 overflow-y-auto scrool-none scroolbar">
          <Link
            href={`/courses-online/${categorySlug}`}
            className={`${
              selectedCategorySlug === categorySlug && !selectedSubCategorySlug
                ? 'bg-primary-main text-white'
                : 'hover:bg-blue-100 hover:text-primary-light transition-all duration-200'
            } text-left text-sm font-normal w-full box-border px-4 py-1 mb-1`}
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
