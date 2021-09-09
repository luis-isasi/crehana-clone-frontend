import Image from 'next/image';
import dynamic from 'next/dynamic';

import useResponsive from '@Hooks/useResponsive';
import { MEDIAQUERY_SM, MEDIAQUERY_LG } from '@Constans';
import MostSelling from '@Components/Labels/MostSelling';
import { DataTrailer } from '../ModalTrailer';

const HoverSeeTrailer = dynamic(() => import('./HoverSeeTrailer'));

const CourseImg: React.FC<{ inModal: boolean; dataTrailer: DataTrailer }> = ({
  inModal,
  dataTrailer,
}) => {
  const isMobile = useResponsive({
    maxMediaQuery: MEDIAQUERY_SM,
  });

  const fromLaptop = useResponsive({
    minMediaQuery: MEDIAQUERY_LG,
  });

  if (inModal) {
    return (
      <figure className="h-20 md:min-h-1/2 md:h-1/2 min-w-20 w-20 md:w-full relative z-0">
        <Image
          layout="responsive"
          loader={({ src }) => `${src}`}
          src={'https://source.unsplash.com/random'}
          width={isMobile ? 80 : 320}
          height={isMobile ? 80 : 225}
        />
      </figure>
    );
  }

  return (
    <div className="relative">
      {fromLaptop && <HoverSeeTrailer dataTrailer={dataTrailer} />}
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
