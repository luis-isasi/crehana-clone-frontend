import { MEDIAQUERY_MD, MEDIAQUERY_XL } from '@Constans';
import useResponsive from '@Hooks/useResponsive';

interface Props {
  Card: () => JSX.Element;
  heightAndWidth?: string;
  sliderRef: React.RefObject<HTMLUListElement>;
}

const Slider: React.FC<Props> = ({ Card, heightAndWidth, sliderRef }) => {
  const isMovil = useResponsive({
    maxMediaQuery: MEDIAQUERY_MD,
  });
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
    //inicializamos el index
    const arrSections = Array.from({ length: sections });
    let index = 0;

    //funcion para retonrar los cards dentro de la section
    const renderCards = (cardsInSection: number) => {
      //TODO: change .from to .slice
      const cards = Array.from({ length: cardsInSection });
      //  const cards: DataHelpUser[] = Items.slice(index, index + cardsInSection);

      //le damos un nuevo valor al index para el siguiente render de cards en section
      index = index + cardsInSection;

      return cards.map((data, index) => <Card key={`slider-card-${index}`} />);
    };

    //renderizamos las sections y dentro sus cards correspondientes
    return arrSections.map((data, index) => {
      return (
        <li
          key={index}
          className="h-full w-100 md:grid md:grid-flow-col md:grid-cols-3 xl:grid-cols-4 md:gap-6"
        >
          {renderCards(cardsInSection)}
        </li>
      );
    });
  };

  return (
    <div
      className={`${
        heightAndWidth || 'min-h-88 h-88 md:min-h-96 md:h-96 w-full'
      } overflow-hidden`}
    >
      <ul
        ref={sliderRef}
        className="flex h-full box-border p-2 w-1200 md:w-400 xl:w-300"
      >
        {isMovil && renderSectionsAndCards({ sections: 12, cardsInSection: 1 })}
        {isTabletOrLaptop &&
          renderSectionsAndCards({ sections: 4, cardsInSection: 3 })}
        {isDesktop &&
          renderSectionsAndCards({ sections: 3, cardsInSection: 4 })}
      </ul>
    </div>
  );
};

export default Slider;
