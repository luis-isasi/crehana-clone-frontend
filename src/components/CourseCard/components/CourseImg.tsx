import Image from 'next/image';

import useResponsive from '@Hooks/useResponsive';
import { MEDIAQUERY_SM } from '@Constans';
import MostSelling from '@Components/Labels/MostSelling';
import HoverSeeTrailer from './HoverSeeTrailer';

const CourseImg: React.FC<{ inModal: boolean }> = ({ inModal }) => {
  const isMovile = useResponsive({
    maxMediaQuery: MEDIAQUERY_SM,
  });

  if (inModal) {
    return (
      <figure className="h-20 md:min-h-1/2 md:h-1/2 min-w-20 w-20 md:w-full relative z-0">
        <Image
          layout="responsive"
          loader={({ src }) => `${src}`}
          src={'https://source.unsplash.com/random'}
          width={isMovile ? 80 : 320}
          height={isMovile ? 80 : 225}
        />
      </figure>
    );
  }

  return (
    <div className="relative">
      <HoverSeeTrailer />
      {!inModal && (
        <div className="absolute z-3 top-4 left-4">
          <MostSelling />
        </div>
      )}
      <Image
        layout="responsive"
        loader={({ src }) => `${src}`}
        src={'https://source.unsplash.com/random'}
        width={320}
        height={225}
      />
    </div>
  );
};

export default CourseImg;
