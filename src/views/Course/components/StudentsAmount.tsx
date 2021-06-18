import PersonIcon from '@material-ui/icons/Person';

const StudentsAmount = () => {
  return (
    <div className="text-gray-800 flex items-center mx-2">
      <PersonIcon
        style={{ fontSize: '22px' }}
        className="fill-current text-secondary-light"
      />
      <span className="mx-1 font-extrabold text-base">35.485 Estudiantes</span>
    </div>
  );
};

export default StudentsAmount;
