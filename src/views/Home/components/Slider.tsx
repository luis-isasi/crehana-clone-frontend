import React, { useState } from 'react';

import { MEDIAQUERY_MD, MEDIAQUERY_XL } from '@Constans';
import useResponsive from '@Hooks/useResponsive';

interface Props {
  Card: () => JSX.Element;
  heightAndWidth?: string;
  sliderRef: React.RefObject<HTMLUListElement>;
}

const Slider: React.FC<Props> = ({ Card, heightAndWidth, sliderRef }) => {
  const isMovil = useResponsive({
    maxMediaQuery: MEDIAQUERY_MD,
  });
  const isTabletOrLaptop = useResponsive({
    minMediaQuery: MEDIAQUERY_MD,
    maxMediaQuery: MEDIAQUERY_XL,
  });
  const isDesktop = useResponsive({
    minMediaQuery: MEDIAQUERY_XL,
  });

  const renderImgMovil = () => {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    return array.map((index) => {
      return (
        <li key={index} className="h-full w-full">
          <Card />
        </li>
      );
    });
  };

  const renderImgLaptop = () => {
    let array = [1, 2, 3, 4];
    return array.map((index) => {
      return (
        <li
          key={index}
          className="h-full w-100 grid grid-flow-col grid-cols-3 gap-6"
        >
          <Card />
          <Card />
          <Card />
        </li>
      );
    });
  };

  const renderImgDesktop = () => {
    let array = [1, 2, 3];
    return array.map((index) => {
      return (
        <li
          key={index}
          className="h-full w-100 grid grid-flow-col grid-cols-4 gap-6"
        >
          <Card />
          <Card />
          <Card />
          <Card />
        </li>
      );
    });
  };

  return (
    <div
      className={`${
        heightAndWidth || 'min-h-88 h-88 md:min-h-96 md:h-96 w-full'
      } overflow-hidden`}
    >
      <ul ref={sliderRef} className="flex h-full w-1200 md:w-400 xl:w-300">
        {isMovil && renderImgMovil()}
        {isTabletOrLaptop && renderImgLaptop()}
        {isDesktop && renderImgDesktop()}
      </ul>
    </div>
  );
};

export default Slider;
