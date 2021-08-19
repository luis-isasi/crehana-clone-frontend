import { memo } from 'react';
import { useQuery } from 'react-query';

import CategoryOption from './components/CategoryOption';
import { getCategories } from '@Services/coursesOnline';
import { Category } from '@Types';

interface Props {
  selectedCategorySlug: string | undefined;
  selectedSubCategorySlug: string | undefined;
}

const OptionsFilterDesktop: React.FC<Props> = ({
  selectedCategorySlug,
  selectedSubCategorySlug,
}) => {
  const { data: categories, isLoading } = useQuery('categories', () =>
    getCategories()
  );

  const renderCategories = (categories: Category[]) => {
    return categories.map(({ name, slug, subCategories }, index) => (
      <CategoryOption
        key={`${subCategories}-${index}`}
        categorySlug={slug}
        categoryName={name}
        selectedCategorySlug={selectedCategorySlug}
        selectedSubCategorySlug={selectedSubCategorySlug}
        subCategories={subCategories}
      />
    ));
  };

  return (
    <div className="h-full w-60 mr-8">
      <button className="text-secondary-main text-xs font-extrabold">
        Mostrar todos los cursos online
      </button>
      <div className="w-full h-auto">
        <p className="text-xs font-bold text-gray-600 my-3">Categorías</p>
        <div className="bg-gray-100 w-full h-auto">
          {isLoading && <p>CARGANDO...</p>}
          {categories && !isLoading && renderCategories(categories)}
        </div>
      </div>
    </div>
  );
};

export default memo(OptionsFilterDesktop);
