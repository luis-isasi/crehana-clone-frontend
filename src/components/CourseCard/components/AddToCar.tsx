import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const AddToCar = () => {
  return (
    <button className="self-start ml-3 transition duration-300 ease-in-out transform hover:scale-125 outline-none focus:outline-none">
      <FavoriteBorderIcon className="fill-current text-secondary-main" />
    </button>
  );
};

export default AddToCar;
