import LogoCrehana from 'components/Icons/LogoCrehana';

const LoadingScreen = () => {
  return (
    <div className="bg-primary-primary z-50  max-h-screen w-screen h-screen absolute top-0 left-0 flex flex-col justify-center items-center ">
      <LogoCrehana />
      <p className="text-white text-base font-semibold my-3">
        Cargando crehana...
      </p>
    </div>
  );
};

export default LoadingScreen;
