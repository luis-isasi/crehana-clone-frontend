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
        className={`box-border py-3 px-4 font-bold outline-none focus:outline-none  ${
          isSelect
            ? 'text-primary-main dark:text-secondary-main'
            : 'hover:text-base-lighter'
        } transition-all duration-300 ease-out`}
      >
        {text}
      </button>
      <div
        className={`h-1 w-full rounded bg-transparent ${
          isSelect && 'bg-primary-main dark:bg-secondary-main'
        }`}
      />
    </div>
  );
};

export default Button;
