interface Props {
  firstName: string;
}

const HelloUser: React.FC<Props> = ({ firstName }) => {
  return (
    <div className="flex flex-col md:flex-row  items-start ">
      <p>
        Hola,{' '}
        <strong className="font-semibold">{`${
          firstName ? firstName + '.' : null
        }`}</strong>
      </p>
      <p className="md:ml-1">¡Te damos la bienvenida!</p>
    </div>
  );
};

export default HelloUser;
