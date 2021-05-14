import { NEXT, PREVIOUS } from '@Constans';
import { ParametersHandlePreviousAndNext } from './types';

export const handlePreviousAndNext = ({
  type,
  newIndex,
  marginLeft,
  selectedIndex,
  totalSections,
  sliderRef,
  setSelectedIndex,
}: ParametersHandlePreviousAndNext) => {
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

export const resetAnimate = (_sliderRef: any) => {
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
