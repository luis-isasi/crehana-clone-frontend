import Link from '@Components/Links/Link';
import { SubCategorie } from '@Types';

interface Props {
  subCategories: SubCategorie[];
}

const SubCategoriesList: React.FC<Props> = ({ subCategories }) => {
  const renderSubCategories = () => {
    return subCategories.map(({ id, name, url }) => (
      <li key={`${id}-${name}`} className="mb-2">
        <Link
          href={`${url}`}
          className="text-gray-light text-sm font-normal hover:text-secondary-light transition-hover-text"
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
        //TODO put the correct href
        href="/courses"
        className="text-xs font-bold bg-primary-lighter p-1 rounded-sm "
      >
        Ver todos
      </Link>
    </div>
  );
};

export default SubCategoriesList;
