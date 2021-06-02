import LinkFooter from '../components/LinkFooter';

const Company = () => {
  return (
    <div className="flex flex-col items-start min-w-0 w-40">
      <span className="py-5 font-bold text-base">Compañia</span>
      <LinkFooter href="/">Sobre crehana</LinkFooter>
      <LinkFooter href="/">Estamos contratando</LinkFooter>
      <LinkFooter href="/">Crehana para empresas</LinkFooter>
      <LinkFooter href="/">Vuelvete Premium</LinkFooter>
    </div>
  );
};

export default Company;
