const BannerToPremiumText = ({ children }) => {
  return (
    <p className="flex-grow text-left lg:text-right font-semibold lg:font-bold text-sm lg:text-lg text-gray-700 lg:text-white box-border px-0 lg:px-5  my-5 lg:my-0">
      {children || 'Ten acceso total !al precio más bajo!'}
    </p>
  );
};

export default BannerToPremiumText;
