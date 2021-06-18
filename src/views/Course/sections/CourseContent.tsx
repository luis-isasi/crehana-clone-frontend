import WillLearn from '../components/CourseContent/WillLearn';
import Descripcion from '../components/CourseContent/Descripcion';
import Temary from '../components/CourseContent/Temary';
import CourseDificult from '../components/CourseContent/CourseDificult';
import NewSkills from '../components/CourseContent/NewSkills';

const CourseContent = () => {
  return (
    <div className="w-full h-auto my-10">
      <WillLearn />
      <Descripcion />
      <Temary />
      <CourseDificult />
      <NewSkills />
    </div>
  );
};

export default CourseContent;
