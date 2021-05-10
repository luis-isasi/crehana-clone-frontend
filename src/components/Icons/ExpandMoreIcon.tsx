const SvgComponent: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      width={20}
      height={20}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="fill-current"
        d="M10 19a1 1 0 01-.768-1.64l4.476-5.371-4.316-5.362a1 1 0 011.56-1.254l4.828 6a1 1 0 01-.011 1.267l-5 6a1 1 0 01-.77.36z"
      />
    </svg>
  );
};

export default SvgComponent;
