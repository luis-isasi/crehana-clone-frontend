import { useRef, useState } from 'react';

import { MEDIAQUERY_MD, MEDIAQUERY_XL } from '@Constans';
import { CONTAINER_HOME } from '../contants';
import { DataHelpUser } from './types';
import useResponsive from '@Hooks/useResponsive';
import { Items } from './items';
import SwitchSliderMovil from '@Components/Slider/SwitchWithNumbers/SliderSwitchMovil';
import SwitchWithPoints from '@Components/Slider/SwitchWithPoints';
import CardHelpUser from './components/CardHelpUser';

// const arr2 = Array.from({ length: 10 });

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

  // useEffect(() => {
  //   console.log('asfsaf');
  //   setIndex(1);
  // }, [isMovil, isTabletOrLaptop, isDesktop]);

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

    //renderizamos las sections y dentro los cards correspondientes
    return arrSections.map((x, index) => {
      return (
        <li key={index} className="h-full w-full flex">
          {renderCards(cardsInSection)}
        </li>
      );
    });
  };

  // md:grid md:grid-flow-col md:grid-cols-3 md:gap-6

  const sliderRef = useRef();
  return (
    <section className="h-auto w-full bg-gray-100 dark:bg-base-main text-gray-900 dark:text-white box-border py-4 tex">
      <div className={`${CONTAINER_HOME} w-full`}>
        <header className="mb-5">
          <p className="font-bold my-1">¿Necesitas ayuda?</p>
          <p className="text-sm text-gray-400 my-1">
            ¡Estamos para atenderte! Elige el tipo de soporte según lo que
            necesites resolver.
          </p>
        </header>
        <div className="min-h-30 h-30 w-full overflow-hidden ">
          <ul ref={sliderRef} className="flex h-full w-300 md:w-300 xl:w-full">
            {isMovil &&
              renderSectionsAndCards({ sections: 3, cardsInSection: 1 })}
            {isTabletOrLaptop &&
              renderSectionsAndCards({ sections: 3, cardsInSection: 1 })}
            {isDesktop &&
              renderSectionsAndCards({ sections: 1, cardsInSection: 3 })}
          </ul>
        </div>
        {isMovil && (
          <SwitchSliderMovil
            selectedIndex={index}
            setSelectedIndex={setIndex}
            sliderRef={sliderRef}
            totalSections={3}
          />
        )}
        {isTabletOrLaptop && (
          <SwitchWithPoints
            selectedIndex={index}
            setSelectedIndex={setIndex}
            sliderRef={sliderRef}
            totalSections={3}
          />
        )}
      </div>
    </section>
  );
};

export default HelpUser;
