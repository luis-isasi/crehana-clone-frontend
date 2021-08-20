import Image from 'next/image';

import ExpandMoreIcon from '@Components/Icons/ExpandMoreIcon';

const CurrencyType = () => {
  return (
    <button className="dark:bg-base-lighter-dark-mode w-full min-w-max  max-w-64 md:min-w-64 focus:outline-none border border-gray-500 dark:border-transparent rounded-md p-4 flex justify-between items-center">
      <div className="flex items-center text-gray-600 dark:text-white">
        <Image src="/images/PE-2.png" height="16" width="24" />
        <span className="font-bold mx-2">Perú</span>
        <span>S/ ( PEN )</span>
      </div>
      <ExpandMoreIcon className="text-primary-light dark:text-secondary-main transform -rotate-90" />
    </button>
  );
};

export default CurrencyType;
