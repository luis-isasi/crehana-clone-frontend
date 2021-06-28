import Image from 'next/image';

const CategoriesLoading = () => {
  return (
    <div className="bg-base-light-dark-mode z-20 rounded-md absolute top-17 shadow-xl min-w-3xl w-3x1 min-h-98 h-98 flex justify-center items-center">
      <Image
        loader={({ src }) => `${src}`}
        src="/images/crehana-loading.gif"
        width={50}
        height={50}
        className="text-white"
        alt="loading-crehana"
      />
    </div>
  );
};

export default CategoriesLoading;
