import { useRef } from 'react';

import { MEDIAQUERY_MD, MEDIAQUERY_2X1 } from '@Constans';
import { CONTAINER_HOME } from '../contants';
import { DataHelpUser } from './types';
import useResponsive from '@Hooks/useResponsive';
import { Items } from './items';
import SliderSwitchMovil from '@Components/Slider/SwitchWithNumbers/SliderSwitchMovil';
import SwitchPrimaryPoints from '@Components/Slider/SwitchWithPoints/SwitchPrimaryPoints';
import CardHelpUser from './components/CardHelpUser';

const HelpUser = () => {
  const sliderRef = useRef<HTMLUListElement>();

  const isMovil = useResponsive({ maxMediaQuery: MEDIAQUERY_MD });
  const isTabletOrLaptop = useResponsive({
    minMediaQuery: MEDIAQUERY_MD,
    maxMediaQuery: MEDIAQUERY_2X1,
  });
  const isDesktop = useResponsive({
    minMediaQuery: MEDIAQUERY_2X1,
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

    //funcion para retonrar los cards dentro de la section
    const renderCards = (cardsInSection: number) => {
      const cards: DataHelpUser[] = Items.slice(index, index + cardsInSection);

      //le damos un nuevo valor al index para el siguiente render de cards en section
      index = index + cardsInSection;

      return cards.map(({ id, href, linkText, src, text }) => (
        <CardHelpUser
          key={id}
          LinkHref={href}
          LinkText={linkText}
          src={src}
          text={text}
        />
      ));
    };

    //renderizamos las sections y dentro sus cards correspondientes
    return arrSections.map((data, index) => {
      return (
        <li
          key={index}
          className="h-full w-full flex 2xl:grid 2xl:grid-flow-row 2xl:grid-cols-3 2xl:gap-4"
        >
          {renderCards(cardsInSection)}
        </li>
      );
    });
  };

  return (
    <section className="h-auto w-full bg-gray-100 dark:bg-base-main text-gray-900 dark:text-white box-border py-4 ">
      <div className={`${CONTAINER_HOME} w-full`}>
        <header className="mb-5">
          <p className="font-bold my-1">¿Necesitas ayuda?</p>
          <p className="text-sm text-gray-400 my-1">
            ¡Estamos para atenderte! Elige el tipo de soporte según lo que
            necesites resolver.
          </p>
        </header>
        <div className="min-h-30 h-30 w-full overflow-hidden">
          <ul
            ref={sliderRef}
            className="flex h-full w-300 md:w-150 2xl:w-full md:grid md:grid-flow-row md:grid-cols-3 md:gap-4 2xl:grid-cols-1"
          >
            {(isMovil || isTabletOrLaptop) &&
              renderSectionsAndCards({ sections: 3, cardsInSection: 1 })}
            {isDesktop &&
              renderSectionsAndCards({ sections: 1, cardsInSection: 3 })}
          </ul>
        </div>
        {isMovil && (
          <SliderSwitchMovil sliderRef={sliderRef} totalSections={3} />
        )}
        {isTabletOrLaptop && (
          <SwitchPrimaryPoints
            sliderRef={sliderRef}
            totalSections={2}
            marginLeft={50}
          />
        )}
      </div>
    </section>
  );
};

export default HelpUser;
