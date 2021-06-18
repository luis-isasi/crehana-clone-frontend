import TemarySection from './components/TemarySection';

const Temary = () => {
  const renderTemarySections = () => {
    return ItemsTemary.map((value) => {
      return <TemarySection section={value} />;
    });
  };

  return (
    <section className="pt-4 pb-10">
      <h3 className="course-content-title my-3">Temario del curso</h3>
      <div className="my-2">{renderTemarySections()}</div>
    </section>
  );
};

const ItemsTemary = [
  {
    title: 'Introducción',
    classes: [
      'Pasión digital',
      'Sacarle partido a las reder sociales',
      'BREAK 1: Un día gestionando redes',
    ],
  },
  {
    title: 'El entorno digital',
    classes: [
      'Ecosistema digital',
      'El customer journey',
      'Las buyer personas',
      'Tendencias en Social Media',
      'AVANCE 1: Buyer personas y customer journey',
      'Protección de datos en redes sociales e internet',
    ],
  },
  {
    title: 'Planteamiento estratégico',
    classes: [
      'Fases de una estrategia digital',
      'Escenario estratégico',
      'Análisis de la competencia',
      'Objetivos SMART',
      'AVANCE 2: Tus objetivos SMART',
      'AVANCE 3: Analiza a tu competencia',
    ],
  },
  {
    title: 'Planificación de contenidos en redes',
    classes: [
      'Públicos y redes',
      'Territorios de marca',
      'Estilo y tono',
      'Ejercicio 1: Un tono para cada estilo',
      'Frecuencia de publicación',
      'Categorías y formatos',
      'Curación de contenidos',
      'AVANCE 4: calendario de una semana tipo',
      'BREAK 2: Ser único',
    ],
  },
  {
    title: 'Introducción',
    classes: [
      'Pasión digital',
      'Sacarle partido a las reder sociales',
      'BREAK 1: Un día gestionando redes',
    ],
  },
  {
    title: 'El entorno digital',
    classes: [
      'Ecosistema digital',
      'El customer journey',
      'Las buyer personas',
      'Tendencias en Social Media',
      'AVANCE 1: Buyer personas y customer journey',
      'Protección de datos en redes sociales e internet',
    ],
  },
  {
    title: 'Planteamiento estratégico',
    classes: [
      'Fases de una estrategia digital',
      'Escenario estratégico',
      'Análisis de la competencia',
      'Objetivos SMART',
      'AVANCE 2: Tus objetivos SMART',
      'AVANCE 3: Analiza a tu competencia',
    ],
  },
  {
    title: 'Planificación de contenidos en redes',
    classes: [
      'Públicos y redes',
      'Territorios de marca',
      'Estilo y tono',
      'Ejercicio 1: Un tono para cada estilo',
      'Frecuencia de publicación',
      'Categorías y formatos',
      'Curación de contenidos',
      'AVANCE 4: calendario de una semana tipo',
      'BREAK 2: Ser único',
    ],
  },
];

export default Temary;
