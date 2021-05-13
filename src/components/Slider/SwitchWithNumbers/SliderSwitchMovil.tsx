import { useEffect } from 'react';

import { PREVIOUS, NEXT } from '@Constans';
import ExpandMoreIcon from '@Components/Icons/ExpandMoreIcon';

interface Props {
  selectedIndex: number;
  setSelectedIndex: (selectedIndex: number) => void;
  totalSections: number;
  sliderRef: React.RefObject<HTMLUListElement>;
  colorText?: string;
}

const SwitchSliderMovil: React.FC<Props> = ({
  selectedIndex,
  setSelectedIndex,
  totalSections,
  sliderRef,
  colorText,
}) => {
  useEffect(() => {
    //cada vez que renderizamos el switch volvemos el index a 0
    setSelectedIndex(1);

    //reset animate to 0%
    sliderRef.current.animate(
      [
        {
          marginLeft: '0%',
        },
      ],
      {
        iterations: 1,
        fill: 'forwards',
      }
    );
  }, [totalSections]);

  const handlePreviousAndNext = (
    type: typeof NEXT | typeof PREVIOUS,
    newIndex: number
  ) => () => {
    if (selectedIndex === totalSections && type === NEXT) return;
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
    <div className="h-auto w-full mx-auto flex items-center justify-center my-5 z-30 text-gray-800 dark:text-white">
      <button
        disabled={selectedIndex === 1}
        className={`${
          colorText ||
          'text-primary-main dark:text-secondary-main disabled:text-gray-400 dark:disabled:text-gray-400'
        }  outline-none focus:outline-none mx-8`}
        onClick={handlePreviousAndNext(PREVIOUS, selectedIndex - 1)}
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
        onClick={handlePreviousAndNext(NEXT, selectedIndex + 1)}
      >
        <ExpandMoreIcon className="w-8 h-8" />
      </button>
    </div>
  );
};

export default SwitchSliderMovil;
