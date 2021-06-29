import LogoCrehana from '@Components/Icons/LogoCrehana';

const Error = () => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <p className="mr-3">Ups! Parece que ocurrió un error 🙁</p>
      <LogoCrehana className="text-white" />
    </div>
  );
};

export default Error;
