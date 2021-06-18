import { MEDIAQUERY_XL } from '@Constans';
import useResponsive from '@Hooks/useResponsive';
import Author from '../components/Author';
import StudentsAndStarts from '../sections/StudentsAndStarts';
import PayCourse from '../sections/PayCourse';

const MainCourseInformation = () => {
  const isDesktop = useResponsive({
    minMediaQuery: MEDIAQUERY_XL,
  });

  return (
    <div>
      <h5 className="text-gray-800 font-extrabold text-2xl md:text-4xl mb-3">
        Curso online de Redes sociales desde cero: Logra el éxito digital
      </h5>
      <p className="my-5">
        Gestionar nuestras redes sociales ya no es suficiente, hay que
        implementar una estrategia sólida que sea capaz de hacer crecer tu marca
        o negocio.
      </p>
      <StudentsAndStarts />
      <Author />
      {!isDesktop && (
        <div className="w-full h-auto border-t-1 border-gray-main py-5">
          <PayCourse />
        </div>
      )}
    </div>
  );
};

export default MainCourseInformation;
