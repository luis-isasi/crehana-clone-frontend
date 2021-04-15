import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Categories: React.FC = () => {
  return (
    <button className="px-8 leading-none ml-5 font-semibold">
      Categorias <ExpandMoreIcon />
    </button>
  );
};

export default Categories;
