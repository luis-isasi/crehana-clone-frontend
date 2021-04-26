import { useRef, useState } from 'react';

const Switch = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const divRef = useRef<HTMLDivElement>();

  const handleClick = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsActive(!isActive);
  };

  return (
    <button
      type="button"
      className={`rounded-3xl h-6 w-12 box-border  ${
        isActive ? 'bg-secondary-light' : 'bg-gray-400'
      } outline-none focus:outline-none transition-all duration-200`}
      onClick={handleClick}
    >
      <div
        ref={divRef}
        className={`block relative w-5 h-5 rounded-circle bg-white p-2 ${
          isActive ? 'left-6' : 'left-1'
        }  transition-all duration-300 `}
      />
    </button>
  );
};

export default Switch;
