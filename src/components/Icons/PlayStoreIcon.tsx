const PlayStoreIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      width={18}
      height={19.8}
      viewBox="0 0 17 18"
      xmlns="http://www.w3.org/2000/svg"
      fill=""
    >
      <path
        className="fill-current"
        fill=""
        d="M.332.663A1.646 1.646 0 000 1.662v14.676c0 .344.103.668.288.938l7.986-8.33L.332.664zm8.673 7.521l2.59-2.702L2.49.225A1.64 1.64 0 001.218.06l7.787 8.123zm0 1.526l-7.866 8.204a1.633 1.633 0 001.35-.139l9.172-5.295-2.656-2.77zm6.194-2.147l-2.662-1.537-2.8 2.92 2.865 2.99 2.597-1.499c.52-.3.83-.837.83-1.437 0-.6-.31-1.137-.83-1.437z"
      />
    </svg>
  );
};

export default PlayStoreIcon;
