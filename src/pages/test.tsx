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

  console.log('====================================');
  // console.log({ isMovil });
  console.log({ isTabletOrLaptop });
  // console.log({ isDesktop });
  console.log('====================================');

  return (
    <div className="h-102 w-100 ">
      {isMovil && 'estamos en movil'}
      {isTabletOrLaptop && 'estamos en tablet o laptop'}
      {isDesktop && 'estamos en desktop'}
    </div>
  );
};

export default Test;
