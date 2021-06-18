const NewSkills = () => {
  const renderNewSkills = () =>
    ItemsSkills.map(({ title, description }) => {
      return (
        <div className="bg-gray-lighter rounded-lg px-6 py-4 my-2">
          <h5 className="text-lg font-medium mt-1 mb-2">{title}</h5>
          <p className="font-light text-base">{description}</p>
        </div>
      );
    });

  return (
    <section>
      <h4 className="course-content-title box-border py-1 md:py-4">
        ¿Qué habilidades voy a aprender en este curso de manejo de redes?
      </h4>
      <div>{renderNewSkills()}</div>
    </section>
  );
};

const ItemsSkills = [
  {
    title: 'Redes Sociales',
    description:
      'Aprenderás a manejar tus redes sociales para alcanzar tus objetivos y hacer crecer tu marca.',
  },
  {
    title: 'Estrategia de redes sociales',
    description:
      'Conocerás cómo armar una estrategia de redes sociales, reconociendo sus fases e implementación.',
  },
  {
    title: 'Community Management',
    description:
      'Aprenderás a distribuir y planificar contenido relevante en redes sociales para atraer a tu público objetivo, así como definir tu estilo y tono.',
  },
];
export default NewSkills;
