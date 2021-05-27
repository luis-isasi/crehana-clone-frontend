import LogoCrehana from '@Components/Icons/LogoCrehana';

const LoadingScreen = () => {
  return (
    <div className="bg-primary-primary z-50  max-h-screen w-screen h-screen absolute top-0 left-0 flex flex-col justify-center items-center ">
      <LogoCrehana className="w-20 h-20" />
      <p className="text-white text-2xl font-medium my-5">
        Cargando crehana...
      </p>
    </div>
  );
};

export default LoadingScreen;
