import { useEffect } from 'react';

import { Category } from '@Types';
import Link from '@Components/Links/Link';

interface Props {
  categories: Category[];
  setSelectedCategory?: (Category: Category) => void;
}

const CategoriesList: React.FC<Props> = ({
  categories,
  setSelectedCategory,
}) => {
  useEffect(() => {
    setSelectedCategory(categories[0]);
  }, []);

  const renderCategories = () => {
    return categories.map((category) => (
      <li key={`${category.id}-${category.name}`}>
        <Link href={`/courses-online/${category.slug}`}>
          <div
            onMouseEnter={() => {
              setSelectedCategory(category);
            }}
            className="bg-gray-200 dark:bg-base-lighter-dark-mode min-w-58 rounded-md py-2 px-1 border-l-4 border-transparent hover:border-primary-light dark:hover:border-secondary-light mb-2 group transition-all ease-in-out duration-500 flex"
          >
            <div className="w-10 h-10 bg-gray-400 dark:bg-base-main-80 mr-4"></div>
            <div className="flex flex-col ">
              <span className="text-sm font-medium group-hover:text-primary-main dark:group-hover:text-secondary-light transition-all ease-in-out duration-500">
                {category.name}
              </span>
              <span className="text-xs font-light text-gray-600 group-hover:text-primary-main dark:text-secondary-lighter dark:group-hover:text-secondary-light transition-all ease-in-out duration-500">
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
      <h4 className="text-2xl text-gray-700 dark:text-white font-extrabold mb-6">
        Categorías
      </h4>
      <ul className="h-auto max-h-84 overflow-y-auto scrool-none scroolbar pr-4">
        {renderCategories()}
      </ul>
    </div>
  );
};

export default CategoriesList;
