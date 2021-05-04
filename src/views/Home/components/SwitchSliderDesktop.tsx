import React, { useEffect } from 'react';

import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import { PREVIOUS, NEXT } from '../contants';

interface Props {
  selectedIndex: number;
  setSelectedIndex: (selectedIndex: number) => void;
  totalSections: number;
  sliderRef: React.RefObject<HTMLUListElement>;
}

const SwitchSliderDesktop: React.FC<Props> = ({
  selectedIndex,
  setSelectedIndex,
  totalSections,
  sliderRef,
}) => {
  useEffect(() => {
    //cada vez que cambia el total de sections, hacemos que el index vuelva a comenzar
    setSelectedIndex(1);
  }, [totalSections]);

  const handlePreviousAndNext = (
    type: typeof NEXT | typeof PREVIOUS,
    newIndex: number
  ) => () => {
    if (selectedIndex === 12 && type === NEXT) return;
    if (selectedIndex === 1 && type === PREVIOUS) return;

    sliderRef.current.animate(
      [
        {
          marginLeft: `-${newIndex - 1}00%`,
        },
      ],
      {
        duration: 150,
        iterations: 1,
        easing: 'ease-in',
        fill: 'forwards',
      }
    );
    setSelectedIndex(newIndex);
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
          className="border disabled:border-transparent border-gray-400 hover:border-secondary-main focus:border-secondary-main focus:outline-none text-secondary-main disabled:text-gray-400 p-3 rounded-md"
          onClick={handlePreviousAndNext(PREVIOUS, selectedIndex - 1)}
        >
          <ArrowBackIosRoundedIcon />
        </button>

        <button
          disabled={selectedIndex === totalSections}
          className="border disabled:border-transparent border-gray-400 hover:border-secondary-main focus:border-secondary-main focus:outline-none text-secondary-main disabled:text-gray-400 p-3 rounded-md "
          onClick={handlePreviousAndNext(NEXT, selectedIndex + 1)}
        >
          <ArrowBackIosRoundedIcon className="transform rotate-180" />
        </button>
      </div>
    </div>
  );
};

export default SwitchSliderDesktop;
