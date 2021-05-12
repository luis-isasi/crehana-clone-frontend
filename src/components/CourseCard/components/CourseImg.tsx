import Image from 'next/image';

const CourseImg: React.FC<{ inModal: boolean }> = ({ inModal }) => {
  if (inModal) {
    return (
      <figure className=" h-20 md:min-h-1/2 md:h-1/2 min-w-20 w-20 md:w-full relative z-0 ">
        <Image
          layout="responsive"
          loader={({ src }) => `${src}`}
          src={'https://source.unsplash.com/random'}
          width={80}
          height={80}
          // className="min-h-20 min-w-20"
        />
      </figure>
    );
  }

  return (
    <Image
      layout="responsive"
      loader={({ src }) => `${src}`}
      src={'https://source.unsplash.com/random'}
      width={320}
      height={240}
    />
  );
};

export default CourseImg;

// className="min-h-1/2 h-28 w-full relative"
// ${inModal ? 'h-20' : 'min-h-1/2 h-1/2'}
// ${inModal ? 'min-w-20 w-20' : 'w-full'}
// className={``}
