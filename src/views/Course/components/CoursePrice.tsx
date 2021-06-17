const CoursePrice = () => {
  return (
    <div className="flex items-start my-4">
      <div className="flex flex-col items-start">
        <span className="text-red-main font-extrabold text-3xl mb-2">
          S/45.99
        </span>
        <p className=" text-gray-500 font-light text-sm align-top">
          Antes:
          <span className="line-through">S/241.16</span>
        </p>
      </div>
      <label className=" bg-red-main py-1 px-2 mx-3 text-sm font-bold rounded-md text-white ">
        77% dto.
      </label>
    </div>
  );
};

export default CoursePrice;
