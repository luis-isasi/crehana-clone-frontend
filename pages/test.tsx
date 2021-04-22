import Image from 'next/image';

const test = () => {
  return (
    <div className="h-full w-full fles justify-center items-center ">
      <div className="bg-primary-primary h-96 w-96 mx-4 ">
        <div
          style={{ backgroundColor: 'rgba(135,143,184,0.16)' }}
          className="bg-red-300 h-full w-full object-none object-right-bottom"
        ></div>
        {/* <Image
        layout="intrinsic"
        loader={({ src }) => `${src}`}
        src={'https://source.unsplash.com/random'}
        width={50}
        height={50}
        className=" bg-purple-300 h-96 w-96 object-none object-right-bottom"
      /> */}
      </div>
    </div>
  );
};

export default test;
