const FavoriteIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      width={19.125}
      height={17}
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="fill-current"
        fill=""
        d="M8.47 2.604l.53.53.53-.53C10.846 1.29 11.989.75 13.012.75c2.554 0 4.282 2.043 4.237 4.77-.023 1.398-1.051 3.12-2.758 4.926-1.56 1.65-3.567 3.248-5.492 4.563-1.93-1.315-3.949-2.898-5.514-4.54C1.772 8.67.75 6.955.75 5.533.75 2.809 2.544.75 5.112.75c1.006 0 2.023.52 3.357 1.854z"
        strokeWidth={1.5}
      />
    </svg>
  );
};

export default FavoriteIcon;
