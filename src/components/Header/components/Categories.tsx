import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Categories: React.FC = () => {
  return (
    <button className="px-8 lg:px-6 xl:px-8 leading-none ml-5 lg:ml-4 xl:ml-5 text-sm font-semibold hover:opacity-80 outline-none focus:outline-none">
      Categorias <ExpandMoreIcon />
    </button>
  );
};

export default Categories;
