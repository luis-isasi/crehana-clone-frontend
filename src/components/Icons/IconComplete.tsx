const CompletIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      width="19"
      height="19"
      viewBox="0 0 26 26"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="fill-current"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.223 0C5.404.408 0 6.067 0 12.988c0 2.03.465 3.953 1.295 5.665l5.148-2.972a7.098 7.098 0 0 1 5.78-9.746V0zM7.201 17.064l-5.134 2.964A13.002 13.002 0 0 0 13.012 26c4.618 0 8.674-2.406 10.983-6.032l-5.131-2.963a7.09 7.09 0 0 1-5.852 3.08 7.089 7.089 0 0 1-5.811-3.02zm18.823-4.076c0 2.005-.454 3.904-1.264 5.6l-5.152-2.974a7.098 7.098 0 0 0-5.807-9.68V0c6.818.408 12.222 6.067 12.222 12.988z"
        fill="#4B22F4"
      ></path>
    </svg>
  );
};

export default CompletIcon;
