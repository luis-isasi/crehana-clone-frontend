import { useRef } from 'react';

import SliderSwitchMovil from '@Components/Slider/SwitchWithNumbers/SliderSwitchMovil';
import SwitchSecondaryPoints from '@Components/Slider/SwitchWithPoints/SwitchSecondaryPoints';
import useResponsive from '@Hooks/useResponsive';
import CardExpertLeader from './components/CardExpertLeader';
import { MEDIAQUERY_MD, MEDIAQUERY_XL } from '@Constans';

const LearnWithExpertLeaders = () => {
  const ulRef = useRef<HTMLUListElement>();

  const isMovil = useResponsive({
    maxMediaQuery: MEDIAQUERY_MD,
  });
  const isTablet = useResponsive({
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
    //inicializamos el index
    const arrSections = Array.from({ length: sections });
    let index = 0;
    console.log({ index });

    //funcion para retonrar los cards dentro de la section
    const renderCards = (cardsInSection: number) => {
      //TODO: change .from to .slice
      const cards = Array.from({ length: cardsInSection });
      //  const cards: DataHelpUser[] = Items.slice(index, index + cardsInSection);

      //le damos un nuevo valor al index para el siguiente render de cards en section
      index = index + cardsInSection;

      return cards.map((data, i) => (
        <CardExpertLeader key={`slider-expert-leaders-${i}`} />
      ));
    };

    //renderizamos las sections y dentro sus cards correspondientes
    return arrSections.map((data, i) => {
      return (
        <li
          key={i}
          className="min-h-0 h-auto w-100 md:grid md:grid-flow-col md:grid-cols-2 xl:grid-cols-4 md:gap-6"
        >
          {renderCards(cardsInSection)}
        </li>
      );
    });
  };

  return (
    <div className="bg-base-main w-full h-auto">
      <section className="w-full h-auto px-5 md:px-10 mx-auto container">
        <h4 className="text-white font-bold text-2xl md:text-4xl py-7 md:py-10 xl:py-12">
          Aprende con expertos líderes en sus rubros
        </h4>
        <div className="text-white">
          <div className="h-auto w-full overflow-hidden">
            <ul
              ref={ulRef}
              className={`${
                isMovil ? 'w-800' : isTablet ? 'w-400' : 'w-200'
              } min-h-0 h-auto md:min-h-102 xl:min-h-102 2xl:min-h-xl flex`}
            >
              {isMovil &&
                renderSectionsAndCards({ sections: 8, cardsInSection: 1 })}
              {isTablet &&
                renderSectionsAndCards({ sections: 4, cardsInSection: 2 })}
              {isDesktop &&
                renderSectionsAndCards({ sections: 2, cardsInSection: 4 })}
            </ul>
          </div>
          {isMovil ? (
            <SliderSwitchMovil
              totalSections={8}
              sliderRef={ulRef}
              dark={true}
            />
          ) : (
            <SwitchSecondaryPoints
              totalSections={isTablet ? 4 : 2}
              sliderRef={ulRef}
            />
          )}
        </div>
      </section>
    </div>
  );
};

export default LearnWithExpertLeaders;
