import { useEffect } from 'react';

import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import { PREVIOUS, NEXT } from '@Constans';

interface Props {
  selectedIndex: number;
  setSelectedIndex: (selectedIndex: number) => void;
  totalSections: number;
  sliderRef: React.RefObject<HTMLUListElement>;
  marginLeft?: number;
}

const SwitchWithPoints: React.FC<Props> = ({
  selectedIndex,
  setSelectedIndex,
  totalSections,
  sliderRef,
  marginLeft = 100,
}) => {
  useEffect(() => {
    //cada vez que cambia el total de sections, hacemos que el index vuelva a comenzar
    setSelectedIndex(1);

    //We save the slider's ref, for later use in the cleanup function
    let _sliderRef = sliderRef;

    return () => {
      //reset marginleft to 0%
      _sliderRef.current.animate(
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
    };
  }, [totalSections]);

  const handlePreviousAndNext = (
    type: typeof NEXT | typeof PREVIOUS | 'OTHER',
    newIndex: number
  ) => () => {
    if (selectedIndex === totalSections && type === NEXT) return;
    if (selectedIndex === 1 && type === PREVIOUS) return;

    sliderRef.current.animate(
      [
        {
          marginLeft: `-${(newIndex - 1) * marginLeft}%`,
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

  const renderPointsSections = () => {
    const arr = Array.from({ length: totalSections });

    return arr.map((data, i) => {
      //creamos el index para cada point desde 1, ya que el handlePreviousAndNext
      //ya aplica el margin dependiendo al index que le pasemos
      let selectIndex = i + 1;
      return (
        <button
          key={`point-slider${selectIndex}`}
          className={`${
            selectedIndex === selectIndex &&
            'bg-primary-main dark:bg-secondary-main'
          } rounded-circle h-3 w-3 bg-gray-300 dark:bg-gray-700 mx-2 focus:outline-none`}
          onClick={handlePreviousAndNext('OTHER', selectIndex)}
        />
      );
    });
  };

  return (
    <div className="h-auto w-full mx-auto flex items-center justify-center my-5 z-30">
      <button
        disabled={selectedIndex === 1}
        className="text-primary-main dark:text-secondary-main disabled:text-gray-400 dark:disabled:text-gray-400 outline-none focus:outline-none mx-4"
        onClick={handlePreviousAndNext(PREVIOUS, selectedIndex - 1)}
      >
        <ArrowBackIosRoundedIcon />
      </button>
      <div className="flex">{renderPointsSections()}</div>
      <button
        disabled={selectedIndex === totalSections}
        className="text-primary-main dark:text-secondary-main disabled:text-gray-400 dark:disabled:text-gray-400 outline-none focus:outline-none mx-4"
        onClick={handlePreviousAndNext(NEXT, selectedIndex + 1)}
      >
        <ArrowBackIosRoundedIcon className="transform rotate-180" />
      </button>
    </div>
  );
};

export default SwitchWithPoints;
