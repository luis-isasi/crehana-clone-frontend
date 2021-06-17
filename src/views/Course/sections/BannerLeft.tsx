import CourseAvatar from '../components/CourseAvatar';
import PayCourse from './PayCourse';
// import PHPayCourse from '@Placeholders/PHPayCourse';

// const PayCourse = dynamic(() => import('./PayCourse'), {
//   loading: () => <PHPayCourse />,
// });

const BannerLeft = () => {
  return (
    <div className="min-w-92 w-92 h-auto bg-transparent">
      <div>
        <CourseAvatar />
      </div>
      <div className="w-full h-auto box-border shadow-lg px-5 pt-2 pb-4 rounded-md overflow-hidden">
        <PayCourse />
      </div>
    </div>
  );
};

export default BannerLeft;
