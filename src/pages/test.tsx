import Image from 'next/image';

import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Arrow from '@Components/Icons/Arrow';

const Test = () => {
  return (
    <div className="bg-transparent relative rounded-md overflow-hidden h-98 w-72 mx-auto cursor-pointer">
      <div className="inner group h-full w-full">
        <Image
          layout="fill"
          loader={({ src }) => `${src}`}
          src={'https://source.unsplash.com/random'}
          priority={true}
          alt="cardCourse"
          className="object-cover absolute transform group-hover:scale-125 transition-all duration-200 ease-out "
        />
        <div className="bg-gray-500 z-0 text-white opacity-60 h-11 w-full  absolute top-10 group-hover:top-36  transition-all duration-200 ease-out"></div>
      </div>
    </div>
  );
};

export default Test;
