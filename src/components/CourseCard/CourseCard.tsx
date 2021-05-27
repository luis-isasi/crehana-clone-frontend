import SalesAndStars from './components/SalesAndStars';
import useResponsive from '@Hooks/useResponsive';
import { MEDIAQUERY_LG } from '@Constans';
import IconComplete from '@Components/Icons/IconComplete';
import Price from './components/Price';
import CourseImg from './components/CourseImg';
import AddToCar from './components/AddToCar';
import MostSelling from '@Components/Labels/MostSelling';
import CartIcon from '@Components/Icons/CartIcon';
import BtnPrimary from '@Components/buttons/BtnPrimary';

interface Props {
  inModal?: boolean;
}

const CardCourse: React.FC<Props> = ({ inModal }) => {
  const isMovilAndTablet = useResponsive({
    maxMediaQuery: MEDIAQUERY_LG,
  });

  const isLaptopOrDesktop = useResponsive({
    minMediaQuery: MEDIAQUERY_LG,
  });

  return (
    <div className={`box-border ${inModal && 'p-3'} h-auto w-full`}>
      <div
        className={`w-full h-auto transition duration-300 ease-in-out hover:shadow-lg flex ${
          inModal ? 'flex-row' : 'flex-col'
        } md:flex-col cursor-pointer`}
      >
        <CourseImg inModal={inModal} />
        <div
          className={`w-full box-border min-h-36 h-full md:min-h-52  md:h-1/2 ${
            inModal ? 'px-3' : 'p-3'
          }   md:p-3`}
        >
          <div className="flex flex-row md:flex-row">
            <div className="flex flex-col justify-start w-full">
              {isMovilAndTablet && inModal && <MostSelling />}
              <p
                className={`font-semibold text-gray-700 text-sm xl:text-base xl:font-medium h-auto md:h-10 ${
                  inModal && 'mt-2'
                } lg:mt-0`}
              >
                Marketing digital desde cero
              </p>
            </div>
            <AddToCar />
          </div>
          {((inModal && isLaptopOrDesktop) || !inModal) && (
            <span className="font-light text-sm text-gray-500 my-2">
              Por Ismael Mon
            </span>
          )}
          {inModal && isMovilAndTablet && (
            <div className="flex items-center mt-5">
              <IconComplete />
              <span className="px-2 my-3 text-gray-500 font-semibold text-sm">
                Completo
              </span>
            </div>
          )}
          {((inModal && isLaptopOrDesktop) || !inModal) && <SalesAndStars />}
          <Price />
          {!inModal && (
            <div className="h-auto w-full my-2 flex">
              <button className="box-border p-3 mr-4 rounded-md border-2 border-primary-main focus:outline-none transform hover:-translate-y-1 transition-all duration-200 ease-out">
                <CartIcon className="text-primary-main" />
              </button>
              <BtnPrimary className="py-3 w-full  rounded-md transform hover:-translate-y-1 transition-all duration-200 ease-out">
                Comprar ahora
              </BtnPrimary>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardCourse;
