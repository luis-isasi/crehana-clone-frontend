import { useState } from 'react';
import { useQuery } from 'react-query';

import CategoriesList from './components/CategoriesList';
import SoftwareList from './components/SoftwareList';
import SpecializationList from './components/SpecializationList';
import SubCategoriesList from './components/SubCategoriesList';
import { getCategories } from '@Services';

const CategoriesModal = () => {
  const [selectedSubCategories, setSelectedSubCategories] = useState();
  const { data, isLoading } = useQuery('categories', () => getCategories());

  console.log({ data });

  const hoveSetSubCategories = () => {
    console.log('HOVER EN CATEGORIA');

    // setSelectedSubCategories()
  };

  return (
    <section className="bg-base-light-dark-mode absolute -bottom-13 rounded-md p-3 shadow-md flex justify-center items-center">
      <div
        style={{
          borderLeft: '12px solid transparent',
          borderRight: '12px solid transparent',
        }}
        className="border-0 border-b-12 border-base-light-dark-mode relative -top-4 left-6"
      />
      <CategoriesList
        categories={data}
        hoverSetSubCategories={hoveSetSubCategories}
      />
      <div className="flex">
        <SubCategoriesList />
        <SoftwareList />
        <SpecializationList />
      </div>
    </section>
  );
};

export default CategoriesModal;
