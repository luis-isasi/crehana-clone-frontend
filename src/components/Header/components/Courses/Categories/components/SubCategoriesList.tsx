import Link from '@Components/Links/Link';
import { SubCategory } from '@Types/course';
import ArrowIcon from '@Components/Icons/ArrowIcon';

interface Props {
  selectedCategorySlug: string;
  subCategories: SubCategory[];
}

const SubCategoriesList: React.FC<Props> = ({
  selectedCategorySlug,
  subCategories,
}) => {
  const renderSubCategories = () => {
    return subCategories.map(({ id, name, slug }) => (
      <li key={`${id}-${name}`} className="mb-2">
        <Link
          href={`/courses-online/${selectedCategorySlug}/${slug}`}
          className="text-gray-800 dark:text-gray-light text-sm font-normal hover:text-primary-main dark:hover:text-secondary-light transition-hover-text"
        >
          {name}
        </Link>
      </li>
    ));
  };

  return (
    <div className="min-w-42 w-auto h-auto mr-7">
      <h5 className="text-lg mb-5">Subcategoría</h5>
      <ul className="mb-5">{renderSubCategories()}</ul>
      <Link
        href={`/courses-online/${selectedCategorySlug}`}
        className="w-24 text-white text-xs font-bold  bg-primary-main dark:bg-primary-lighter py-1 px-2 rounded-md flex items-center justify-between"
      >
        <ArrowIcon className="transform rotate-180" />
        Ver todos
      </Link>
    </div>
  );
};

export default SubCategoriesList;
