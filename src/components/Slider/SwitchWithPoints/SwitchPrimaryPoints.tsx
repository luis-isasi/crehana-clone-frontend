import { useEffect } from 'react';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';

import { PREVIOUS, NEXT } from '@Constans';
import { handlePreviousAndNext, resetAnimate } from '../utils';
import { PropsSwitchWithPoints } from '../types';

const SwitchPrimaryPoints: React.FC<PropsSwitchWithPoints> = ({
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
      resetAnimate(_sliderRef);
    };
  }, [totalSections]);

  const _handlePreviousAndNext = (
    type: typeof NEXT | typeof PREVIOUS | 'OTHER',
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
          onClick={_handlePreviousAndNext('OTHER', selectIndex)}
        />
      );
    });
  };

  return (
    <div className="h-auto w-full mx-auto flex items-center justify-center my-5 z-20">
      <button
        disabled={selectedIndex === 1}
        className="text-primary-main dark:text-secondary-main disabled:text-gray-400 dark:disabled:text-gray-400 outline-none focus:outline-none mx-4"
        onClick={_handlePreviousAndNext(PREVIOUS, selectedIndex - 1)}
      >
        <ArrowBackIosRoundedIcon />
      </button>
      <div className="flex">{renderPointsSections()}</div>
      <button
        disabled={selectedIndex === totalSections}
        className="text-primary-main dark:text-secondary-main disabled:text-gray-400 dark:disabled:text-gray-400 outline-none focus:outline-none mx-4"
        onClick={_handlePreviousAndNext(NEXT, selectedIndex + 1)}
      >
        <ArrowBackIosRoundedIcon className="transform rotate-180" />
      </button>
    </div>
  );
};

export default SwitchPrimaryPoints;
