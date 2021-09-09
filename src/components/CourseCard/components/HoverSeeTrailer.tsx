import * as React from 'react';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import PlayCircleFilledOutlinedIcon from '@material-ui/icons/PlayCircleFilledOutlined';

import ModalTrailer, { DataTrailer } from '../ModalTrailer/ModalTrailer';

//TODO: "dataTrailer?:" change to "dataTrailer:"
const HoverSeeTrailer: React.FC<{ dataTrailer?: DataTrailer }> = ({
  dataTrailer,
}) => {
  const [isOpenModal, setIsOpenModal] = React.useState<boolean>(false);

  const handleClick = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <div className="absolute h-full w-full group flex items-center justify-center">
      <div className="bg-white rounded-circle opacity-80 group-hover:opacity-0 z-2">
        <PlayCircleFilledOutlinedIcon className="fill-current text-primary-main" />
      </div>
      <div className="absolute h-full w-full z-2 bg-base-main bg-opacity-70 opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in flex items-center justify-center">
        <button onClick={handleClick} className="flex items-center">
          <VisibilityOutlinedIcon className="fill-current text-white" />
          <span className="font-bold text-base mx-2 text-white">
            Ver trailer
          </span>
        </button>
        {isOpenModal && (
          <ModalTrailer
            handleIsOpenModal={handleClick}
            dataTrailer={dataTrailer}
          />
        )}
      </div>
    </div>
  );
};

export default HoverSeeTrailer;
