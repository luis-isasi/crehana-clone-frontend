import ReactDOM from 'react-dom';

import CardCourse from '@Components/CourseCard';
import FooterModal from './components/FooterModal';
import Container from './components/Container';
import HeaderModal from './components/HeaderModal';
import BtnToPremium from './components/Buttons/BtnToPremium';
import FooterText from './components/FooterModal/FooterText';

import useResponsive from '@Hooks/useResponsive';
import { MEDIAQUERY_LG } from '@Constans';

interface Props {
  setIsOpenModal: (isOpenModal: boolean) => void;
}

const SearchModal: React.FC<Props> = ({ setIsOpenModal }) => {
  const isMovilAndTablet = useResponsive({
    maxMediaQuery: MEDIAQUERY_LG,
  });

  const handleBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsOpenModal(false);
  };

  return ReactDOM.createPortal(
    <>
      <div className="bg-white z-50 max-h-screen w-screen h-auto absolute top-0 left-0 flex flex-col justify-start">
        <div className=" flex-grow w-full overflow-y-auto scrool-none scroolbar">
          <Container>
            <HeaderModal handleBtn={handleBtn} />
            <div className="box-border px-3 h-16 lg:h-36 mt-8 lg:mt-4 text-sm lg:text-lg">
              <p className="font-semibold text-gray-700 ">
                Los temas mas buscados:
              </p>
            </div>
            {isMovilAndTablet && (
              <div className="box-border px-3 h-20 ">
                <FooterText />
                <BtnToPremium />
              </div>
            )}
            <p className=" box-border px-3 font-semibold text-gray-700 text-sm lg:text-lg my-4">
              Los cursos más vendidos:
            </p>
            <div className="bg-transparent grid grid-flow-row grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mb-10 w-full h-auto">
              <CardCourse inModal={true} />
              <CardCourse inModal={true} />
              <CardCourse inModal={true} />
              <CardCourse inModal={true} />
              <CardCourse inModal={true} />
              <CardCourse inModal={true} />
              <CardCourse inModal={true} />
              <CardCourse inModal={true} />
              <CardCourse inModal={true} />
              <CardCourse inModal={true} />
              <CardCourse inModal={true} />
              <CardCourse inModal={true} />
              <CardCourse inModal={true} />
              <CardCourse inModal={true} />
              <CardCourse inModal={true} />
              <CardCourse inModal={true} />
              <CardCourse inModal={true} />
              <CardCourse inModal={true} />
              <CardCourse inModal={true} />
              <CardCourse inModal={true} />
              <CardCourse inModal={true} />
            </div>
          </Container>
        </div>
        {isMovilAndTablet === false && <FooterModal />}
      </div>
      <style global jsx>{`
        body {
          overflow: hidden;
        }
      `}</style>
    </>,
    document.querySelector('#modal')
  );
};

export default SearchModal;
