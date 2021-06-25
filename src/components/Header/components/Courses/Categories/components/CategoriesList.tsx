import { Categorie } from '@Types';
import Link from '@Components/Links/Link';

interface Props {
  categories: Categorie[];
  hoverSetSubCategories?: () => void;
}

const CategoriesList: React.FC<Props> = ({ categories }) => {
  const renderCategories = () => {
    return categories.map(({ name, url }) => {
      return (
        <Link href={url}>
          <div className="bg-base-lighter-dark-mode min-w-58 rounded-md py-2 px-1 border-l-4 border-transparent hover:border-secondary-light mb-2 group transition-all ease-in-out duration-500 flex">
            <div className="w-10 h-10 bg-base-main-80 mr-4"></div>
            <div className="flex flex-col ">
              <span className="text-sm font-medium group-hover:text-secondary-light transition-all ease-in-out duration-500">
                {name}
              </span>
              <span className="text-xs font-light text-secondary-lighter group-hover:text-secondary-light transition-all ease-in-out duration-500">
                85 cursos
              </span>
            </div>
          </div>
        </Link>
      );
    });
  };

  return (
    <div className="p-5 max-h-98 overflow-hidden ">
      <h4 className="text-2xl text-white font-extrabold mb-6">Categorías</h4>
      <div className="h-auto max-h-84 overflow-y-auto scrool-none scroolbar pr-4">
        {renderCategories()}
      </div>
    </div>
  );
};

export default CategoriesList;
