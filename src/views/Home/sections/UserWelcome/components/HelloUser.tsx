interface Props {
  firstName: string;
}

const HelloUser: React.FC<Props> = ({ firstName }) => {
  return (
    <div className=" text-base-main dark:text-white flex flex-col md:flex-row items-start text-lg md:text-3xl lg:text-4xl lg:my-3 ">
      <p>
        Hola,{' '}
        <strong className="font-semibold">{`${
          firstName ? firstName + '.' : ''
        }`}</strong>
      </p>
      <p className="md:ml-1">¡Te damos la bienvenida!</p>
    </div>
  );
};

export default HelloUser;
