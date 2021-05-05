import Image from 'next/image';

import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Arrow from '@Components/Icons/Arrow';
import Link from '@Components/Link';

const CardCourse = () => {
  return (
    <div className="group relative rounded-md overflow-hidden w-full h-full cursor-pointer">
      <Image
        layout="fill"
        loader={({ src }) => `${src}`}
        src={'https://source.unsplash.com/random'}
        priority={true}
        alt="cardCourse"
        className="object-cover absolute transform group-hover:scale-110 transition-all duration-300 ease-out "
      />
      <div className="h-auto w-full box-border p-5 absolute -bottom-13 group-hover:bottom-0 transition-all duration-300 ease-out flex flex-col justify-end font-semibold ">
        <span className="text-sm font-normal mt-2">NEGOCIOS</span>
        <p className="mt-2">Hiring Managers: Cómo entrevistar a un candidato</p>
        <time className="text-xs flex items-center mt-2">
          <AccessTimeIcon className="mr-2" style={{ fontSize: '14px' }} /> 2h
          58m
        </time>
        <Link
          href="/home"
          className="w-full mt-5 flex items-center text-base font-bold hover:text-secondary-main"
        >
          Ver detalle del curso
          <span className="transform rotate-180 mx-2">
            <Arrow className="fill-current " />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default CardCourse;
