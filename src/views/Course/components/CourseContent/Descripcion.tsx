import { useState, useLayoutEffect, useRef } from 'react';

import ExpandMoreIcon from '@Components/Icons/ExpandMoreIcon';

const Descripcion: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [height, setHeight] = useState<number>(240);
  const refDivCollapse = useRef<HTMLDivElement>();

  useLayoutEffect(() => {
    //calculate the height
    if (isExpanded) {
      setHeight(refDivCollapse.current.getBoundingClientRect().height);
    } else {
      setHeight(240);
    }
  }, [isExpanded]);

  const onClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="font-light h-auto overflow-hidden py-6">
      <h2 className="course-content-title">Descripción</h2>
      <div
        className={`font-light  overflow-hidden `}
        style={{
          height: `${height}px`,
          transitionDuration: '500ms',
          transitionProperty: 'all',
          transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      >
        <div ref={refDivCollapse} className="w-full h-auto">
          <p>
            ¿Te apasiona el mundo del marketing digital y quieres aprender a
            generar contenido para redes sociales? Este curso te brindará las
            herramientas necesarias para que aprendas cómo hacer estrategias de
            contenido que generen un impacto positivo en tu audiencia y obtengas
            el reconocimiento que deseas.
          </p>
          <br />
          <p>
            Además, con nuestro curso online de content marketing para redes
            sociales conocerás las estrategias de marketing que podrás aplicar a
            un plan de contenidos con el fin de alcanzar un posicionamiento en
            línea con éxito. Aprender a hacer contenido para redes sociales es
            indispensable para asumir los retos del día a día y estar a la
            vanguardia en nuevas formas de generar contenido.
          </p>
          <br />
          <p>
            De la mano de Gustavo Serrano, International Publishing Lead en
            BuzzFeed, aprenderás cuáles son las estrategias de contenido más
            importantes que las empresas están implementando en la actualidad.
            También conocerás cómo identificar nuevas audiencias para que puedas
            aplicar un plan de marketing en redes sociales y generes contenido
            de valor.
          </p>
          <br />
          <p>
            Como proyecto final de este curso virtual de content marketing para
            redes sociales, deberás aplicar todos tus conocimientos para
            entregar un pitch completo sobre un nuevo sabor de una marca de
            galletas. Tendrás que utilizar toda tu imaginación y creatividad
            para crear una estrategia de contenido para redes sociales que salga
            de lo convencional y logre cautivar a las audiencias.
          </p>
        </div>
      </div>
      <button
        onClick={onClick}
        className="btn-md btn-invert-gray w-full md:max-w-sm mx-auto my-8 flex justify-center items-center"
      >
        <ExpandMoreIcon
          className={`transform ${
            isExpanded ? '-rotate-90' : 'rotate-90'
          } mr-2`}
        />
        {isExpanded ? 'Mostrar menos' : 'Mostrar más'}
      </button>
    </section>
  );
};

export default Descripcion;
