import BtnPrimary from '@Components/buttons/BtnPrimaryBorder';

const BtnBuyCourse: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <BtnPrimary
      onClick={onClick}
      className="py-3 w-full  rounded-md transform hover:-translate-y-1 transition-all duration-200 ease-out"
    >
      Comprar ahora
    </BtnPrimary>
  );
};

export default BtnBuyCourse;
