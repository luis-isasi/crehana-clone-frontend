import { memo } from 'react';

import FilterOption from '../FilterOption';

const OptionsFilterDesktop = () => {
  const renderCategories = () => {
    return Categorias.map(({ category, subCategories }, index) => (
      <FilterOption
        key={`${subCategories}-${index}`}
        category={category}
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
        <div className="bg-gray-100 w-full h-auto">{renderCategories()}</div>
      </div>
    </div>
  );
};

export default memo(OptionsFilterDesktop);

const Categorias = [
  {
    category: 'Marketing Digital',
    subCategories: [
      'Email Marketing',
      'Fundamentos de Marketing',
      'SEO y SEM',
      'Redes sociales',
      'Analytics',
      'Creatividad publicitaria',
      'Email Marketing',
      'Fundamentos de Marketing',
      'SEO y SEM',
      'Redes sociales',
      'Analytics',
      'Creatividad publicitaria',
    ],
  },
  {
    category: 'Ilustración Digital',
    subCategories: [
      'Ilustración Digital',
      'Ilustración Digital',
      'Ilustración Digital',
      'Ilustración Digital',
      'Ilustración Digital',
      'Ilustración Digital',
      'Ilustración Digital',
      'Ilustración Digital',
      'Ilustración Digital',
      'Ilustración Digital',
      'Ilustración Digital',
      'Ilustración Digital',
    ],
  },
  {
    category: 'Negocios',
    subCategories: [
      'Negocios',
      'Negocios',
      'Negocios',
      'Negocios',
      'Negocios',
      'Negocios',
    ],
  },
  {
    category: 'Liderazgo',
    subCategories: [
      'Liderazgo',
      'Liderazgo',
      'Liderazgo',
      'Liderazgo',
      'Liderazgo',
      'Liderazgo',
    ],
  },
  {
    category: 'Data y analítica',
    subCategories: [
      'Data y analítica',
      'Data y analítica',
      'Data y analítica',
      'Data y analítica',
      'Data y analítica',
      'Data y analítica',
    ],
  },
];
