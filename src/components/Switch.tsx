import { useRef } from 'react';

interface Props {
  isActive?: boolean;
  handleClick?: (e: React.FormEvent<HTMLButtonElement>) => void;
}

const Switch: React.FC<Props> = ({ isActive, handleClick }) => {
  const divRef = useRef<HTMLDivElement>();

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
