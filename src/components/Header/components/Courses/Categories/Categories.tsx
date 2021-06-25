import { useState } from 'react';

import { useQuery } from 'react-query';

import CategoriesList from './components/CategoriesList';
import SoftwareList from './components/SoftwareList';
import SpecializationList from './components/SpecializationList';
import SubCategoriesList from './components/SubCategoriesList';
import { getCategories } from '@Services';

const Categories = () => {
  const [selectedSubCategorie, setSelectedSubCategorie] = useState();
  const { data, isLoading } = useQuery('categories', () => getCategories());

  console.log({ data });

  const hoveSetSubCategories = () => {
    console.log('HOVER EN CATEGORIA');

    // setSelectedSubCategories()
  };

  return (
    <section className="bg-base-light-dark-mode w-86 h-56 z-50 rounded-md absolute p-3 top-17 flex justify-center items-center">
      <div
        style={{
          borderLeft: '12px solid transparent',
          borderRight: '12px solid transparent',
        }}
        className="border-0 border-b-14 border-base-light-dark-mode absolute -top-3 left-6"
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

export default Categories;
