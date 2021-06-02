const BtnDownload: React.FC = ({ children }) => {
  return (
    <button className="bg-base-dark dark:bg-base-light-dark-mode md:hover:bg-primary-lighter md:transition-colors md:duration-200 md:ease-in-out rounded-md max-w-80 md:min-w-56 py-3 text-lg text-white font-bold w-full mb-2 flex justify-center items-center">
      {children}
    </button>
  );
};

export default BtnDownload;
