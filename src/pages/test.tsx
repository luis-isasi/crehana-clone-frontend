import useResponsive from '@Hooks/useResponsive';
import { MEDIAQUERY_MD, MEDIAQUERY_XL } from '@Constans';

const Test = () => {
  const [isMovil] = useResponsive({
    maxMediaQuery: MEDIAQUERY_MD,
  });
  const [isTabletOrLaptop] = useResponsive({
    minMediaQuery: MEDIAQUERY_MD,
    maxMediaQuery: MEDIAQUERY_XL,
  });
  const [isDesktop] = useResponsive({
    minMediaQuery: MEDIAQUERY_XL,
  });

  return (
    <div className="relative bg-blue-300 h-102 w-100 ">
      <div className="bg-primary-light absolute  bottom-0 h-40 w-full"></div>
      <div className="bg-red-500  h-98 w-full "></div>
    </div>
  );
};

export default Test;
