import React, { useState, useRef, useEffect, MutableRefObject } from 'react';

import { useQuery } from 'react-query';

import Link from '@Components/Links/Link';
import CategoriesList from './components/CategoriesList';
import SubCategoriesList from './components/SubCategoriesList';
import Error from './components/Error';
import PHHeaderCategories from '@Placeholders/PHHeaderCategories';
import category from '@Services/categories';
import { Category } from '@Types';

interface Props {
  refBtn: MutableRefObject<HTMLButtonElement>;
  isOpen: boolean;
  closeCategories: () => void;
}

const Categories: React.FC<Props> = ({ refBtn, isOpen, closeCategories }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>();

  const { data, isLoading, isError } = useQuery('categories', () =>
    category.getAll()
  );

  const refDiv = useRef<HTMLDivElement>();

  useEffect(() => {
    const handleClickOutSide = (e) => {
      if (refDiv.current && !refDiv.current?.contains(e.target))
        closeCategories();
    };

    if (isOpen) document.addEventListener('click', handleClickOutSide);

    return () => {
      document.removeEventListener('click', handleClickOutSide);
    };
  }, [isOpen]);

  const hoverSetSubCategories = (category: Category) => {
    setSelectedCategory(category);
  };

  return (
    <div
      ref={refDiv}
      className="bg-white dark:bg-base-light-dark-mode z-15 h-auto w-auto rounded-md absolute top-17 shadow-xl"
    >
      <div className="min-w-3xl w-3x1 min-h-98 h-98 flex">
        <div
          style={{
            borderLeft: '12px solid transparent',
            borderRight: '12px solid transparent',
          }}
          className="border-0 border-b-14  border-white dark:border-base-light-dark-mode absolute -top-3 left-6"
        />

        {isLoading && <PHHeaderCategories />}
        {data?.error && <Error />}
        {data && !isLoading && !isError && (
          <>
            <CategoriesList
              categories={data}
              setSelectedCategory={hoverSetSubCategories}
            />
            {selectedCategory && (
              <div className="min-w-102 w-auto min-h-98 h-full box-border py-5 px-6 flex flex-col justify-between">
                <div>
                  <SubCategoriesList
                    selectedCategorySlug={selectedCategory.slug}
                    subCategories={selectedCategory.subCategories}
                  />
                </div>
                <div className="w-full flex justify-center">
                  <p className="font-medium text-center">
                    Obtén acceso ilimitado a todas estas categorías con Premium
                    <Link
                      href={'/premium'}
                      className="text-primary-main dark:text-secondary-main"
                    >
                      {' '}
                      aqui
                    </Link>
                  </p>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Categories;
