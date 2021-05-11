import CourseCard from '@Components/CourseCard';

const Test = () => {
  return (
    <div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-2">
      <CourseCard inModal={true} />
      <CourseCard inModal={true} />
      <CourseCard inModal={true} />
      <CourseCard inModal={true} />
      <CourseCard inModal={true} />
      <CourseCard inModal={true} />
      <CourseCard inModal={true} />
      <CourseCard inModal={true} />
      <CourseCard inModal={true} />
      <CourseCard inModal={true} />
      <CourseCard inModal={true} />
      <CourseCard inModal={true} />
      <CourseCard inModal={true} />
    </div>
  );
};

export default Test;
