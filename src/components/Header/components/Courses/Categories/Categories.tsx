import React, { useState, useRef, useEffect, MouseEvent } from 'react';

import { useQuery } from 'react-query';

import CategoriesList from './components/CategoriesList';
import SoftwareList from './components/SoftwareList';
import SpecializationList from './components/SpecializationList';
import SubCategoriesList from './components/SubCategoriesList';
import { getCategories } from '@Services';
import { SubCategorie } from '@Types';

interface Props {
  isOpen: boolean;
  closeCategories: () => void;
}

const Categories: React.FC<Props> = ({ isOpen, closeCategories }) => {
  const [selectedSubCategories, setSelectedSubCategories] = useState<
    SubCategorie[]
  >();
  const { data, isLoading } = useQuery('categories', () => getCategories());

  const refDiv = useRef<HTMLDivElement>();

  useEffect(() => {
    const handleClickOutSide = (e) => {
      if (!refDiv.current.contains(e.target)) {
        closeCategories();
      }
    };

    document.addEventListener('click', handleClickOutSide);

    return () => {
      document.removeEventListener('click', handleClickOutSide);
    };
  }, [isOpen]);

  const hoverSetSubCategories = (subCategories: SubCategorie[]) => {
    setSelectedSubCategories(subCategories);
  };

  if (isLoading) {
    return <p className="text-white">Cargando ...</p>;
  }

  return (
    <div
      ref={refDiv}
      className="bg-base-light-dark-mode w-auto min-h-98 z-50 rounded-md absolute top-17 flex shadow-xl"
    >
      <div
        style={{
          borderLeft: '12px solid transparent',
          borderRight: '12px solid transparent',
        }}
        className="border-0 border-b-14 border-base-light-dark-mode absolute -top-3 left-6"
      />
      <CategoriesList
        categories={data}
        setSubCategories={hoverSetSubCategories}
      />
      {selectedSubCategories && (
        <div className="flex w-auto min-h-98 h-full box-border py-5 px-6">
          <SubCategoriesList subCategories={selectedSubCategories} />
          <SoftwareList />
          <SpecializationList />
        </div>
      )}
    </div>
  );
};

export default Categories;
