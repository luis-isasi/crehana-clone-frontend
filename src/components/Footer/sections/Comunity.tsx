import LinkFooter from '../components/LinkFooter';

const Comunity = () => {
  return (
    <div className="flex flex-col  items-start min-w-0 w-40">
      <span className="py-5 dark:text-base-lighter font-bold text-base">
        Comunidad
      </span>
      <LinkFooter href="/">Becas</LinkFooter>
      <LinkFooter href="/">Historias de éxito</LinkFooter>
      <LinkFooter href="/">Galería de proyectos</LinkFooter>
      <LinkFooter href="/">Recursos</LinkFooter>
      <LinkFooter href="/">Blog</LinkFooter>
      <LinkFooter href="/">Live</LinkFooter>
    </div>
  );
};

export default Comunity;
