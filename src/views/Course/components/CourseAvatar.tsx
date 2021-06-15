import Image from 'next/image';

const CourseAvatar = () => {
  return (
    <div className=" relative w-full h-50 sm:h-60">
      <Image
        layout="fill"
        objectFit="cover"
        loader={({ src }) => `${src}`}
        src={'https://source.unsplash.com/random'}
      />
    </div>
  );
};

export default CourseAvatar;
