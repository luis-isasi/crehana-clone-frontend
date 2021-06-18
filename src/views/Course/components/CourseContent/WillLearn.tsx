import CheckRoundedIcon from '@material-ui/icons/CheckRounded';

const WillLearn = () => {
  const renderItems = () => {
    return itemsWilLearn.map((text, index) => {
      return (
        <li key={`willLearn-${index}`} className="font-light flex my-2 xl:ml-3">
          <CheckRoundedIcon className="fill-current text-green-main" />
          <p className="ml-2">{text}</p>
        </li>
      );
    });
  };

  return (
    <section className="mb-10">
      <h2 className="course-content-title">
        ¿Qué aprenderás en este curso de content marketing para redes sociales?
      </h2>
      <ul className="w-full h-auto xl:h-45 grid xl:grid-flow-col xl:grid-cols-2 xl:grid-rows-2">
        {renderItems()}
      </ul>
    </section>
  );
};

//Items
const itemsWilLearn = [
  'Sabrás cómo generar contenido para redes sociales de una manera efectiva y oportuna.',
  'Aprenderás los fundamentos del marketing digital y cómo funcionan las principales redes sociales como Facebook, Twitter o Instagram.',
  'Dominarás diferentes estrategias de crecimiento en redes sociales y lograrás un mayor alcance.',
  'Con el curso de content marketing para redes sociales, aprenderás cómo generar estrategias de contenido con las que podrás llegar a nuevas audiencias.',
];

export default WillLearn;
