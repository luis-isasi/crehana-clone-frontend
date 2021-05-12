import { useEffect } from 'react';

import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import { PREVIOUS, NEXT } from '@Constans';

interface Props {
  selectedIndex: number;
  setSelectedIndex: (selectedIndex: number) => void;
  totalSections: number;
  sliderRef: React.RefObject<HTMLUListElement>;
}

const SwitchWithPoints: React.FC<Props> = ({
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
    <div className="h-auto w-full mx-auto flex items-center justify-center my-5 z-30">
      <button
        disabled={selectedIndex === 1}
        className="disabled:text-gray-400 outline-none focus:outline-none mx-8"
        onClick={handlePreviousAndNext(PREVIOUS, selectedIndex - 1)}
      >
        <ArrowBackIosRoundedIcon />
      </button>
      <span>
        <strong>{`${selectedIndex}`}</strong>
        {` / ${totalSections}`}
      </span>
      <button
        disabled={selectedIndex === totalSections}
        className="disabled:text-gray-400 outline-none focus:outline-none mx-8"
        onClick={handlePreviousAndNext(NEXT, selectedIndex + 1)}
      >
        <ArrowBackIosRoundedIcon className="transform rotate-180" />
      </button>
    </div>
  );
};

export default SwitchWithPoints;
