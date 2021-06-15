import Starts from '../components/Starts';
import StudentsAmount from '../components/StudentsAmount';
import Popular from '@Components/Labels/Popular';

const StudentsAndStarts = () => {
  return (
    <div className="my-4 flex flex-col md:flex-row md:items-center">
      <Popular />
      <div className="flex flex-wrap my-4 md:mx-3">
        <StudentsAmount />
        <Starts />
      </div>
      <span className="text-gray-400">Actualizado el 08/2019</span>
    </div>
  );
};

export default StudentsAndStarts;
