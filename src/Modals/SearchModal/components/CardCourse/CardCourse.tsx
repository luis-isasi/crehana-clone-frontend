import SalesAndStars from './components/SalesAndStars';
import useResponsive from 'src/hooks/useResponsive';
import { MEDIAQUERY_LG } from 'Contants';
import IconComplete from 'src/components/Icons/IconComplete';
import Price from './components/Price';
import AvatarTeacher from './components/AvatarTeacher';
import AddToCar from './components/AddToCar';
import MostSelling from './components/MostSelling';

const CardCourse: React.FC = () => {
  const [isMovilAndTablet] = useResponsive({
    type: 'max',
    mediaquery: MEDIAQUERY_LG,
  });

  return (
    <div className=" box-border p-3 max-w-full w-full md:w-1/3  lg:w-1/4 lg:max-w-1/4 xl:w-1/4 xl:max-w-1/4 2xl:w-1/5 2xl:max-w-1/5">
      <div className="w-full h-36 md:h-96 pb-0 md:pb-5 mb-2 md:mb-8 transition duration-500 ease-in-out hover:shadow-lg flex flex-row md:flex-col cursor-pointer">
        <AvatarTeacher />
        <div className="w-full box-border h-full md:h-1/2 px-3 md:p-3  ">
          <div className="flex flex-row md:flex-row ">
            <div className="flex flex-col justify-start w-full">
              {isMovilAndTablet && <MostSelling />}
              <p className="font-semibold text-gray-700 text-sm h-4 md:h-10 mt-2 lg:mt-0">
                Marketing digital desde cero
              </p>
            </div>
            <AddToCar />
          </div>
          {isMovilAndTablet === false && (
            <span className="font-light text-sm text-gray-500 my-2 ">
              Por Ismael Mon
            </span>
          )}
          {isMovilAndTablet === undefined ? null : isMovilAndTablet ? (
            <div className="flex items-center mt-5">
              <IconComplete />
              <span className="px-2 my-3 text-gray-500 font-semibold text-sm">
                Completo
              </span>
            </div>
          ) : (
            <SalesAndStars />
          )}
          <Price />
        </div>
      </div>
    </div>
  );
};

export default CardCourse;
