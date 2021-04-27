interface Props {
  text: string;
  name?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isSelect: boolean;
}

const Button: React.FC<Props> = ({ text, name, onClick, isSelect }) => {
  return (
    <div className="w-max">
      <button
        name={name}
        onClick={onClick}
        className={`box-border py-2 px-4 font-bold outline-none focus:outline-none  ${
          isSelect ? 'text-secondary-main' : 'hover:text-base-lighter'
        } transition-all duration-300 ease-out`}
      >
        {text}
      </button>
      <div
        className={`h-1 w-full rounded bg-transparent ${
          isSelect && 'bg-secondary-main'
        }`}
      />
    </div>
  );
};

export default Button;
