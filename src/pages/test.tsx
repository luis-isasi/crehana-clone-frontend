const test = () => {
  const onClick = () => {};

  return (
    <div className="h-102 w-100 ">
      <ul className="h-100 w-500 bg-gray-600 flex ">
        <li className="bg-blue-500 m-1 h-88 w-full"></li>
        <li className="bg-red-500 m-1 h-88 w-full"></li>
        <li className="bg-yellow-500 m-1 h-88 w-full"></li>
        <li className="bg-purple-500 m-1 h-88 w-full"></li>
        <li className="bg-black m-1 h-88 w-full"></li>
      </ul>
      <button onClick={onClick}>SIGUIENTE</button>
    </div>
  );
};

export default test;
