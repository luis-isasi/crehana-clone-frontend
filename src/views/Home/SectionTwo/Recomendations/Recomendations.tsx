import { useRef, useState } from 'react';
import Image from 'next/image';

import SwitchSliderMovil from './components/SwitchSliderMovil';
import SwitchSliderDesktop from './components/SwitchSliderDesktop';
import CardCourse from './components/CardCourse';
import { MEDIAQUERY_MD } from '@Constans';
import { PREVIOUS, NEXT } from '../../contants';
import useResponsive from '@Hooks/useResponsive';
import { render } from 'react-dom';

const Recomendations = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(1);
  const [isMovil] = useResponsive({
    type: 'max',
    mediaquery: MEDIAQUERY_MD,
  });
  const [isTabletOrLaptop] = useResponsive({
    type: 'min',
    mediaquery: MEDIAQUERY_MD,
  });
  const [isDesktop] = useResponsive({
    type: 'min',
    mediaquery: MEDIAQUERY_MD,
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
    let array = [1, 2, 3];
    return array.map((index) => {
      return (
        <li key={index} className="h-full w-100">
          <CardCourse />
          <CardCourse />
          <CardCourse />
        </li>
      );
    });
  };

  const renderImgDesktop = () => {
    let array = [1, 2, 3, 4];
    return array.map((index) => {
      return (
        <li key={index} className="h-full w-100">
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
    <section className="relative min-h-100 h-100 ">
      <div className="absolute h-full w-full bg-transparent box-border px-4 overflow-visible flex flex-col ">
        <header className="mb-5 mt-1 flex items-center md:justify-between">
          <h2 className="text-lg font-bold">Nuevos cursos, nuevos retos</h2>
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
        <div className="h-98 w-full overflow-hidden">
          <ul
            ref={ulRef}
            className=" bg-primary-lighter flex h-88 w-1200 md:w-300 xl:w-400 overflow-hidden"
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
      <div className="bg-base-dark h-1/2"></div>
      <div className="bg-primary-light h-1/2  flex-grow flex flex-col items-center justify-end"></div>
    </section>
  );
};

export default Recomendations;
