import { useState, useEffect } from 'react';

import ExpandMoreIcon from '@Components/Icons/ExpandMoreIcon';
import { PREVIOUS, NEXT } from '@Constans';
import { PropsSwitchMovil } from '../types';
import { handlePreviousAndNext, resetAnimate } from '../utils';

const SwitchSliderMovil: React.FC<PropsSwitchMovil> = ({
  totalSections,
  sliderRef,
  colorText,
  marginLeft = 100,
  dark = false,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(1);

  useEffect(() => {
    //cada vez que cambia el total de sections, hacemos que el index vuelva a comenzar
    setSelectedIndex(1);

    //reset animate
    resetAnimate(sliderRef);
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
    <div
      className={`${
        dark && 'dark'
      } h-auto w-full mx-auto flex items-center justify-center my-5 z-30 text-gray-800 dark:text-white`}
    >
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
      <span className="text-gray-800 dark:text-white">
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
