import AppleIcon from '@material-ui/icons/Apple';

import PlayStoreIcon from '@Components/Icons/PlayStoreIcon';

const DowlandApp = () => {
  return (
    <div className="flex flex-col justify-start items-center">
      <span className="py-4 font-bold text-base">Descarga nuestra app</span>
      <button className="bg-base-dark rounded-md py-3 text-lg text-white font-bold w-full mb-2 flex justify-center items-center">
        <PlayStoreIcon className="mr-2" /> Google play
      </button>
      <button className="bg-base-dark rounded-md py-3 text-lg text-white font-bold w-full mb-2 flex justify-center">
        <AppleIcon className="mr-2" /> App store
      </button>
    </div>
  );
};

export default DowlandApp;
