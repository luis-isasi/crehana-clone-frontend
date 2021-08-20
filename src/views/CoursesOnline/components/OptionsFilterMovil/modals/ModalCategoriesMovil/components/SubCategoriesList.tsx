import ArrowIcon from '@Components/Icons/ArrowIcon';
import Link from '@Components/Links/Link';
import ModalBase from '@Modals/ModalBase';

import { SubCategory } from '@Types';

interface Props {
  categoryName: string;
  categorySlug: string;
  subCategories: SubCategory[];
  closeModalSubCategories: () => void;
  closeModalCategories: () => void;
}

const SubCategoriesList: React.FC<Props> = ({
  categoryName,
  categorySlug,
  subCategories,
  closeModalSubCategories,
  closeModalCategories,
}) => {
  const renderSubCategories = () => {
    return subCategories.map(({ name, slug: subCategorySlug }, i) => {
      return (
        <Link
          key={`${name}-${i}`}
          href={`/courses-online/${categorySlug}/${subCategorySlug}`}
          onClick={closeModalCategories}
          className="pl-1 w-full h-14 border-b-1 border-gray-200 text-left font-light flex items-center"
        >
          <h5>{name}</h5>
        </Link>
      );
    });
  };

  return (
    <ModalBase className="bg-white">
      <button
        onClick={closeModalSubCategories}
        className="w-full h-14 flex items-center justify-between border-b-1 border-gray-200  font-bold text-base focus:outline-none"
      >
        <ArrowIcon className="ml-4 mr-2 text text-secondary-light" />
        {categoryName}
        <div className="w-10" />
      </button>
      <div className="mx-7 flex flex-col justify-center">
        <Link
          href={`/courses-online/${categorySlug}`}
          onClick={closeModalCategories}
          className="pl-1 w-full h-14 border-b-1 border-gray-200 text-left font-light flex items-center"
        >
          Todos los cursos
        </Link>
        {renderSubCategories()}
      </div>
    </ModalBase>
  );
};

export default SubCategoriesList;
