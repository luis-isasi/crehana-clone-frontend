import { useEffect } from 'react';

import { Categorie, SubCategorie } from '@Types';
import Link from '@Components/Links/Link';

interface Props {
  categories: Categorie[];
  setSubCategories?: (subCategories: SubCategorie[]) => void;
}

const CategoriesList: React.FC<Props> = ({ categories, setSubCategories }) => {
  useEffect(() => {
    setSubCategories(categories[0].subCategories);
  }, []);

  const renderCategories = () => {
    return categories.map(({ id, name, url, subCategories }) => (
      <li key={`${id}-${name}`}>
        <Link href={url}>
          <div
            onMouseEnter={() => {
              setSubCategories(subCategories);
            }}
            className="bg-base-lighter-dark-mode min-w-58 rounded-md py-2 px-1 border-l-4 border-transparent hover:border-secondary-light mb-2 group transition-all ease-in-out duration-500 flex"
          >
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
      </li>
    ));
  };

  return (
    <div className="p-5 max-h-98 min-w-76 overflow-hidden ">
      <h4 className="text-2xl text-white font-extrabold mb-6">Categorías</h4>
      <ul className="h-auto max-h-84 overflow-y-auto scrool-none scroolbar pr-4">
        {renderCategories()}
      </ul>
    </div>
  );
};

export default CategoriesList;
