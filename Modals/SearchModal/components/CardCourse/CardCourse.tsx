import Image from 'next/image';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarRoundedIcon from '@material-ui/icons/StarRounded';

import PeopleIcon from 'components/Icons/PeopleIcon';

const CardCourse: React.FC = () => {
  return (
    <div className="box-border p-3 max-w-full w-full lg:w-1/4 lg:max-w-1/4 xl:w-1/4 xl:max-w-1/4 2xl:w-1/5 2xl:max-w-1/5   ">
      <div className="bg-transparent  h-96 pb-5 mb-8 transition duration-500 ease-in-out hover:shadow-lg flex flex-col cursor-pointer">
        <figure className=" min-h-1/2 h-1/2 w-full  relative">
          <Image
            layout="fill"
            loader={({ src }) => `${src}`}
            src={'https://source.unsplash.com/random'}
            // width={120}
            // height={180}
          />
        </figure>
        <div className="box-border h-1/2 p-3">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-gray-700 text-sm h-10">
              Marketing digital desde cero
            </p>
            <button className="self-start ml-3 transition duration-300 ease-in-out transform hover:scale-125">
              <FavoriteBorderIcon className="fill-current text-secondary-main" />
            </button>
          </div>
          <span className="font-light text-sm text-gray-500 my-2">
            Por Ismael Mon
          </span>
          <div className="mb-3 mt-12 lg:mt-10 xl:mt-10  flex items-center">
            <span className="flex items-center mr-2">
              <PeopleIcon />
              <span className="mx-2 font-light text-gray-800">544</span>
            </span>
            <span className="flex items-center">
              <StarRoundedIcon
                className="fill-current text-yellow-400 text-3xl"
                style={{ fontSize: 30 }}
              />
              <span className="mx-2 font-light text-gray-800">4.89</span>
            </span>
          </div>
          <div className="flex items-center">
            <span className="text-red-500 font-extrabold text-xl">S/45.99</span>
            <span className="line-through text-gray-500 font-light text-sm mx-3 align-top ">
              S/241.16
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCourse;
