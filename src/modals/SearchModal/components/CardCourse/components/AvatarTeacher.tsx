import Image from 'next/image';

const AvatarTeacher = () => {
  return (
    <figure className=" h-20 md:min-h-1/2 md:h-1/2 min-w-20 w-20 md:w-full  relative">
      <Image
        layout="fill"
        loader={({ src }) => `${src}`}
        src={'https://source.unsplash.com/random'}
        // width={120}
        // height={180}
      />
    </figure>
  );
};

export default AvatarTeacher;
