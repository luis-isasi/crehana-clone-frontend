const Index = () => {
  return (
    <>
      {/* <div></div> */}
      <nav className="bg-green-400 w-full h-20 flex justify-around items-center">
        <h1 className="font-bold  text-xl">My Logo</h1>
        <ul className="bg-red-400  w-1/2 flex flex-col justify-between sm:flex-row md:hidden">
          <li>Home</li>
          <li>Contact</li>
          <li>About us</li>
        </ul>
      </nav>
    </>
  );
};

export default Index;
