interface Props {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

const BtnPrimary: React.FC<Props> = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={` ${className} bg-primary-main min-w-max lg:bg-purple-600 text-white rounded-md py-3  px-7 lg:px-9 font-extrabold  hover:bg-primary-light lg:hover:bg-purple-500`}
    >
      {children}
    </button>
  );
};

export default BtnPrimary;
