import CartIcon from '@Components/Icons/CartIcon';

const AddToCar = () => {
  return (
    <button className="box-border p-3 mr-4 rounded-md border-2 border-primary-main focus:outline-none transform hover:-translate-y-1 transition-all duration-200 ease-out">
      <CartIcon className="text-primary-main" />
    </button>
  );
};

export default AddToCar;
