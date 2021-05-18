import Image from 'next/image';

import StarRoundedIcon from '@material-ui/icons/StarRounded';

import LinkPrimary from '@Components/Links/LinkPrimary';
import MostSelling from '@Components/Labels/MostSelling';
import PeopleIcon from '@Components/Icons/PeopleIcon';
import HoverSeeTrailer from '@Components/CourseCard/components/HoverSeeTrailer';

const CardInterest = () => {
  return (
    <div className="dark:bg-base-main text-gray-900 shadow-md dark:text-white group rounded-md overflow-hidden w-full min-h-82 h-auto flex flex-col">
      <div className="h-1/2 w-full relative bg-transparent">
        <HoverSeeTrailer />
        <div
          className="absolute h-full w-full z-1 box-border p-2  flex flex-col justify-between"
          style={{
            boxShadow: 'inset 0px -20px 100px rgba(24, 27, 50)',
          }}
        >
          <div>
            <MostSelling />
          </div>
          <div className="text-white flex items-center justify-between font-bold text-xs">
            <span className="flex items-center">
              <PeopleIcon className="fill-current text-white w-4 mr-1" />
              10456 estudiantes
            </span>
            <span className="flex items-center">
              <StarRoundedIcon
                className="fill-current text-yellow-400"
                style={{ fontSize: '20px' }}
              />
              4.82
            </span>
          </div>
        </div>
        <Image
          layout="fill"
          loader={({ src }) => `${src}`}
          src={'https://source.unsplash.com/random'}
          priority={true}
          className="object-cover"
        />
      </div>
      <div className="min-h-1/2 h-1/2 w-full box-border p-4 flex flex-col justify-between text-sm transition-all duration-200 ease-in dark:hover:bg-base-lighter-dark-mode dark:group-hover:bg-base-lighter-dark-mode">
        <h5 className="font-bold text-sm">
          Curso online de WordPress: Diseña y desarrolla páginas web desde cero
        </h5>
        <span className="text-xs">Por Marina Rodrigo</span>
        <LinkPrimary href="/home">Detalles del curso</LinkPrimary>
      </div>
    </div>
  );
};

export default CardInterest;
