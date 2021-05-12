interface Props {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  classPadding?: string;
}

const BtnPrimary: React.FC<Props> = ({ onClick, classPadding, children }) => {
  return (
    <button
      onClick={onClick}
      className={`${classPadding}
      cursor-pointer focus:outline-none border-2 font-extrabold text-base text-primary-light active:text-white dark:text-white rounded text-center border-primary-light dark:border-white hover:opacity-80 group-hover:opacity-80 dark:active:border-primary-light  active:bg-primary-light bg-transparent w-full box-border  `}
    >
      {children}
    </button>
  );
};

export default BtnPrimary;
