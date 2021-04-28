const Container: React.FC = ({ children }) => {
  return (
    <div className=" bg-transparent mx-auto w-full  mt-15 lg:mt-0 md:w-11/12 xl:w-11/12 2xl:max-w-screen-2xl box-border px-2  lg:px-10 xl:px-13 ">
      {children}
    </div>
  );
};

export default Container;
