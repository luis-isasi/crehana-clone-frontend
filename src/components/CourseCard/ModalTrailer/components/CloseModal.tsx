import CloseIcon from '@Components/Icons/CloseIcon';

const CloseModal: React.FC<{ handleOpenModal: () => void }> = ({
  handleOpenModal,
}) => {
  return (
    <div className="text-white flex items-center">
      <button onClick={handleOpenModal} className="flex">
        <span>Cerrar</span>
        <CloseIcon className="text-white h-6 w-6" />
      </button>
    </div>
  );
};

export default CloseModal;
