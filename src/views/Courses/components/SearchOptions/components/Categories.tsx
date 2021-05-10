import SettingsIcon from '@Components/Icons/SettingsIcon';

const Categories = () => {
  return (
    <button className="flex-grow h-full flex justify-center items-center font-bold box-border border-r-1 border-gray-300">
      <SettingsIcon className="mr-2" />
      Tus filtros
    </button>
  );
};

export default Categories;
