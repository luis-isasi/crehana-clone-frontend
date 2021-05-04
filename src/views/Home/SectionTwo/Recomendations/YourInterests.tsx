import { useRef, useState } from 'react';

import { MEDIAQUERY_MD, MEDIAQUERY_XL } from '@Constans';
import { CONTAINER_HOME } from '../../contants';
import useResponsive from '@Hooks/useResponsive';
import CardInterest from './components/CardInterest';
import Slider from '../../components/Slider';
import SwitchSliderDesktop from '../../components/SwitchSliderDesktop';
import SwitchSliderMovil from '../../components/SwitchSliderMovil';

const YourInterests = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(1);

  const [isMobile] = useResponsive({
    maxMediaQuery: MEDIAQUERY_MD,
  });
  const [isMinTabletOrDesktop] = useResponsive({
    minMediaQuery: MEDIAQUERY_MD,
  });
  const [isDesktop] = useResponsive({
    minMediaQuery: MEDIAQUERY_XL,
  });

  const sliderRef = useRef<HTMLUListElement>();

  const renderInterests = () => {
    let array = [
      'Front end',
      'Fundamento UX / UI',
      'Ecommerce',
      'Desarrollo mobile',
      'Desarrollo de software',
    ];
    return array.map((interest, index) => (
      <span
        key={index}
        className="rounded-md bg-base-lighter-24 min-w-max mr-2 my-1 px-2 py-1 text-xs font-extrabold text-base-lighter"
      >
        {interest}
      </span>
    ));
  };

  return (
    <section className="min-h-100 h-auto w-full py-10">
      <div
        className={`${CONTAINER_HOME} h-auto  w-full box-border overflow-visible flex flex-col`}
      >
        <header className="flex items-center md:justify-between">
          <h2 className="text-lg font-bold md:text-2xl">Según tus intereses</h2>
          {isMinTabletOrDesktop && (
            <SwitchSliderDesktop
              sliderRef={sliderRef}
              selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex}
              totalSections={isDesktop ? 3 : 4}
            />
          )}
        </header>
        <div className="h-auto w-full my-3 flex justify-start flex-wrap">
          {renderInterests()}
        </div>
        <Slider
          Card={CardInterest}
          heightAndWidth={'min-h-88 h-88 w-full'}
          sliderRef={sliderRef}
        />
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

export default YourInterests;
