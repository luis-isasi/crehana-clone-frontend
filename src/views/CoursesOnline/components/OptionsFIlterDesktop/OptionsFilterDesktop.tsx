import { memo } from 'react';

import CategoryOption from './components/CategoryOption';
import { Category } from '@Types/course';

interface Props {
  categories: Category[];
  selectedCategorySlug: string | undefined;
  selectedSubCategorySlug: string | undefined;
}

const OptionsFilterDesktop: React.FC<Props> = ({
  categories,
  selectedCategorySlug,
  selectedSubCategorySlug,
}) => {
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
    <div className="h-full min-w-60 w-60 mr-8">
      {/* TODO:mostrar todos los cursos */}
      <button className="text-secondary-main text-xs font-extrabold">
        Mostrar todos los cursos online
      </button>
      <div className="w-full h-auto">
        <p className="text-xs font-bold text-gray-600 my-3">Categorías</p>
        {categories && (
          <div className="bg-gray-100 w-full h-auto py-1">
            {renderCategories(categories)}
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(OptionsFilterDesktop);
