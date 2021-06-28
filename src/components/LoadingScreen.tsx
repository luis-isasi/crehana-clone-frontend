import Image from 'next/image';

const LoadingScreen = () => {
  return (
    <div className="bg-primary-primary z-50  max-h-screen w-screen h-screen absolute top-0 left-0 flex flex-col justify-center items-center ">
      <Image
        loader={({ src }) => `${src}`}
        src="/images/crehana-loading.gif"
        width={60}
        height={60}
        className="text-white"
        alt="loading-crehana"
      />
    </div>
  );
};

export default LoadingScreen;
