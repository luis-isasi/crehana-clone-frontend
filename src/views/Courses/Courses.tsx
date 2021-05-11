import SearchOptions from './components/SearchOptions';
import CourseCard from '@Components/CourseCard';

const Courses = () => {
  return (
    <div>
      <SearchOptions />
      <div className="w-full h-auto">
        <div className="w-full max-w-6xl h-auto  box-border px-5 mx-auto ">
          <h5 className="my-5 font-extrabold sm:text-xl">
            Cursos online recomendados por la comunidad
          </h5>
          <div className="grid grid-flow-row gap-10 sm:gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
            <CourseCard inModal={false} />
            <CourseCard inModal={false} />
            <CourseCard inModal={false} />
            <CourseCard inModal={false} />
            <CourseCard inModal={false} />
            <CourseCard inModal={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
