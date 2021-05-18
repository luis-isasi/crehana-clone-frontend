import { NEXT, PREVIOUS } from '@Constans';
import React from 'react';
import {
  ParametersHandlePreviousAndNext,
  InitAutomaticSlider,
  HandleAutomaticSlider,
} from './types';

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
      duration: 250,
      iterations: 1,
      easing: 'ease-in',
      fill: 'forwards',
    }
  );

  setSelectedIndex(newIndex);
};

export const resetAnimate = (_sliderRef: React.RefObject<HTMLUListElement>) => {
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

export const initAutomaticSlider = ({
  refIntervalAnimate,
  setSelectedIndex,
  intervalTime,
  marginLeft,
  sliderRef,
  duration,
  easing,
  totalSections,
  initIndex = 2,
}: InitAutomaticSlider) => {
  let _index = initIndex;
  refIntervalAnimate.current = setInterval(() => {
    setSelectedIndex(_index);

    sliderRef.current.animate(
      [
        {
          marginLeft: `-${(_index - 1) * marginLeft}%`,
        },
      ],
      {
        duration,
        easing,
        iterations: 1,
        fill: 'forwards',
      }
    );

    //we get the following index
    if (_index >= totalSections) _index = 1;
    else _index++;
  }, intervalTime);
};

export const handleAutomaticSlider = ({
  refIntervalAnimate,
  setSelectedIndex,
  sliderRef,
  newIndex,
  intervalTime,
  marginLeft,
  easing,
  duration,
  totalSections,
}: HandleAutomaticSlider) => {
  let _initIndex;
  //asignamos el proximos index, no el actual, ya que setInterval se ejecuta despues del tiempo establecido
  //y nosotros queremos que se muestre el siguiente card, no el que se seleccionó
  if (newIndex >= totalSections) _initIndex = 1;
  else _initIndex = newIndex + 1;

  //eliminamos the setInterval anterior para crear otro desde el nuevo index
  if (refIntervalAnimate.current) {
    clearInterval(refIntervalAnimate.current);
  }

  //volvemos a crear a animacion desde el index presionado
  initAutomaticSlider({
    refIntervalAnimate,
    setSelectedIndex,
    intervalTime,
    marginLeft,
    sliderRef,
    duration,
    easing,
    totalSections,
    initIndex: _initIndex,
  });
};
