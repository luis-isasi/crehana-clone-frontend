import LogoCrehana from '@Components/Icons/LogoCrehana';
import Arrow from '@Components/Icons/Arrow';
import BtnCloseModal from '../Buttons/BtnCloseModal';
import Search from '../Search';
import useResponsive from '@Hooks/useResponsive';
import { MEDIAQUERY_LG } from 'Contants';

interface Props {
  handleBtn: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const HeaderModal: React.FC<Props> = ({ handleBtn }) => {
  const [isMovilAndTablet] = useResponsive({
    type: 'max',
    mediaquery: MEDIAQUERY_LG,
  });

  if (isMovilAndTablet === undefined) return null;

  if (isMovilAndTablet) {
    return (
      <div className="bg-transparent box-border px-3 flex items-center h-8 mb-5">
        <button
          className="outline-none focus:outline-none mr-5"
          onClick={handleBtn}
        >
          <Arrow />
        </button>
        <Search placeHolder="¿Qué te gustaría aprender hoy?" />
      </div>
    );
  }

  return (
    <>
      <div className="bg-transparent flex items-center justify-between box-border px-3 h-36">
        <BtnCloseModal handleBtn={handleBtn} />
        <div className="flex items-center">
          <LogoCrehana />
          <p className="font-extrabold text-gray-700 text-2xl mx-5">
            Cuéntanos, ¿Qué te gustaría aprender hoy?
          </p>
        </div>
      </div>
      <Search />
    </>
  );
};

export default HeaderModal;
