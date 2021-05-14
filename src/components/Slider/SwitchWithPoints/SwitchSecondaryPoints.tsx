import { useState, useEffect } from 'react';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';

import { PREVIOUS, NEXT } from '@Constans';
import { handlePreviousAndNext, resetAnimate } from '../utils';
import { PropsSwitchWithPoints } from '../types';

const SwitchSecondaryPoints: React.FC<PropsSwitchWithPoints> = ({
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
            'bg-secondary-main border-secondary-main'
          } rounded-circle h-2 w-2 bg-transparent border-1 mx-1 focus:outline-none`}
          onClick={_handlePreviousAndNext('OTHER', selectIndex)}
        />
      );
    });
  };

  return (
    <div className="h-auto w-full mx-auto flex items-center justify-center z-20">
      <button
        disabled={selectedIndex === 1}
        className="text-secondary-main disabled:text-gray-400 dark:disabled:text-gray-400 outline-none focus:outline-none mx-3"
        onClick={_handlePreviousAndNext(PREVIOUS, selectedIndex - 1)}
      >
        <ArrowBackIosRoundedIcon style={{ fontSize: '20px' }} />
      </button>
      <div className="flex">{renderPointsSections()}</div>
      <button
        disabled={selectedIndex === totalSections}
        className="text-secondary-main disabled:text-gray-400 dark:disabled:text-gray-400 outline-none focus:outline-none mx-3"
        onClick={_handlePreviousAndNext(NEXT, selectedIndex + 1)}
      >
        <ArrowBackIosRoundedIcon
          className="transform rotate-180"
          style={{ fontSize: '20px' }}
        />
      </button>
    </div>
  );
};

export default SwitchSecondaryPoints;
