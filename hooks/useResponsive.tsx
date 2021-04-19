import { useState, useEffect } from 'react';

interface Parameters {
  type: 'max' | 'min';
  mediaquery: number;
}

const useResponsive = ({ type, mediaquery }: Parameters) => {
  const [isScreen, setIsScreen] = useState<boolean | undefined>(undefined);
  const [screenWidth, setScreenWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    let screen;
    if (type === 'max') {
      screen = window.innerWidth < mediaquery;
    } else {
      screen = window.innerWidth > mediaquery;
    }
    setIsScreen(screen);
  }, [screenWidth]);

  useEffect(() => {
    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  const updateDimensions = () => {
    const width: number = window.innerWidth;

    setScreenWidth(width);
  };

  return [isScreen];
};

export default useResponsive;
