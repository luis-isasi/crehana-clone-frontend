import NewCourses from './NewCourses';
import YourInterests from './YourInterests';

const Recomendations = () => {
  return (
    <div className="h-auto w-full dark:bg-base-dark text-gray-900 dark:text-white">
      <NewCourses />
      <YourInterests />
    </div>
  );
};

export default Recomendations;
