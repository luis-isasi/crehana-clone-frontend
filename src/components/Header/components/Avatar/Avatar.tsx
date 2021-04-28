import { useState } from 'react';

import AvatarOptions from './components/AvatarOptions';

const Avatar: React.FC = () => {
  const [isOpenCard, setIsOpenCard] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpenCard(!isOpenCard);
  };

  return (
    <div className="bg-transparent min-w-min relative">
      <button
        onClick={handleClick}
        className="bg-gray-700 mx-5 lg:mx-3 xl:mx-5 rounded-circle w-8 h-8 outline-none focus:outline-none"
      ></button>
      <AvatarOptions isOpen={isOpenCard} setIsOpenCard={setIsOpenCard} />
    </div>
  );
};

export default Avatar;
