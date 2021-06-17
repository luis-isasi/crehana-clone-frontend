import { MEDIAQUERY_LG, MEDIAQUERY_XL } from '@Constans';
import useResponsive from '@Hooks/useResponsive';
import CourseAvatar from './components/CourseAvatar';
import Author from './components/Author';
import StudentsAndStarts from './sections/StudentsAndStarts';
import PayCourse from './sections/PayCourse';
import BannerLeft from './sections/BannerLeft';

const Course = () => {
  const isMaxTablet = useResponsive({
    maxMediaQuery: MEDIAQUERY_LG,
  });
  const isDesktop = useResponsive({
    minMediaQuery: MEDIAQUERY_XL,
  });

  return (
    <div className="w-full h-auto text-gray-500">
      {isMaxTablet && <CourseAvatar />}
      <div className="w-full h-auto  px-5 md:px-10 md:max-w-3xl  lg:max-w-4xl xl:max-w-7xl mx-auto  py-8 flex">
        <section className="w-full h-auto ">
          <h5 className="text-gray-800 font-extrabold text-2xl md:text-4xl mb-3">
            Curso online de Redes sociales desde cero: Logra el éxito digital
          </h5>
          <p className="my-5">
            Gestionar nuestras redes sociales ya no es suficiente, hay que
            implementar una estrategia sólida que sea capaz de hacer crecer tu
            marca o negocio.
          </p>
          <StudentsAndStarts />
          <Author />
          {!isDesktop && (
            <div className="w-full h-auto border-t-1 border-gray-main py-5">
              <PayCourse />
            </div>
          )}
        </section>
        {isDesktop && (
          <div className="ml-5">
            <BannerLeft />
          </div>
        )}
      </div>
    </div>
  );
};

export default Course;
