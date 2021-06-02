import Image from 'next/image';

import ExpandMoreIcon from '@Components/Icons/ExpandMoreIcon';

const CurrencyType = () => {
  return (
    <button className="w-full max-w-64  focus:outline-none border border-gray-500 rounded-md p-4 flex justify-between items-center">
      <div className="flex items-center text-gray-600">
        <Image src="images/PE-2.png" height="16" width="24" />
        <span className="font-bold mx-2">Perú</span>
        <span>S/ ( PEN )</span>
      </div>
      <ExpandMoreIcon className="text-primary-light transform -rotate-90" />
    </button>
  );
};

export default CurrencyType;
