import SearchIcon from '@material-ui/icons/Search';

const Search: React.FC = () => {
  return (
    <button className="flex-grow flex p-3  lg:p-2 xl-p-3  mx-5 lg:mx-2 xl:mx-5 focus:outline-none">
      <SearchIcon />
    </button>
  );
};

export default Search;
