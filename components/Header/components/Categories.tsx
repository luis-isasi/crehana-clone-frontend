import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Categories: React.FC = () => {
  return (
    <button className="px-8 leading-none ml-5 text-sm font-semibold hover:opacity-80">
      Categorias <ExpandMoreIcon />
    </button>
  );
};

export default Categories;
