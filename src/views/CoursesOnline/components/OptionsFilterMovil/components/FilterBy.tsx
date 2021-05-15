import ExpandMoreIcon from '@Components/Icons/ExpandMoreIcon';

const FilterBy = () => {
  return (
    <button className="flex-grow min-w-1/2 h-full box-border p-4 font-bold flex items-center justify-between focus:outline-none">
      <span className="flex-grow">Recomendados</span>
      <ExpandMoreIcon className="transform rotate-90 text-primary-main" />
    </button>
  );
};

export default FilterBy;
