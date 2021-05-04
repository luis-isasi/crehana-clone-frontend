import { useRef, useState } from 'react';

import { MEDIAQUERY_MD, MEDIAQUERY_XL } from '@Constans';
import { CONTAINER_HOME } from '../../contants';
import useResponsive from '@Hooks/useResponsive';
import CardCourse from './components/CardCourse';
import Slider from '../../components/Slider';
import SwitchSliderDesktop from '../../components/SwitchSliderDesktop';
import SwitchSliderMovil from '../../components/SwitchSliderMovil';

const NewCourses = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(1);

  const isMobile = useResponsive({
    maxMediaQuery: MEDIAQUERY_MD,
  });
  const isMinTabletOrDesktop = useResponsive({
    minMediaQuery: MEDIAQUERY_MD,
  });
  const isDesktop = useResponsive({
    minMediaQuery: MEDIAQUERY_XL,
  });

  const sliderRef = useRef<HTMLUListElement>();

  return (
    <section className="relative min-h-100 h-auto w-full pb-6">
      <div className="bg-primary-light absolute bottom-0 h-1/2 w-full flex flex-col items-center justify-end" />
      <div
        className={`${CONTAINER_HOME}  h-auto w-full box-border overflow-visible flex flex-col`}
      >
        <header className="mb-5 mt-1 flex items-center md:justify-between">
          <h2 className="text-lg font-bold md:text-2xl">
            Nuevos cursos, nuevos retos
          </h2>
          {isMinTabletOrDesktop && (
            <SwitchSliderDesktop
              sliderRef={sliderRef}
              selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex}
              totalSections={isDesktop ? 3 : 4}
            />
          )}
        </header>
        <Slider Card={CardCourse} sliderRef={sliderRef} />
        {isMobile && (
          <SwitchSliderMovil
            sliderRef={sliderRef}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
            totalSections={12}
          />
        )}
      </div>
    </section>
  );
};

export default NewCourses;
