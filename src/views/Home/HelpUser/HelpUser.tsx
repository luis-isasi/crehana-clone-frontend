import { useRef, useState } from 'react';

import SwitchSliderMovil from '../components/SwitchSliderMovil';
import UpdateNumber from './components/UpdateNumber';
import { CONTAINER_HOME } from '../contants';
import useResponsive from '@Hooks/useResponsive';
import { MEDIAQUERY_MD, MEDIAQUERY_XL } from '@Constans';

const HelpUser = () => {
  const [index, setIndex] = useState<number>(1);

  const isMovil = useResponsive({ maxMediaQuery: MEDIAQUERY_MD });
  const isTabletOrLaptop = useResponsive({
    minMediaQuery: MEDIAQUERY_MD,
    maxMediaQuery: MEDIAQUERY_XL,
  });
  const isDesktop = useResponsive({
    minMediaQuery: MEDIAQUERY_XL,
  });

  const renderSectionsAndCards = ({
    sections,
    cardsInSection,
  }: {
    sections: number;
    cardsInSection: number;
  }) => {
    const renderNumberCards = (cardsInSection: number) => {
      for (let i = 1; i <= cardsInSection; i++) {
        console.log('imprimiendo card');

        return <UpdateNumber />;
      }
    };
    let arr = [1, 2, 3];

    return arr.map((x, index) => {
      return (
        <li key={index} className="h-full w-full flex">
          {/* {renderNumberCards(cardsInSection)} */}
          <UpdateNumber />
        </li>
      );
    });

    // let i = 1;
    // while (i <= sections) {
    //   console.log(i, sections);

    //   i++;
    //   return (
    //     <li key={index} className="h-full w-full flex">
    //       {/* {renderNumberCards(cardsInSection)} */}
    //       <CardHelpUser />
    //     </li>
    //   );
    // }

    // for (let i = 1; i <= sections; i++) {
    //   console.log(i, sections);

    //   return (
    //     <li key={index} className="h-full w-full flex">
    //       {/* {renderNumberCards(cardsInSection)} */}
    //       <CardHelpUser />
    //     </li>
    //   );
    // }
  };

  // md:grid md:grid-flow-col md:grid-cols-3 md:gap-6

  const sliderRef = useRef();
  return (
    <section className="bg-base-main h-auto w-full box-border py-4">
      <div className={`${CONTAINER_HOME} bg-base-main w-full`}>
        <header className="mb-5">
          <p className="font-bold my-1">¿Necesitas ayuda?</p>
          <p className="text-sm text-gray-400 my-1">
            ¡Estamos para atenderte! Elige el tipo de soporte según lo que
            necesites resolver.
          </p>
        </header>
        <div className="min-h-30 h-30 w-full overflow-hidden ">
          <ul ref={sliderRef} className="flex h-full w-300 md:w-200 xl:w-full">
            {isMovil &&
              renderSectionsAndCards({ sections: 3, cardsInSection: 1 })}
            {isTabletOrLaptop &&
              renderSectionsAndCards({ sections: 3, cardsInSection: 1 })}
            {isDesktop &&
              renderSectionsAndCards({ sections: 1, cardsInSection: 3 })}
          </ul>
        </div>
        <div>
          <SwitchSliderMovil
            selectedIndex={index}
            setSelectedIndex={setIndex}
            sliderRef={sliderRef}
            totalSections={3}
          />
        </div>
      </div>
    </section>
  );
};

export default HelpUser;
