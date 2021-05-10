import Categories from './components/Categories';
import FilterBy from './components/FilterBy';

const SearchOptions = () => {
  return (
    <div className="w-full min-h-13 h-13 box-border border border-gray-300 flex justify-between text-gray-900">
      <Categories />
      <FilterBy />
    </div>
  );
};

export default SearchOptions;
