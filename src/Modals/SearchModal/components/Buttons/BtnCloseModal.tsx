import CloseIcon from 'src/components/Icons/CloseIcon';

interface Props {
  handleBtn: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const BtnCloseModal: React.FC<Props> = ({ handleBtn }) => {
  return (
    <button
      className="w-8 h-8 text-gray-500 text-8xl absolute top-7 right-14 outline-none focus:outline-none"
      onClick={handleBtn}
    >
      <CloseIcon className="w-10 lg:w-10 xl:w-12 h-10 lg:h-10 xl:h-12 " />
    </button>
  );
};

export default BtnCloseModal;
