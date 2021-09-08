import { Course } from '@Types/course';
import useResponsive from '@Hooks/useResponsive';
import { MEDIAQUERY_LG } from '@Constans';
import IconComplete from '@Components/Icons/IconComplete';
import MostSelling from '@Components/Labels/MostSelling';
import BtnPrimary from '@Components/buttons/BtnPrimaryBorder';

import SalesAndStars from './components/SalesAndStars';
import Price from './components/Price';
import CourseImg from './components/CourseImg';
import AddToCar from './components/AddToCar';
interface Props {
  inModal?: boolean;
  course: Course;
}

const CardCourse: React.FC<Props> = ({ inModal, course }) => {
  const isMovilAndTablet = useResponsive({
    maxMediaQuery: MEDIAQUERY_LG,
  });

  const isLaptopOrDesktop = useResponsive({
    minMediaQuery: MEDIAQUERY_LG,
  });

  console.log({ course });

  return (
    <div className={`box-border ${inModal && 'p-3'} h-auto w-full `}>
      <div
        className={`w-full h-full transition duration-300 ease-in-out hover:shadow-lg flex ${
          inModal ? 'flex-row' : 'flex-col'
        } md:flex-col cursor-pointer `}
      >
        <CourseImg inModal={inModal} />
        <div
          className={`w-full box-border ${
            inModal ? 'px-3' : 'p-3'
          }   md:p-3 flex flex-col flex-1 justify-between`}
        >
          <div>
            <div className="w-full h-auto flex flex-col justify-start">
              {isMovilAndTablet && inModal && <MostSelling />}
              <h4
                className={`font-semibold text-gray-700 text-sm xl:text-base xl:font-medium h-auto ${
                  inModal && 'mt-2'
                } lg:mt-0`}
              >
                {course.title}
              </h4>
            </div>
            {((inModal && isLaptopOrDesktop) || !inModal) && (
              <p className="font-light text-sm text-gray-500 mt-2">
                Por Ismael Mon
              </p>
            )}
          </div>
          <div>
            {inModal && isMovilAndTablet && (
              <div className="flex items-center ">
                <IconComplete />
                <span className="px-2 my-3 text-gray-500 font-semibold text-sm">
                  Completo
                </span>
              </div>
            )}
            {((inModal && isLaptopOrDesktop) || !inModal) && <SalesAndStars />}
            <Price prices={course.prices} />
            {!inModal && (
              <div className="h-auto w-full py-2 flex">
                <AddToCar />
                <BtnPrimary className="py-3 w-full  rounded-md transform hover:-translate-y-1 transition-all duration-200 ease-out">
                  Comprar ahora
                </BtnPrimary>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCourse;
