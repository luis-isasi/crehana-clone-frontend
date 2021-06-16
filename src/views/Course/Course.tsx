import CourseAvatar from './components/CourseAvatar';
import Author from './components/Author';
import StudentsAndStarts from './sections/StudentsAndStarts';
import PayCourse from './sections/PayCourse';

const Course = () => {
  return (
    <div className="w-full h-auto text-gray-500">
      <CourseAvatar />
      <div className="w-full px-5 md:px-10 lg:max-w-4xl lg:mx-auto  py-8 h-auto">
        <section>
          <h5 className="text-gray-800 font-extrabold text-2xl md:text-4xl mb-3">
            Curso online de Redes sociales desde cero: Logra el éxito digital
          </h5>
          <p className="mb-3">
            Gestionar nuestras redes sociales ya no es suficiente, hay que
            implementar una estrategia sólida que sea capaz de hacer crecer tu
            marca o negocio.
          </p>
          <StudentsAndStarts />
          <Author />
        </section>
        <PayCourse />
      </div>
    </div>
  );
};

export default Course;
