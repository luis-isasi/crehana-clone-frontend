import Image from 'next/image';

const CardExpertLeader = () => {
  return (
    <div className="bg-transparent w-full h-auto relative rounded-md overflow-hidden">
      <Image
        layout="responsive"
        loader={({ src }) => `${src}`}
        src="https://source.unsplash.com/random"
        objectFit="cover"
        width="400"
        height="600"
        className="relative w-full h-auto"
      />
      <div className="bg-gradient-to-t from-base-main via-base-main to-transparent w-full h-54 pt-20 bottom-0 absolute flex flex-col items-center">
        <p className="font-bold text-2xl text-center w-1 flex flex-col items-center my-2">
          Mario Calderon Galdos
        </p>
        <span className="text-gray-600 font-semibold text-sm my-1">
          Data Science Strategist
        </span>
        <div className="my-5 h-auto">
          <Image
            loader={({ src }) => `${src}`}
            src="./images/expertLeadersYoutube.png"
            height="30"
            width="120"
          />
        </div>
      </div>
    </div>
  );
};

export default CardExpertLeader;
