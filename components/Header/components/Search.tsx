import SearchIcon from '@material-ui/icons/Search';

const Search: React.FC = () => {
  return (
    <button className="flex-grow flex p-3 lg:p-2  w-auto lg:w-22 xl:w-auto xl:p-3  mx-5 lg:mx-3 xl:mx-5 focus:outline-none">
      <SearchIcon />
    </button>
  );
};

export default Search;
