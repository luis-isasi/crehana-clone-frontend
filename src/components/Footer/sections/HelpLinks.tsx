import LinkFooter from '../components/LinkFooter';

const HelpLinks = () => {
  return (
    <div className="flex flex-col items-start min-w-0 w-40">
      <span className="py-5 font-bold text-base">Enlaces de ayuda</span>
      <LinkFooter href="/">Centro de ayuda</LinkFooter>
      <LinkFooter href="/">Políticas de privacidad</LinkFooter>
      <LinkFooter href="/">Política de cookies</LinkFooter>
      <LinkFooter href="/">Solicitud ARCO</LinkFooter>
      <LinkFooter href="/">Términos y condiciones</LinkFooter>
      <LinkFooter href="/">Libro de reclamaciones</LinkFooter>
    </div>
  );
};

export default HelpLinks;
