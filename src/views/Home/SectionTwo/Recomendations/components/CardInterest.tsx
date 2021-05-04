import Image from 'next/image';

const CardInterest = () => {
  return (
    <div className="relative rounded-md overflow-hidden w-full h-full">
      <Image
        layout="fill"
        loader={({ src }) => `${src}`}
        src={'https://source.unsplash.com/random'}
        priority={true}
        className="object-cover"
      />
    </div>
  );
};

export default CardInterest;
