interface Props {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  classPadding?: string;
}

const BtnPrimary: React.FC<Props> = ({ onClick, classPadding, children }) => {
  return (
    <button
      onClick={onClick}
      className={`${classPadding}
       `}
    >
      {children}
    </button>
  );
};

export default BtnPrimary;
