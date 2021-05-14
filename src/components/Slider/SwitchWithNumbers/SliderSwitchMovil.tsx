import { useEffect } from 'react';

import ExpandMoreIcon from '@Components/Icons/ExpandMoreIcon';
import { PREVIOUS, NEXT } from '@Constans';
import { PropsSwitchMovil } from '../types';
import { handlePreviousAndNext, resetAnimate } from '../utils';

const SwitchSliderMovil: React.FC<PropsSwitchMovil> = ({
  selectedIndex,
  setSelectedIndex,
  totalSections,
  sliderRef,
  colorText,
  marginLeft = 100,
}) => {
  useEffect(() => {
    //cada vez que renderizamos el switch volvemos el index a 0
    setSelectedIndex(1);

    //We save the slider's ref, for later use in the cleanup function
    let _sliderRef = sliderRef;

    return () => {
      resetAnimate(_sliderRef);
    };
  }, [totalSections]);

  const _handlePreviousAndNext = (
    type: typeof NEXT | typeof PREVIOUS,
    newIndex: number
  ) => () => {
    handlePreviousAndNext({
      type,
      newIndex,
      marginLeft,
      selectedIndex,
      setSelectedIndex,
      sliderRef,
      totalSections,
    });
  };

  return (
    <div className="h-auto w-full mx-auto flex items-center justify-center my-5 z-30 text-gray-800 dark:text-white">
      <button
        disabled={selectedIndex === 1}
        className={`${
          colorText ||
          'text-primary-main dark:text-secondary-main disabled:text-gray-400 dark:disabled:text-gray-400'
        }  outline-none focus:outline-none mx-8`}
        onClick={_handlePreviousAndNext(PREVIOUS, selectedIndex - 1)}
      >
        <ExpandMoreIcon className="transform rotate-180 w-8 h-8" />
      </button>
      <span>
        <strong>{`${selectedIndex}`}</strong>
        {` / ${totalSections}`}
      </span>
      <button
        disabled={selectedIndex === totalSections}
        className={`${
          colorText ||
          'text-primary-main dark:text-secondary-main disabled:text-gray-400 dark:disabled:text-gray-400'
        }  outline-none focus:outline-none mx-8`}
        onClick={_handlePreviousAndNext(NEXT, selectedIndex + 1)}
      >
        <ExpandMoreIcon className="w-8 h-8" />
      </button>
    </div>
  );
};

export default SwitchSliderMovil;
