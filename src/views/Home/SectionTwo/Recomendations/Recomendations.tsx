import { useRef, useState } from 'react';

import SwitchSliderMovil from './components/SwitchSliderMovil';
import SwitchSliderDesktop from './components/SwitchSliderDesktop';
import CardCourse from './components/CardCourse';
import { MEDIAQUERY_MD, MEDIAQUERY_XL } from '@Constans';
import { PREVIOUS, NEXT, CONTAINER_HOME } from '../../contants';
import useResponsive from '@Hooks/useResponsive';

const Recomendations = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(1);
  const [isMovil] = useResponsive({
    maxMediaQuery: MEDIAQUERY_MD,
  });
  const [isTabletOrLaptop] = useResponsive({
    minMediaQuery: MEDIAQUERY_MD,
    maxMediaQuery: MEDIAQUERY_XL,
  });
  const [isDesktop] = useResponsive({
    minMediaQuery: MEDIAQUERY_XL,
  });

  const ulRef = useRef<HTMLUListElement>();

  const renderImgMovil = () => {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    return array.map((index) => {
      return (
        <li key={index} className="h-full w-full">
          <CardCourse />
        </li>
      );
    });
  };

  const renderImgLaptop = () => {
    let array = [1, 2, 3, 4];
    return array.map((index) => {
      return (
        <li
          key={index}
          className="h-full w-100 grid grid-flow-col grid-cols-3 gap-6"
        >
          <CardCourse />
          <CardCourse />
          <CardCourse />
        </li>
      );
    });
  };

  const renderImgDesktop = () => {
    let array = [1, 2, 3];
    return array.map((index) => {
      return (
        <li
          key={index}
          className="h-full w-100 grid grid-flow-col grid-cols-4 gap-6"
        >
          <CardCourse />
          <CardCourse />
          <CardCourse />
          <CardCourse />
        </li>
      );
    });
  };

  const handlePreviousAndNext = (
    type: typeof NEXT | typeof PREVIOUS,
    newIndex: number
  ) => () => {
    if (selectedIndex === 12 && type === NEXT) return;
    if (selectedIndex === 1 && type === PREVIOUS) return;

    ulRef.current.animate(
      [
        {
          marginLeft: `-${newIndex - 1}00%`,
        },
      ],
      {
        duration: 150,
        iterations: 1,
        easing: 'ease-in',
        fill: 'forwards',
      }
    );
    setSelectedIndex(newIndex);
  };

  return (
    <section className={`relative min-h-100 h-auto w-full `}>
      <div className="bg-primary-light absolute bottom-0 h-1/2 w-full  flex flex-col items-center justify-end"></div>
      <div
        className={`${CONTAINER_HOME} md:h-96 w-full box-border overflow-visible flex flex-col`}
      >
        <header className="mb-5 mt-1 flex items-center md:justify-between">
          <h2 className="text-lg font-bold md:text-2xl">
            Nuevos cursos, nuevos retos
          </h2>
          {isTabletOrLaptop && (
            <SwitchSliderDesktop
              selectedIndex={selectedIndex}
              handlePreviousAndNext={handlePreviousAndNext}
              totalSections={4}
            />
          )}
          {isDesktop && (
            <SwitchSliderDesktop
              selectedIndex={selectedIndex}
              handlePreviousAndNext={handlePreviousAndNext}
              totalSections={3}
            />
          )}
        </header>
        <div className="min-h-96 h-96 md:min-h-102 md:h-102 w-full overflow-hidden">
          <ul
            ref={ulRef}
            className=" flex min-h-88 h-88 md:h-96 w-1200 md:w-400 xl:w-300"
          >
            {isMovil && renderImgMovil()}
            {isTabletOrLaptop && renderImgLaptop()}
            {isDesktop && renderImgDesktop()}
          </ul>
        </div>
        {isMovil && (
          <SwitchSliderMovil
            selectedIndex={selectedIndex}
            handlePreviousAndNext={handlePreviousAndNext}
            totalSections={12}
          />
        )}
      </div>
    </section>
  );
};

export default Recomendations;
