import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

const CourseInformation = () => {
  return (
    <div className="text-gray-800 font-bold">
      <p className="my-2">Infomación de curso</p>
      <p className="my-3">
        <AccessTimeIcon className="fill-current text-gray-main ml-1 mr-2" />
        <span className="font-light text-sm">Duración: 3h 2m</span>
      </p>
      <p className="my-3">
        <PlayCircleOutlineIcon className="fill-current text-gray-main ml-1 mr-2" />
        <span className="font-light text-sm">
          59 clases de acceso ilimitado
        </span>
      </p>
      <p className="my-3">
        <PlayCircleOutlineIcon className="fill-current text-gray-main ml-1 mr-2" />
        <span className="font-light text-sm">
          Experiencia de aprendizaje especializada
        </span>
      </p>
    </div>
  );
};

export default CourseInformation;
