import { useState, useEffect } from 'react';
import { MediaQuery } from '@types';

interface Parameters {
  minMediaQuery?: MediaQuery;
  maxMediaQuery?: MediaQuery;
}

const useResponsive = ({
  minMediaQuery = undefined,
  maxMediaQuery = undefined,
}: Parameters) => {
  const [isScreen, setIsScreen] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    validateDimensions();
  }, []);

  useEffect(() => {
    window.addEventListener('resize', validateDimensions);

    return () => {
      window.removeEventListener('resize', validateDimensions);
    };
  }, []);

  const validateDimensions = () => {
    let widthScreen: number = window.innerWidth;

    let screen;

    //Si solo hay un minMediaQuery, solo evaluamos si es mayor a esa media query
    if (minMediaQuery && !maxMediaQuery) {
      screen = widthScreen > minMediaQuery;
    }

    //Si solo hay un maxMediaQuery, solo evaluamos si es min a esa media query
    if (maxMediaQuery && !minMediaQuery) {
      screen = widthScreen < maxMediaQuery;
    }
    //Si solo hay minMediaQuery y maxMediaQuery, evaluamos si es menos al min y al max de la media query
    if (minMediaQuery && maxMediaQuery) {
      screen = widthScreen > minMediaQuery && widthScreen < maxMediaQuery;
    }

    setIsScreen(screen);
  };

  return isScreen;
};

export default useResponsive;
