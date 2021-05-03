import Image from 'next/image';

const CardCourse = () => {
  // md:max-w-1/3 md:w-1/3 xl:max-w-1/4 xl:w-1/4
  return (
    <div className="relative rounded-md overflow-hidden w-full   h-full">
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

export default CardCourse;
