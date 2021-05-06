import Image from 'next/image';

import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import StarRoundedIcon from '@material-ui/icons/StarRounded';

import Link from '@Components/Links/Link';
import LinkPrimary from '@Components/Links/LinkPrimary';
import MostSelling from '@Components/Labels/MostSelling';
import PeopleIcon from '@Components/Icons/PeopleIcon';

const CardInterest = () => {
  return (
    <div className="bg-base-main group rounded-md overflow-hidden w-full h-full flex flex-col">
      <div className="h-1/2 w-full relative bg-transparent">
        <div className="absolute h-full w-full z-2 bg-base-main bg-opacity-80 opacity-0 hover:opacity-100  transition-all duration-200 ease-in  flex items-center justify-center">
          <Link href="/home" className="flex items-center">
            <VisibilityOutlinedIcon />
            <span className="font-bold text-base mx-2">Ver trailer</span>
          </Link>
        </div>
        <div
          className="absolute h-full w-full z-1 box-border p-2  flex flex-col justify-between"
          style={{
            boxShadow: 'inset 0px -20px 100px rgba(24, 27, 50)',
          }}
        >
          <div>
            <MostSelling />
          </div>
          <div className="flex items-center justify-between font-bold text-xs">
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
      <div className="min-h-1/2 h-1/2 w-full box-border  p-4 flex flex-col justify-between text-sm transition-all duration-200 ease-in hover:bg-base-lighter-dark-mode group-hover:bg-base-lighter-dark-mode">
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
