import AppleIcon from '@material-ui/icons/Apple';

import PlayStoreIcon from '@Components/Icons/PlayStoreIcon';
import BtnDownload from '../components/BtnDownload';

const DownloadApp = () => {
  return (
    <div className="flex flex-col justify-start items-center">
      <span className="py-4 dark:text-base-lighter font-bold text-base">
        Descarga nuestra app
      </span>
      <BtnDownload>
        <PlayStoreIcon className="mr-2" /> Google play
      </BtnDownload>
      <BtnDownload>
        <AppleIcon className="mr-2" /> App store
      </BtnDownload>
    </div>
  );
};

export default DownloadApp;
