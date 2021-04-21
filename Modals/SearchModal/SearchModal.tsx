import ReactDOM from 'react-dom';

import LogoCrehana from 'components/Icons/LogoCrehana';
import CloseIcon from 'components/Icons/CloseIcon';
import Search from './components/Search';
import CardCourse from './components/CardCourse/';
import FooterModal from './components/FooterModal';

interface Props {
  setIsOpenModal: (isOpenModal: boolean) => void;
}

const SearchModal: React.FC<Props> = ({ setIsOpenModal }) => {
  const handleBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsOpenModal(false);
  };

  return ReactDOM.createPortal(
    <div className="bg-white  max-h-screen w-screen h-auto absolute top-0 left-0 flex flex-col justify-start">
      <div className=" flex-grow w-full overflow-y-auto scrool-none scroolbar">
        <div className=" bg-transparent mx-auto w-full xl:w-11/12 2xl:max-w-screen-2xl box-border px-6 lg:px-10 xl:px-13 ">
          <button
            className="w-8 h-8 text-gray-500 text-8xl absolute top-7 right-14 outline-none focus:outline-none"
            onClick={handleBtn}
          >
            <CloseIcon className="w-10 lg:w-10 xl:w-12 h-10 lg:h-10 xl:h-12 " />
          </button>
          <div className="bg-transparent flex items-center justify-between h-36">
            <div className="flex items-center">
              <LogoCrehana />
              <p className="font-extrabold text-gray-700 text-2xl mx-5">
                Cuéntanos, ¿qué te gustaría aprender hoy?
              </p>
            </div>
          </div>
          <Search />
          <div className="h-36">
            <p className="font-semibold text-gray-700 text-lg">
              Los temas mas buscados:
            </p>
          </div>
          <p className="font-semibold text-gray-700 text-lg my-4">
            Los cursos más vendidos:
          </p>
          <div className="bg-transparent flex flex-wrap justify-between mb-10 -mx-3 w-full h-auto">
            <CardCourse />
            <CardCourse />
            <CardCourse />
            <CardCourse />
            <CardCourse />
            <CardCourse />
            <CardCourse />
            <CardCourse />
            <CardCourse />
            <CardCourse />
            <CardCourse />
            <CardCourse />
            <CardCourse />
            <CardCourse />
            <CardCourse />
            <CardCourse />
            <CardCourse />
            <CardCourse />
            <CardCourse />
            <CardCourse />
          </div>
        </div>
      </div>
      <FooterModal />
    </div>,
    document.querySelector('#modal')
  );
};

export default SearchModal;
