import SettingsIcon from '@Components/Icons/SettingsIcon';

const Categories = () => {
  return (
    <button className="flex-grow h-full min-w-1/2 flex justify-center items-center font-semibold box-border border-r-1 border-gray-300 focus:outline-none">
      <SettingsIcon className="mr-2 text-primary-main" />
      Tus filtros
    </button>
  );
};

export default Categories;
