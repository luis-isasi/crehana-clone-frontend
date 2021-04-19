import SearchIcon from '@material-ui/icons/Search';

const Search: React.FC = () => {
  return (
    <button className="flex-grow flex justify-start p-1 sm:p-1 md:p-1 lg:p-2 w-auto lg:w-22 xl:w-auto xl:p-3  mx-0 sm:mx-0 md:mx-0 lg:mx-3 xl:mx-5 focus:outline-none">
      <SearchIcon style={{ fontSize: '22px' }} />
    </button>
  );
};

export default Search;
