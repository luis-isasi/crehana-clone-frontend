import { memo } from 'react';

import Categories from './components/Categories';
import FilterBy from './components/FilterBy';
import { Category } from '@Types';

interface Props {
  categories: Category[];
}

const SearchOptions: React.FC<Props> = ({ categories }) => {
  return (
    <div className="w-full sticky top-0 bg-white z-10 box-border md:px-7 md:py-4">
      <div className="w-full max-w-6xl mx-auto min-h-13 h-13 box-border border border-gray-300 flex justify-between text-gray-900">
        <Categories />
        <FilterBy />
      </div>
    </div>
  );
};

export default memo(SearchOptions);
