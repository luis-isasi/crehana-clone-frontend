import { useState, useEffect } from 'react';

import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import { PREVIOUS, NEXT } from '@Constans';
import { PropsSwitchDesktop } from '../types';
import { handlePreviousAndNext, resetAnimate } from '../utils';

const SwitchSliderDesktop: React.FC<PropsSwitchDesktop> = ({
  totalSections,
  sliderRef,
  marginLeft = 100,
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
    <div className="flex items-center justify-between min-w-47">
      <span>
        <strong>{`${selectedIndex}`}</strong>
        {` / ${totalSections}`}
      </span>
      <div className="min-w-28 flex items-center justify-between">
        <button
          disabled={selectedIndex === 1}
          className="border-2 box-border  disabled:border-transparent border-gray-400 hover:border-primary-main dark:hover:border-secondary-main focus:border-primary-main dark:focus:border-secondary-main focus:outline-none text-primary-main dark:text-secondary-main disabled:text-gray-400 p-3 rounded-md"
          onClick={_handlePreviousAndNext(PREVIOUS, selectedIndex - 1)}
        >
          <ArrowBackIosRoundedIcon />
        </button>
        <button
          disabled={selectedIndex === totalSections}
          className="border-2 box-border disabled:border-transparent border-gray-400 hover:border-primary-main dark:hover:border-secondary-main focus:border-primary-main dark:focus:border-secondary-main focus:outline-none text-primary-main dark:text-secondary-main disabled:text-gray-400 p-3 rounded-md "
          onClick={_handlePreviousAndNext(NEXT, selectedIndex + 1)}
        >
          <ArrowBackIosRoundedIcon className="transform rotate-180" />
        </button>
      </div>
    </div>
  );
};

export default SwitchSliderDesktop;
