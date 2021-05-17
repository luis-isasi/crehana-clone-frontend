import CourseCard from '@Components/CourseCard';

const RecommendedCourses = () => {
  return (
    <section>
      <h5 className="mb-7 font-extrabold sm:text-xl md:text-2xl">
        Cursos online recomendados por la comunidad
      </h5>
      <div className="grid grid-flow-row gap-10 sm:gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
        <CourseCard inModal={false} />
        <CourseCard inModal={false} />
        <CourseCard inModal={false} />
        <CourseCard inModal={false} />
      </div>
    </section>
  );
};

export default RecommendedCourses;
