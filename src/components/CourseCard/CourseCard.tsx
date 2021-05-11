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
        <div className="relative">
          {!inModal && (
            <div className="absolute z-5 top-4 left-4">
              <MostSelling />
            </div>
          )}
          <CourseImg inModal={inModal} />
        </div>
        <div
          className={`w-full box-border min-h-36 h-full md:min-h-52  md:h-1/2 ${
            inModal ? 'px-3' : 'p-3'
          }   md:p-3`}
        >
          <div className="flex flex-row md:flex-row">
            <div className="flex flex-col justify-start w-full">
              {isMovilAndTablet && inModal && <MostSelling />}
              <p
                className={`font-semibold text-gray-700 text-sm h-auto md:h-10 ${
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
              <button className="box-border p-3 mr-4 border border-primary-main focus:outline-none ">
                <CartIcon className="" />
              </button>
              <BtnPrimary classPadding="py-3">Comprar ahora</BtnPrimary>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardCourse;

//  <div
//       className={`box-border ${
//         inModal && 'p-3'
//       } max-w-full  w-full md:w-1/3  lg:w-1/4 lg:max-w-1/4 xl:w-1/4 xl:max-w-1/4 2xl:w-1/5 2xl:max-w-1/5`}
//     >
//       <div
//         className={`w-full bg-blue-500 h-auto pb-0 md:pb-5 mb-2 md:mb-8 transition duration-300 ease-in-out hover:shadow-lg flex ${
//           inModal ? 'flex-row' : 'flex-col'
//         } md:flex-col cursor-pointer`}
//       >
//         <CourseImg inModal={inModal} />
//         <div className="w-full box-border h-full md:h-1/2 px-3 md:p-3 bg-blue-300 ">
//           <div className="flex flex-row md:flex-row ">
//             <div className="flex flex-col justify-start w-full">
//               {isMovilAndTablet && <MostSelling />}
//               <p className="font-semibold text-gray-700 text-sm h-4 md:h-10 mt-2 lg:mt-0">
//                 Marketing digital desde cero
//               </p>
//             </div>
//             <AddToCar />
//           </div>
//           {isMovilAndTablet === false && (
//             <span className="font-light text-sm text-gray-500 my-2 ">
//               Por Ismael Mon
//             </span>
//           )}
//           {isMovilAndTablet === undefined ? null : isMovilAndTablet ? (
//             <div className="flex items-center mt-5">
//               <IconComplete />
//               <span className="px-2 my-3 text-gray-500 font-semibold text-sm">
//                 Completo
//               </span>
//             </div>
//           ) : (
//             <SalesAndStars />
//           )}
//           <Price />
//           {!inModal && (
//             <div className="h-auto w-full my-2 flex">
//               <button className="box-border p-3 mr-4 border border-primary-main focus:outline-none ">
//                 <CartIcon className="" />
//               </button>
//               <BtnPrimary classPadding="py-3">Comprar ahora</BtnPrimary>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
